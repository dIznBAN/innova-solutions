import { useState, useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../services/api'
import toast, { Toaster } from 'react-hot-toast'
import {
  FaStore, FaEdit, FaSave, FaTimes, FaTicketAlt, FaPlus,
  FaGlobe, FaPhone, FaEnvelope, FaCamera, FaCalendarAlt,
  FaExclamationTriangle, FaTrash, FaPercent, FaTag
} from 'react-icons/fa'
import {
  Container, ContentWrapper, PageHeader, PageTitle, StatusBadge,
  Card, CardHeader, CardTitle, CardBody,
  StoreHero, StoreLogoWrapper, StoreLogo, StoreInfo, StoreMetaRow, StoreMeta,
  Form, FieldGrid, FormGroup, Label, Input, Textarea,
  ImageUploadBox, ImageThumb, ImageActions, ImageLabel, ImageHint,
  ButtonRow, PrimaryButton, SecondaryButton, DangerButton,
  CouponsGrid, CouponCard, CouponHeader, CouponDiscount, CouponActions,
  CouponEditButton, CouponDeleteButton, CouponTitle, CouponDescription, CouponMeta,
  EmptyState, ModalOverlay, ModalBox, ModalHeader, ModalCloseButton, PendingBanner
} from './styles'

const emptyForm = {
  name: '', email: '', phone: '', website_url: '', image_url: '', imageFile: null
}

const emptyCoupon = {
  title: '', discount: '', description: '', valid_until: '', imageFile: null, image_url: ''
}

const uploadToImgBB = async (file) => {
  const base64 = await new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result.split(',')[1])
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
  const body = new URLSearchParams()
  body.append('key', '06e7312be7cd16b207344fba43e96449')
  body.append('image', base64)
  const res = await fetch('https://api.imgbb.com/1/upload', { method: 'POST', body })
  const data = await res.json()
  if (!data.success) throw new Error('Falha ao fazer upload da imagem')
  return data.data.url
}

const MyStore = () => {
  const { userStores, setUserStores } = useAuth()
  const { id } = useParams()
  const navigate = useNavigate()
  const userStore = userStores?.find(s => String(s.id) === String(id)) || null

  const [isEditingStore, setIsEditingStore] = useState(false)
  const [storeForm, setStoreForm] = useState(emptyForm)
  const [storeLoading, setStoreLoading] = useState(false)

  const [coupons, setCoupons] = useState([])
  const [couponsLoading, setCouponsLoading] = useState(true)

  const [couponModal, setCouponModal] = useState(null) // null | 'new' | coupon object
  const [couponForm, setCouponForm] = useState(emptyCoupon)
  const [couponLoading, setCouponLoading] = useState(false)

  useEffect(() => {
    if (!userStore) { navigate('/'); return }
    setStoreForm({
      name: userStore.name || '',
      email: userStore.email || '',
      phone: userStore.phone || '',
      website_url: userStore.website_url || '',
      image_url: userStore.image_url || '',
      imageFile: null
    })
    loadCoupons()
  }, [userStore])

  const loadCoupons = async () => {
    try {
      setCouponsLoading(true)
      const data = await api.getCouponsByStore(userStore.id)
      setCoupons(data)
    } catch {
      toast.error('Erro ao carregar cupons')
    } finally {
      setCouponsLoading(false)
    }
  }

  const handleStoreChange = (e) => {
    const { name, value } = e.target
    setStoreForm(prev => ({ ...prev, [name]: value }))
  }

  const handleStoreImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    if (file.size > 5 * 1024 * 1024) { toast.error('Imagem muito grande. Máximo 5MB'); return }
    setStoreForm(prev => ({ ...prev, imageFile: file, image_url: URL.createObjectURL(file) }))
  }

  const handleStoreSave = async (e) => {
    e.preventDefault()
    setStoreLoading(true)
    try {
      let imageUrl = storeForm.image_url
      if (storeForm.imageFile) imageUrl = await uploadToImgBB(storeForm.imageFile)
      const updated = await api.updateStore(userStore.id, {
        name: storeForm.name,
        email: storeForm.email,
        phone: storeForm.phone,
        website_url: storeForm.website_url,
        image_url: imageUrl,
        status: userStore.status
      })
      setUserStores(prev => prev.map(s => s.id === userStore.id ? updated : s))
      setIsEditingStore(false)
      toast.success('Loja atualizada com sucesso!')
    } catch {
      toast.error('Erro ao atualizar loja')
    } finally {
      setStoreLoading(false)
    }
  }

  const handleCancelEdit = () => {
    setIsEditingStore(false)
    setStoreForm({
      name: userStore.name || '',
      email: userStore.email || '',
      phone: userStore.phone || '',
      website_url: userStore.website_url || '',
      image_url: userStore.image_url || '',
      imageFile: null
    })
  }

  const openNewCoupon = () => {
    setCouponForm(emptyCoupon)
    setCouponModal('new')
  }

  const openEditCoupon = (coupon) => {
    setCouponForm({
      title: coupon.title || '',
      discount: coupon.discount || '',
      description: coupon.description || '',
      valid_until: coupon.valid_until ? coupon.valid_until.split('T')[0] : '',
      image_url: coupon.image_url || '',
      imageFile: null
    })
    setCouponModal(coupon)
  }

  const handleCouponChange = (e) => {
    const { name, value } = e.target
    setCouponForm(prev => ({ ...prev, [name]: value }))
  }

  const handleCouponImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    if (file.size > 5 * 1024 * 1024) { toast.error('Imagem muito grande. Máximo 5MB'); return }
    setCouponForm(prev => ({ ...prev, imageFile: file, image_url: URL.createObjectURL(file) }))
  }

  const handleCouponSave = async (e) => {
    e.preventDefault()
    if (!couponForm.title.trim()) { toast.error('Título é obrigatório'); return }
    if (!couponForm.discount || couponForm.discount <= 0) { toast.error('Desconto inválido'); return }
    if (!couponForm.valid_until) { toast.error('Data de validade é obrigatória'); return }

    setCouponLoading(true)
    try {
      let imageUrl = couponForm.image_url
      if (couponForm.imageFile) imageUrl = await uploadToImgBB(couponForm.imageFile)

      const payload = {
        store_id: userStore.id,
        title: couponForm.title,
        discount: parseFloat(couponForm.discount),
        description: couponForm.description,
        image_url: imageUrl || null,
        valid_from: new Date().toISOString(),
        valid_until: new Date(couponForm.valid_until + 'T23:59:59').toISOString(),
        created_at: new Date().toISOString()
      }

      if (couponModal === 'new') {
        const created = await api.createCoupon(payload)
        setCoupons(prev => [created, ...prev])
        toast.success('Cupom criado com sucesso!')
      } else {
        const updated = await api.updateCoupon(couponModal.id, payload)
        setCoupons(prev => prev.map(c => c.id === couponModal.id ? updated : c))
        toast.success('Cupom atualizado com sucesso!')
      }
      setCouponModal(null)
    } catch {
      toast.error('Erro ao salvar cupom')
    } finally {
      setCouponLoading(false)
    }
  }

  const handleDeleteCoupon = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir este cupom?')) return
    try {
      await api.deleteCoupon(id)
      setCoupons(prev => prev.filter(c => c.id !== id))
      toast.success('Cupom excluído')
    } catch {
      toast.error('Erro ao excluir cupom')
    }
  }

  if (!userStore) return null

  return (
    <Container>
      <Toaster position="top-right" toastOptions={{
        style: { background: '#fff', color: '#1A1A1A', border: '1px solid rgba(205,160,155,0.2)', borderRadius: '12px' },
        success: { iconTheme: { primary: '#A67168', secondary: '#fff' } }
      }} />

      <ContentWrapper>
        <PageHeader>
          <PageTitle>Minha <span>Loja</span></PageTitle>
          <StatusBadge $status={userStore.status}>{userStore.status}</StatusBadge>
        </PageHeader>

        {userStore.status === 'Pendente' && (
          <PendingBanner>
            <FaExclamationTriangle />
            <div>
              <h4>Cadastro em análise</h4>
              <p>Sua loja está sendo analisada pela nossa equipe. Em breve você receberá uma resposta. Enquanto isso, você já pode editar as informações e gerenciar seus cupons.</p>
            </div>
          </PendingBanner>
        )}

        {/* Informações da Loja */}
        <Card>
          <CardHeader>
            <CardTitle><FaStore /> Informações da Loja</CardTitle>
            {!isEditingStore && (
              <SecondaryButton onClick={() => setIsEditingStore(true)}>
                <FaEdit /> Editar
              </SecondaryButton>
            )}
          </CardHeader>
          <CardBody>
            {!isEditingStore ? (
              <StoreHero>
                <StoreLogoWrapper>
                  <StoreLogo $hasImage={!!userStore.image_url}>
                    {userStore.image_url
                      ? <img src={userStore.image_url} alt={userStore.name} />
                      : userStore.name?.charAt(0).toUpperCase()
                    }
                  </StoreLogo>
                </StoreLogoWrapper>
                <StoreInfo>
                  <h2>{userStore.name}</h2>
                  <StoreMetaRow>
                    {userStore.email && <StoreMeta><FaEnvelope />{userStore.email}</StoreMeta>}
                    {userStore.phone && <StoreMeta><FaPhone />{userStore.phone}</StoreMeta>}
                    {userStore.website_url && (
                      <StoreMeta>
                        <FaGlobe />
                        <a href={userStore.website_url} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>
                          {userStore.website_url.replace(/^https?:\/\//, '')}
                        </a>
                      </StoreMeta>
                    )}
                  </StoreMetaRow>
                </StoreInfo>
              </StoreHero>
            ) : (
              <Form onSubmit={handleStoreSave}>
                <FormGroup>
                  <Label>Logo da loja</Label>
                  <ImageUploadBox $hasImage={!!storeForm.image_url}>
                    <ImageThumb>
                      {storeForm.image_url
                        ? <img src={storeForm.image_url} alt="preview" />
                        : <FaStore />
                      }
                    </ImageThumb>
                    <ImageActions>
                      <ImageLabel>
                        <FaCamera /> Alterar imagem
                        <input type="file" accept="image/*" onChange={handleStoreImageChange} />
                      </ImageLabel>
                      <ImageHint>PNG, JPG ou WEBP — máx. 5MB</ImageHint>
                    </ImageActions>
                  </ImageUploadBox>
                </FormGroup>

                <FieldGrid $cols={2}>
                  <FormGroup>
                    <Label>Nome da loja *</Label>
                    <Input name="name" value={storeForm.name} onChange={handleStoreChange} required />
                  </FormGroup>
                  <FormGroup>
                    <Label>E-mail</Label>
                    <Input type="email" name="email" value={storeForm.email} onChange={handleStoreChange} />
                  </FormGroup>
                </FieldGrid>

                <FieldGrid $cols={2}>
                  <FormGroup>
                    <Label>Telefone</Label>
                    <Input name="phone" value={storeForm.phone} onChange={handleStoreChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label>Website</Label>
                    <Input type="url" name="website_url" value={storeForm.website_url} onChange={handleStoreChange} placeholder="https://" />
                  </FormGroup>
                </FieldGrid>

                <ButtonRow>
                  <SecondaryButton type="button" onClick={handleCancelEdit}>
                    <FaTimes /> Cancelar
                  </SecondaryButton>
                  <PrimaryButton type="submit" disabled={storeLoading}>
                    <FaSave /> {storeLoading ? 'Salvando...' : 'Salvar alterações'}
                  </PrimaryButton>
                </ButtonRow>
              </Form>
            )}
          </CardBody>
        </Card>

        {/* Cupons */}
        <Card>
          <CardHeader>
            <CardTitle><FaTicketAlt /> Cupons da Loja</CardTitle>
            <PrimaryButton onClick={openNewCoupon}>
              <FaPlus /> Novo Cupom
            </PrimaryButton>
          </CardHeader>
          <CardBody>
            {couponsLoading ? (
              <EmptyState><p>Carregando cupons...</p></EmptyState>
            ) : coupons.length === 0 ? (
              <EmptyState>
                <FaTicketAlt />
                <h3>Nenhum cupom cadastrado</h3>
                <p>Crie seu primeiro cupom para atrair clientes.</p>
                <PrimaryButton onClick={openNewCoupon}><FaPlus /> Criar cupom</PrimaryButton>
              </EmptyState>
            ) : (
              <CouponsGrid>
                {coupons.map(coupon => (
                  <CouponCard key={coupon.id}>
                    <CouponHeader>
                      <CouponDiscount>{coupon.discount}% OFF</CouponDiscount>
                      <CouponActions>
                        <CouponEditButton onClick={() => openEditCoupon(coupon)} title="Editar"><FaEdit /></CouponEditButton>
                        <CouponDeleteButton onClick={() => handleDeleteCoupon(coupon.id)} title="Excluir"><FaTrash /></CouponDeleteButton>
                      </CouponActions>
                    </CouponHeader>
                    <CouponTitle>{coupon.title}</CouponTitle>
                    {coupon.description && <CouponDescription>{coupon.description}</CouponDescription>}
                    <CouponMeta>
                      <FaCalendarAlt />
                      Válido até {new Date(coupon.valid_until).toLocaleDateString('pt-BR')}
                    </CouponMeta>
                  </CouponCard>
                ))}
              </CouponsGrid>
            )}
          </CardBody>
        </Card>
      </ContentWrapper>

      {/* Modal de Cupom */}
      {couponModal !== null && (
        <ModalOverlay onClick={() => setCouponModal(null)}>
          <ModalBox onClick={e => e.stopPropagation()}>
            <ModalHeader>
              <h3>{couponModal === 'new' ? 'Novo Cupom' : 'Editar Cupom'}</h3>
              <ModalCloseButton onClick={() => setCouponModal(null)}><FaTimes /></ModalCloseButton>
            </ModalHeader>

            <Form onSubmit={handleCouponSave}>
              <FormGroup>
                <Label>Título do cupom *</Label>
                <Input
                  name="title"
                  placeholder="Ex: 20% OFF em toda a coleção"
                  value={couponForm.title}
                  onChange={handleCouponChange}
                  required
                />
              </FormGroup>

              <FieldGrid $cols={2}>
                <FormGroup>
                  <Label>Desconto (%) *</Label>
                  <Input
                    type="number"
                    name="discount"
                    placeholder="Ex: 20"
                    min="1"
                    max="100"
                    value={couponForm.discount}
                    onChange={handleCouponChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Válido até *</Label>
                  <Input
                    type="date"
                    name="valid_until"
                    value={couponForm.valid_until}
                    onChange={handleCouponChange}
                    required
                  />
                </FormGroup>
              </FieldGrid>

              <FormGroup>
                <Label>Descrição</Label>
                <Textarea
                  name="description"
                  placeholder="Detalhes, condições de uso..."
                  value={couponForm.description}
                  onChange={handleCouponChange}
                  rows={3}
                />
              </FormGroup>

              <FormGroup>
                <Label>Imagem do cupom (opcional)</Label>
                <ImageUploadBox $hasImage={!!couponForm.image_url}>
                  <ImageThumb>
                    {couponForm.image_url
                      ? <img src={couponForm.image_url} alt="preview" />
                      : <FaTag />
                    }
                  </ImageThumb>
                  <ImageActions>
                    <ImageLabel>
                      <FaCamera /> {couponForm.image_url ? 'Alterar' : 'Adicionar imagem'}
                      <input type="file" accept="image/*" onChange={handleCouponImageChange} />
                    </ImageLabel>
                    <ImageHint>PNG, JPG ou WEBP — máx. 5MB</ImageHint>
                  </ImageActions>
                </ImageUploadBox>
              </FormGroup>

              <ButtonRow>
                <SecondaryButton type="button" onClick={() => setCouponModal(null)}>
                  <FaTimes /> Cancelar
                </SecondaryButton>
                <PrimaryButton type="submit" disabled={couponLoading}>
                  <FaSave /> {couponLoading ? 'Salvando...' : 'Salvar'}
                </PrimaryButton>
              </ButtonRow>
            </Form>
          </ModalBox>
        </ModalOverlay>
      )}
    </Container>
  )
}

export default MyStore
