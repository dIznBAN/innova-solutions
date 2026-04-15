import { useState, useEffect } from 'react'
import { FaTrash, FaUsers, FaStore, FaTicketAlt, FaChartBar, FaShieldAlt, FaUserShield, FaCheck, FaTimes, FaExclamationTriangle } from 'react-icons/fa'
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

const mockCoupons = [
  { id: 1, title: '20% OFF Joias', partner: 'Bella Acessórios', discount: '20%', status: 'Ativo', expires: '2024-12-31' },
  { id: 2, title: '15% Desconto', partner: 'Glamour Store', discount: '15%', status: 'Pendente', expires: '2024-11-30' },
  { id: 3, title: '30% Black Friday', partner: 'Luxo Acessórios', discount: '30%', status: 'Ativo', expires: '2024-11-29' }
]

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
  const [filteredCoupons, setFilteredCoupons] = useState(mockCoupons)
  const [loading, setLoading] = useState(false)
  const [loadingPartners, setLoadingPartners] = useState(false)
  const [rejectModal, setRejectModal] = useState(null)
  const [rejectReason, setRejectReason] = useState('')
  const [rejectLoading, setRejectLoading] = useState(false)

  useEffect(() => {
    loadUsers()
    loadPartners()
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
    setFilteredCoupons(mockCoupons.filter(c =>
      c.title.toLowerCase().includes(lower) || c.partner.toLowerCase().includes(lower)
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
              <StatNumber>156</StatNumber>
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
          <StatCard>
            <StatIcon><FaChartBar /></StatIcon>
            <StatInfo>
              <StatNumber>3.891</StatNumber>
              <StatLabel>Cupons Utilizados</StatLabel>
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
                              <FaTimes /> Rejeitar
                            </ActionButton>
                          )}
                          {partner.status?.toLowerCase() === 'rejeitada' && (
                            <ActionButton $approve onClick={() => handleApprovePartner(partner.id)}>
                              <FaCheck /> Reativar
                            </ActionButton>
                          )}
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
                    <TableHeaderCell>Parceiro</TableHeaderCell>
                    <TableHeaderCell>Desconto</TableHeaderCell>
                    <TableHeaderCell>Status</TableHeaderCell>
                    <TableHeaderCell>Expira</TableHeaderCell>
                    <TableHeaderCell>Ações</TableHeaderCell>
                  </tr>
                </TableHeader>
                <TableBody>
                  {filteredCoupons.length === 0 ? (
                    <tr><td colSpan="6"><EmptyState>Nenhum cupom encontrado</EmptyState></td></tr>
                  ) : filteredCoupons.map(coupon => (
                    <TableRow key={coupon.id}>
                      <TableCell>{coupon.title}</TableCell>
                      <TableCell>{coupon.partner}</TableCell>
                      <TableCell><strong>{coupon.discount}</strong></TableCell>
                      <TableCell><Badge $variant={statusVariant(coupon.status)}>{coupon.status}</Badge></TableCell>
                      <TableCell>{coupon.expires}</TableCell>
                      <TableCell>
                        <ActionsCell>
                          {coupon.status === 'Pendente' ? (
                            <>
                              <ActionButton $approve>Aprovar</ActionButton>
                              <ActionButton $reject>Rejeitar</ActionButton>
                            </>
                          ) : (
                            <ActionButton $reject>Desativar</ActionButton>
                          )}
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
