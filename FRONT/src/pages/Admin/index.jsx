import { useState, useEffect } from 'react'
import { FaTrash, FaUsers, FaStore, FaTicketAlt, FaShieldAlt, FaUserShield, FaCheck, FaTimes, FaExclamationTriangle } from 'react-icons/fa'
import ApiService from '../../services/api'
import {
  Container, Header, Title,
  StatsGrid, StatCard, StatIcon, StatInfo, StatNumber, StatLabel,
  TabsContainer, Tab, TabContent,
  FilterContainer, SearchInput,
  TableWrapper, Table, TableHeader, TableHeaderCell, TableBody, TableRow, TableCell,
  Badge, ActionsCell, ActionButton,
  EmptyState, LoadingState, UserAvatar, UserInfo,
  ModalOverlay, ModalBox, ModalTitle, ModalText, ModalTextarea, ModalActions, ModalCancelButton, ModalConfirmButton,
  StoreAvatar
} from './styles'

const statusVariant = (status) => {
  if (status === 'Aprovada') return 'active'
  if (status === 'Pendente') return 'pending'
  return 'inactive'
}

const statusLabel = (status) => {
  if (status === 'Aprovada') return 'Aprovada'
  if (status === 'Pendente') return 'Pendente'
  if (status === 'Rejeitada') return 'Rejeitada'
  return status
}

const Admin = () => {
  const [activeTab, setActiveTab] = useState('users')
  const [searchTerm, setSearchTerm] = useState('')
  const [realUsers, setRealUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [realPartners, setRealPartners] = useState([])
  const [filteredPartners, setFilteredPartners] = useState([])
  const [realCoupons, setRealCoupons] = useState([])
  const [filteredCoupons, setFilteredCoupons] = useState([])
  const [loadingCoupons, setLoadingCoupons] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loadingPartners, setLoadingPartners] = useState(false)
  const [rejectModal, setRejectModal] = useState(null)
  const [rejectReason, setRejectReason] = useState('')
  const [rejectLoading, setRejectLoading] = useState(false)

  useEffect(() => {
    loadUsers()
    loadPartners()
    loadCoupons()
  }, [])

  const loadUsers = async () => {
    try {
      setLoading(true)
      const users = await ApiService.getAllUsers()
      setRealUsers(users)
      setFilteredUsers(users)
    } catch (error) {
      console.error('Erro ao carregar usuários:', error)
    } finally {
      setLoading(false)
    }
  }

  const loadCoupons = async () => {
    try {
      setLoadingCoupons(true)
      const coupons = await ApiService.getAllCoupons()
      setRealCoupons(coupons)
      setFilteredCoupons(coupons)
    } catch (error) {
      console.error('Erro ao carregar cupons:', error)
    } finally {
      setLoadingCoupons(false)
    }
  }

  const loadPartners = async () => {
    try {
      setLoadingPartners(true)
      const stores = await ApiService.getAllStores()
      setRealPartners(stores)
      setFilteredPartners(stores)
    } catch (error) {
      console.error('Erro ao carregar parceiros:', error)
    } finally {
      setLoadingPartners(false)
    }
  }

  const handleApprovePartner = async (id) => {
    try {
      const updated = await ApiService.updateStoreStatus(id, 'Aprovada')
      const newList = realPartners.map(p => p.id === id ? updated : p)
      setRealPartners(newList)
      setFilteredPartners(newList)
    } catch (err) {
      alert(err.message || 'Erro ao aprovar parceiro')
    }
  }

  const handleOpenRejectModal = (partner) => {
    setRejectModal(partner)
    setRejectReason('')
  }

  const handleConfirmReject = async () => {
    if (!rejectReason.trim()) return
    setRejectLoading(true)
    try {
      const updated = await ApiService.updateStoreStatus(rejectModal.id, 'Rejeitada', rejectReason)
      const newList = realPartners.map(p => p.id === rejectModal.id ? updated : p)
      setRealPartners(newList)
      setFilteredPartners(newList)
      setRejectModal(null)
    } catch (err) {
      alert(err.message || 'Erro ao recusar parceiro')
    } finally {
      setRejectLoading(false)
    }
  }

  const handleDeleteStore = async (id) => {
    if (!window.confirm('Tem certeza? Isso irá excluir a loja e TODOS os cupons dela permanentemente.')) return
    try {
      await ApiService.deleteStore(id)
      const updated = realPartners.filter(p => p.id !== id)
      setRealPartners(updated)
      setFilteredPartners(updated)
    } catch (err) {
      alert(err.message || 'Erro ao excluir loja')
    }
  }

  const handleDeleteUser = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir este usuário?')) return
    try {
      await ApiService.deleteUser(id)
      const updated = realUsers.filter(u => u.id !== id)
      setRealUsers(updated)
      setFilteredUsers(updated)
    } catch {
      alert('Erro ao excluir usuário')
    }
  }

  const handleToggleRole = async (user) => {
    const newRole = user.role === 'ADMIN' ? 'USER' : 'ADMIN'
    try {
      await ApiService.updateUserRole(user.id, newRole)
      const updated = realUsers.map(u => u.id === user.id ? { ...u, role: newRole } : u)
      setRealUsers(updated)
      setFilteredUsers(updated)
    } catch {
      alert('Erro ao atualizar cargo')
    }
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
    const lower = term.toLowerCase()
    setFilteredPartners(realPartners.filter(p =>
      p.name?.toLowerCase().includes(lower) || p.email?.toLowerCase().includes(lower)
    ))
    setFilteredCoupons(realCoupons.filter(c =>
      c.title?.toLowerCase().includes(lower) || String(c.store_id).includes(lower)
    ))
    setFilteredUsers(realUsers.filter(u =>
      u.name?.toLowerCase().includes(lower) || u.email?.toLowerCase().includes(lower)
    ))
  }

  return (
    <>
      <Container>
        <Header>
          <Title>Painel Administrativo</Title>
        </Header>

        <StatsGrid>
          <StatCard>
            <StatIcon><FaStore /></StatIcon>
            <StatInfo>
              <StatNumber>{realPartners.filter(p => p.status === 'Aprovada').length || '—'}</StatNumber>
              <StatLabel>Parceiros Ativos</StatLabel>
            </StatInfo>
          </StatCard>
          <StatCard>
            <StatIcon><FaTicketAlt /></StatIcon>
            <StatInfo>
              <StatNumber>{realCoupons.length || '—'}</StatNumber>
              <StatLabel>Cupons Ativos</StatLabel>
            </StatInfo>
          </StatCard>
          <StatCard>
            <StatIcon><FaUsers /></StatIcon>
            <StatInfo>
              <StatNumber>{realUsers.length || '—'}</StatNumber>
              <StatLabel>Usuários</StatLabel>
            </StatInfo>
          </StatCard>

        </StatsGrid>

        <TabsContainer>
          <Tab $active={activeTab === 'users'} onClick={() => setActiveTab('users')}>Usuários</Tab>
          <Tab $active={activeTab === 'partners'} onClick={() => setActiveTab('partners')}>Parceiros</Tab>
          <Tab $active={activeTab === 'coupons'} onClick={() => setActiveTab('coupons')}>Cupons</Tab>
        </TabsContainer>

        <TabContent>
          <FilterContainer>
            <SearchInput
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </FilterContainer>

          {activeTab === 'users' && (
            <TableWrapper>
              <Table>
                <TableHeader>
                  <tr>
                    <TableHeaderCell>Usuário</TableHeaderCell>
                    <TableHeaderCell>Email</TableHeaderCell>
                    <TableHeaderCell>Cargo</TableHeaderCell>
                    <TableHeaderCell>Ações</TableHeaderCell>
                  </tr>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    <tr><td colSpan="4"><LoadingState>Carregando usuários...</LoadingState></td></tr>
                  ) : filteredUsers.length === 0 ? (
                    <tr><td colSpan="4"><EmptyState>Nenhum usuário encontrado</EmptyState></td></tr>
                  ) : filteredUsers.map(user => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <UserInfo>
                          <UserAvatar>
                            {user.profilePicture
                              ? <img src={user.profilePicture} alt={user.name} />
                              : user.name?.charAt(0).toUpperCase()
                            }
                          </UserAvatar>
                          {user.name}
                        </UserInfo>
                      </TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge $variant={user.role === 'ADMIN' ? 'admin' : 'user'}>
                          {user.role === 'ADMIN' ? <><FaShieldAlt style={{marginRight: '4px'}}/> Admin</> : 'Usuário'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <ActionsCell>
                          <ActionButton $neutral onClick={() => handleToggleRole(user)}>
                            <FaUserShield />
                            {user.role === 'ADMIN' ? 'Remover Admin' : 'Tornar Admin'}
                          </ActionButton>
                          <ActionButton $reject onClick={() => handleDeleteUser(user.id)}>
                            <FaTrash /> Excluir
                          </ActionButton>
                        </ActionsCell>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableWrapper>
          )}

          {activeTab === 'partners' && (
            <TableWrapper>
              <Table>
                <TableHeader>
                  <tr>
                    <TableHeaderCell>Nome</TableHeaderCell>
                    <TableHeaderCell>Email</TableHeaderCell>
                    <TableHeaderCell>Status</TableHeaderCell>
                    <TableHeaderCell>Responsável</TableHeaderCell>
                    <TableHeaderCell>Ações</TableHeaderCell>
                  </tr>
                </TableHeader>
                <TableBody>
                  {loadingPartners ? (
                    <tr><td colSpan="5"><LoadingState>Carregando parceiros...</LoadingState></td></tr>
                  ) : filteredPartners.length === 0 ? (
                    <tr><td colSpan="5"><EmptyState>Nenhum parceiro encontrado</EmptyState></td></tr>
                  ) : filteredPartners.map(partner => (
                    <TableRow key={partner.id}>
                      <TableCell>
                        <UserInfo>
                          <StoreAvatar>
                            {partner.image_url
                              ? <img src={partner.image_url} alt={partner.name} />
                              : partner.name?.charAt(0).toUpperCase()
                            }
                          </StoreAvatar>
                          {partner.name}
                        </UserInfo>
                      </TableCell>
                      <TableCell>{partner.email || '—'}</TableCell>
                      <TableCell><Badge $variant={statusVariant(partner.status)}>{statusLabel(partner.status)}</Badge></TableCell>
                      <TableCell>{partner.owner_name || '—'}</TableCell>
                      <TableCell>
                        <ActionsCell>
                          {partner.status?.toLowerCase() === 'pendente' && (
                            <>
                              <ActionButton $approve onClick={() => handleApprovePartner(partner.id)}>
                                <FaCheck /> Aprovar
                              </ActionButton>
                              <ActionButton $reject onClick={() => handleOpenRejectModal(partner)}>
                                <FaTimes /> Recusar
                              </ActionButton>
                            </>
                          )}
                          {partner.status?.toLowerCase() === 'aprovada' && (
                            <ActionButton $reject onClick={() => handleOpenRejectModal(partner)}>
                              <FaTimes /> Desativar
                            </ActionButton>
                          )}
                          {partner.status?.toLowerCase() === 'rejeitada' && (
                            <ActionButton $approve onClick={() => handleApprovePartner(partner.id)}>
                              <FaCheck /> Reativar
                            </ActionButton>
                          )}
                          <ActionButton $reject onClick={() => handleDeleteStore(partner.id)}>
                            <FaTrash /> Excluir
                          </ActionButton>
                        </ActionsCell>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableWrapper>
          )}

          {activeTab === 'coupons' && (
            <TableWrapper>
              <Table>
                <TableHeader>
                  <tr>
                    <TableHeaderCell>Título</TableHeaderCell>
                    <TableHeaderCell>Loja</TableHeaderCell>
                    <TableHeaderCell>Desconto</TableHeaderCell>
                    <TableHeaderCell>Válido até</TableHeaderCell>
                    <TableHeaderCell>Ações</TableHeaderCell>
                  </tr>
                </TableHeader>
                <TableBody>
                  {loadingCoupons ? (
                    <tr><td colSpan="5"><LoadingState>Carregando cupons...</LoadingState></td></tr>
                  ) : filteredCoupons.length === 0 ? (
                    <tr><td colSpan="5"><EmptyState>Nenhum cupom encontrado</EmptyState></td></tr>
                  ) : filteredCoupons.map(coupon => (
                    <TableRow key={coupon.id}>
                      <TableCell>{coupon.title}</TableCell>
                      <TableCell>{realPartners.find(p => p.id === coupon.store_id)?.name || `Loja #${coupon.store_id}`}</TableCell>
                      <TableCell><strong>{coupon.discount}%</strong></TableCell>
                      <TableCell>{coupon.valid_until ? new Date(coupon.valid_until).toLocaleDateString('pt-BR') : '—'}</TableCell>
                      <TableCell>
                        <ActionsCell>
                          <ActionButton $reject onClick={() => { if (window.confirm('Excluir este cupom?')) ApiService.deleteCoupon(coupon.id).then(() => { const updated = realCoupons.filter(c => c.id !== coupon.id); setRealCoupons(updated); setFilteredCoupons(updated) }).catch(() => alert('Erro ao excluir cupom')) }}>
                            <FaTrash /> Excluir
                          </ActionButton>
                        </ActionsCell>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableWrapper>
          )}
        </TabContent>
      </Container>

      {rejectModal && (
        <ModalOverlay onClick={() => setRejectModal(null)}>
          <ModalBox onClick={e => e.stopPropagation()}>
            <ModalTitle>
              <FaExclamationTriangle /> Recusar parceiro
            </ModalTitle>
            <ModalText>
              Informe o motivo da recusa de <strong>{rejectModal.name}</strong>. Este motivo ficará registrado.
            </ModalText>
            <ModalTextarea
              placeholder="Ex: Documentação incompleta, CNPJ inválido..."
              value={rejectReason}
              onChange={e => setRejectReason(e.target.value)}
              autoFocus
            />
            <ModalActions>
              <ModalCancelButton onClick={() => setRejectModal(null)}>Cancelar</ModalCancelButton>
              <ModalConfirmButton
                onClick={handleConfirmReject}
                disabled={!rejectReason.trim() || rejectLoading}
              >
                {rejectLoading ? 'Recusando...' : 'Confirmar recusa'}
              </ModalConfirmButton>
            </ModalActions>
          </ModalBox>
        </ModalOverlay>
      )}
    </>
  )
}

export default Admin
