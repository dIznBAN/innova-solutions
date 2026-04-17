import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import ApiService from '../../services/api'
import {
  FaBuilding, FaIdCard, FaUser, FaEnvelope, FaPhone, FaGlobe,
  FaTag, FaPercent, FaCalendarAlt, FaCheckCircle,
  FaArrowLeft, FaHandshake, FaTicketAlt, FaChartLine, FaPaperPlane,
  FaCamera, FaTimes, FaImage
} from 'react-icons/fa'
import {
  PageWrapper, Sidebar, SidebarLogo, SidebarHeading, SidebarText,
  BenefitList, BenefitItem, BenefitIcon,
  FormArea, FormHeader, BackLink, Title, Subtitle,
  StepsBar, Step, StepDot, StepLabel, StepLine,
  Form, Section, SectionTitle, SectionDivider, FieldGrid,
  InputGroup, Label, InputWrapper, InputIcon, Input, TextArea,
  ErrorMessage, SubmitButton,
  SuccessCard, SuccessIcon, SuccessTitle, SuccessText,
  ImageUploadArea, ImagePreview, ImagePreviewImg, ImageUploadLabel,
  ImageRemoveButton, ImageUploadHint
} from './styles'

const BENEFITS = [
  { icon: <FaHandshake />, text: 'Alcance milhares de clientes qualificados' },
  { icon: <FaTicketAlt />, text: 'Gerencie seus cupons com facilidade' },
  { icon: <FaChartLine />, text: 'Acompanhe métricas em tempo real' },
]

const PartnerRegister = () => {
  const { user } = useAuth()
  const [formData, setFormData] = useState({
    companyName: '', cnpj: '', ownerName: '', email: '',
    phone: '', website: '', couponTitle: '', discount: '',
    validUntil: '', description: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState('')
  const [uploadingImage, setUploadingImage] = useState(false)

  const formatPhone = (v) => {
    const n = v.replace(/\D/g, '')
    if (n.length <= 2) return `(${n}`
    if (n.length <= 6) return `(${n.slice(0,2)}) ${n.slice(2)}`
    if (n.length <= 10) return `(${n.slice(0,2)}) ${n.slice(2,6)}-${n.slice(6)}`
    return `(${n.slice(0,2)}) ${n.slice(2,7)}-${n.slice(7,11)}`
  }

  const formatCNPJ = (v) => {
    const n = v.replace(/\D/g, '')
    if (n.length <= 2) return n
    if (n.length <= 5) return `${n.slice(0,2)}.${n.slice(2)}`
    if (n.length <= 8) return `${n.slice(0,2)}.${n.slice(2,5)}.${n.slice(5)}`
    if (n.length <= 12) return `${n.slice(0,2)}.${n.slice(2,5)}.${n.slice(5,8)}/${n.slice(8)}`
    return `${n.slice(0,2)}.${n.slice(2,5)}.${n.slice(5,8)}/${n.slice(8,12)}-${n.slice(12,14)}`
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const formatted = name === 'phone' ? formatPhone(value) : name === 'cnpj' ? formatCNPJ(value) : value
    setFormData(prev => ({ ...prev, [name]: formatted }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!formData.companyName.trim()) e.companyName = 'Nome da empresa é obrigatório'
    if (!formData.cnpj.trim()) e.cnpj = 'CNPJ é obrigatório'
    else if (formData.cnpj.replace(/\D/g, '').length !== 14) e.cnpj = 'CNPJ deve ter 14 dígitos'
    if (!formData.ownerName.trim()) e.ownerName = 'Nome do responsável é obrigatório'
    if (!formData.email.trim()) e.email = 'E-mail é obrigatório'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'E-mail inválido'
    if (!formData.phone.trim()) e.phone = 'Telefone é obrigatório'
    else if (formData.phone.replace(/\D/g, '').length < 10) e.phone = 'Telefone inválido'
    if (!formData.couponTitle.trim()) e.couponTitle = 'Título do cupom é obrigatório'
    if (!formData.discount) e.discount = 'Desconto é obrigatório'
    else if (formData.discount < 1 || formData.discount > 100) e.discount = 'Entre 1% e 100%'
    if (!formData.validUntil) e.validUntil = 'Data de validade é obrigatória'
    else if (new Date(formData.validUntil) <= new Date()) e.validUntil = 'A data deve ser futura'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    if (file.size > 5 * 1024 * 1024) {
      setApiError('Imagem muito grande. Máximo 5MB.')
      return
    }
    setImageFile(file)
    setImagePreview(URL.createObjectURL(file))
  }

  const handleImageRemove = () => {
    setImageFile(null)
    setImagePreview('')
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    setApiError('')
    try {
      let imageUrl = ''
      if (imageFile) {
        setUploadingImage(true)
        imageUrl = await uploadToImgBB(imageFile)
        setUploadingImage(false)
      }
      await ApiService.registerPartner({ ...formData, imageUrl, firebaseUid: user?.uid })
      setSubmitted(true)
    } catch (err) {
      setUploadingImage(false)
      setApiError(err.message || 'Erro ao enviar cadastro. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  const companyFilled = formData.companyName && formData.cnpj && formData.ownerName && formData.email && formData.phone
  const currentStep = submitted ? 3 : companyFilled ? 2 : 1

  return (
    <PageWrapper>
      <Sidebar>
        <SidebarLogo>
          Innova Solutions
          <span>Portal de Parceiros</span>
        </SidebarLogo>
        <SidebarHeading>Faça parte da nossa rede de parceiros</SidebarHeading>
        <SidebarText>
          Conecte sua marca a milhares de clientes apaixonados por joias e acessórios.
        </SidebarText>
        <BenefitList>
          {BENEFITS.map((b, i) => (
            <BenefitItem key={i}>
              <BenefitIcon>{b.icon}</BenefitIcon>
              {b.text}
            </BenefitItem>
          ))}
        </BenefitList>
      </Sidebar>

      <FormArea>
        <FormHeader>
          <BackLink href="/">
            <FaArrowLeft /> Voltar ao início
          </BackLink>
          <Title>Cadastro de Parceiro</Title>
          <Subtitle>Preencha os dados abaixo para solicitar sua parceria</Subtitle>
        </FormHeader>

        <StepsBar>
          <Step>
            <StepDot active={currentStep === 1} done={currentStep > 1}>1</StepDot>
            <StepLabel active={currentStep === 1}>Empresa</StepLabel>
          </Step>
          <StepLine done={currentStep > 1} />
          <Step>
            <StepDot active={currentStep === 2} done={currentStep > 2}>2</StepDot>
            <StepLabel active={currentStep === 2}>Cupom</StepLabel>
          </Step>
          <StepLine done={currentStep > 2} />
          <Step>
            <StepDot active={currentStep === 3} done={currentStep > 3}>3</StepDot>
            <StepLabel active={currentStep === 3}>Concluído</StepLabel>
          </Step>
        </StepsBar>

        {submitted ? (
          <SuccessCard>
            <SuccessIcon><FaCheckCircle /></SuccessIcon>
            <SuccessTitle>Cadastro enviado!</SuccessTitle>
            <SuccessText>
              Recebemos sua solicitação de parceria. Nossa equipe irá analisar e entrar em contato em até 2 dias úteis.
            </SuccessText>
            <SubmitButton as="a" href="/" style={{ textDecoration: 'none', display: 'inline-flex' }}>
              Voltar ao início
            </SubmitButton>
          </SuccessCard>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Section>
              <SectionTitle><FaBuilding /> Dados da Empresa</SectionTitle>
              <SectionDivider />

              <FieldGrid cols={2}>
                <InputGroup>
                  <Label>Nome da empresa *</Label>
                  <InputWrapper>
                    <InputIcon error={errors.companyName}><FaBuilding /></InputIcon>
                    <Input
                      hasIcon
                      name="companyName"
                      placeholder="Ex: Bella Acessórios"
                      value={formData.companyName}
                      onChange={handleChange}
                      error={errors.companyName}
                    />
                  </InputWrapper>
                  {errors.companyName && <ErrorMessage>{errors.companyName}</ErrorMessage>}
                </InputGroup>

                <InputGroup>
                  <Label>CNPJ *</Label>
                  <InputWrapper>
                    <InputIcon error={errors.cnpj}><FaIdCard /></InputIcon>
                    <Input
                      hasIcon
                      name="cnpj"
                      placeholder="00.000.000/0000-00"
                      value={formData.cnpj}
                      onChange={handleChange}
                      error={errors.cnpj}
                      maxLength="18"
                    />
                  </InputWrapper>
                  {errors.cnpj && <ErrorMessage>{errors.cnpj}</ErrorMessage>}
                </InputGroup>
              </FieldGrid>

              <InputGroup>
                <Label>Nome do responsável *</Label>
                <InputWrapper>
                  <InputIcon error={errors.ownerName}><FaUser /></InputIcon>
                  <Input
                    hasIcon
                    name="ownerName"
                    placeholder="Nome completo"
                    value={formData.ownerName}
                    onChange={handleChange}
                    error={errors.ownerName}
                  />
                </InputWrapper>
                {errors.ownerName && <ErrorMessage>{errors.ownerName}</ErrorMessage>}
              </InputGroup>

              <FieldGrid cols={2}>
                <InputGroup>
                  <Label>E-mail corporativo *</Label>
                  <InputWrapper>
                    <InputIcon error={errors.email}><FaEnvelope /></InputIcon>
                    <Input
                      hasIcon
                      type="email"
                      name="email"
                      placeholder="contato@empresa.com"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                    />
                  </InputWrapper>
                  {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </InputGroup>

                <InputGroup>
                  <Label>Telefone *</Label>
                  <InputWrapper>
                    <InputIcon error={errors.phone}><FaPhone /></InputIcon>
                    <Input
                      hasIcon
                      type="tel"
                      name="phone"
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      error={errors.phone}
                      maxLength="15"
                    />
                  </InputWrapper>
                  {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
                </InputGroup>
              </FieldGrid>

              <InputGroup>
                <Label>Logo / Imagem da empresa</Label>
                {imagePreview ? (
                  <ImagePreview>
                    <ImagePreviewImg src={imagePreview} alt="Preview" />
                    <ImageRemoveButton type="button" onClick={handleImageRemove}>
                      <FaTimes /> Remover
                    </ImageRemoveButton>
                  </ImagePreview>
                ) : (
                  <ImageUploadArea>
                    <FaImage />
                    <ImageUploadLabel>
                      <FaCamera /> Escolher imagem
                      <input type="file" accept="image/*" onChange={handleImageChange} />
                    </ImageUploadLabel>
                    <ImageUploadHint>PNG, JPG ou WEBP — máx. 5MB</ImageUploadHint>
                  </ImageUploadArea>
                )}
              </InputGroup>

              <InputGroup>
                <Label>Website</Label>
                <InputWrapper>
                  <InputIcon><FaGlobe /></InputIcon>
                  <Input
                    hasIcon
                    type="url"
                    name="website"
                    placeholder="https://www.suaempresa.com.br (opcional)"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </InputWrapper>
              </InputGroup>
            </Section>

            <Section>
              <SectionTitle><FaTicketAlt /> Primeiro Cupom</SectionTitle>
              <SectionDivider />

              <InputGroup>
                <Label>Título do cupom *</Label>
                <InputWrapper>
                  <InputIcon error={errors.couponTitle}><FaTag /></InputIcon>
                  <Input
                    hasIcon
                    name="couponTitle"
                    placeholder="Ex: 20% OFF em toda a coleção"
                    value={formData.couponTitle}
                    onChange={handleChange}
                    error={errors.couponTitle}
                  />
                </InputWrapper>
                {errors.couponTitle && <ErrorMessage>{errors.couponTitle}</ErrorMessage>}
              </InputGroup>

              <FieldGrid cols={2}>
                <InputGroup>
                  <Label>Desconto (%) *</Label>
                  <InputWrapper>
                    <InputIcon error={errors.discount}><FaPercent /></InputIcon>
                    <Input
                      hasIcon
                      type="number"
                      name="discount"
                      placeholder="Ex: 20"
                      min="1"
                      max="100"
                      value={formData.discount}
                      onChange={handleChange}
                      error={errors.discount}
                    />
                  </InputWrapper>
                  {errors.discount && <ErrorMessage>{errors.discount}</ErrorMessage>}
                </InputGroup>

                <InputGroup>
                  <Label>Válido até *</Label>
                  <InputWrapper>
                    <InputIcon error={errors.validUntil}><FaCalendarAlt /></InputIcon>
                    <Input
                      hasIcon
                      type="date"
                      name="validUntil"
                      value={formData.validUntil}
                      onChange={handleChange}
                      error={errors.validUntil}
                    />
                  </InputWrapper>
                  {errors.validUntil && <ErrorMessage>{errors.validUntil}</ErrorMessage>}
                </InputGroup>
              </FieldGrid>

              <InputGroup>
                <Label>Descrição</Label>
                <TextArea
                  name="description"
                  placeholder="Descreva os detalhes do cupom, condições de uso, produtos incluídos... (opcional)"
                  rows="3"
                  value={formData.description}
                  onChange={handleChange}
                />
              </InputGroup>
            </Section>

            <SubmitButton type="submit" disabled={loading}>
              <FaPaperPlane />
              {uploadingImage ? 'Enviando imagem...' : loading ? 'Enviando...' : 'Enviar solicitação de parceria'}
            </SubmitButton>
            {apiError && <ErrorMessage style={{ justifyContent: 'center', marginTop: '0.5rem' }}>{apiError}</ErrorMessage>}
          </Form>
        )}
      </FormArea>
    </PageWrapper>
  )
}

export default PartnerRegister
