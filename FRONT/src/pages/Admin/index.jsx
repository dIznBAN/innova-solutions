import React, { useState, useEffect } from 'react'
import { FaTrash } from 'react-icons/fa'
import ApiService from '../../services/api'
import {
  Container,
  Header,
  Title,
  StatsGrid,
  StatCard,
  StatNumber,
  StatLabel,
  TabsContainer,
  Tab,
  TabContent,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  ActionButton,
  SearchInput,
  FilterContainer
} from './styles'

const mockPartners = [
  { id: 1, name: 'Bella Acessórios', email: 'contato@bella.com', status: 'Ativo', cupons: 5 },
  { id: 2, name: 'Glamour Store', email: 'admin@glamour.com', status: 'Pendente', cupons: 2 },
  { id: 3, name: 'Luxo Acessórios', email: 'info@luxo.com', status: 'Ativo', cupons: 8 }
]

const mockCoupons = [
  { id: 1, title: '20% OFF Joias', partner: 'Bella Acessórios', discount: '20%', status: 'Ativo', expires: '2024-12-31' },
  { id: 2, title: '15% Desconto', partner: 'Glamour Store', discount: '15%', status: 'Pendente', expires: '2024-11-30' },
  { id: 3, title: '30% Black Friday', partner: 'Luxo Acessórios', discount: '30%', status: 'Ativo', expires: '2024-11-29' }
]

const mockUsers = [
  { id: 1, name: 'João Silva', email: 'joao@email.com', cuponsUsados: 12, status: 'Ativo' },
  { id: 2, name: 'Maria Santos', email: 'maria@email.com', cuponsUsados: 8, status: 'Ativo' },
  { id: 3, name: 'Pedro Costa', email: 'pedro@email.com', cuponsUsados: 3, status: 'Inativo' }
]

const Admin = () => {
  const [activeTab, setActiveTab] = useState('partners')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPartners, setFilteredPartners] = useState(mockPartners)
  const [filteredCoupons, setFilteredCoupons] = useState(mockCoupons)
  const [filteredUsers, setFilteredUsers] = useState([])
  const [realUsers, setRealUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (activeTab === 'users') {
      loadUsers()
    }
  }, [activeTab])

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

  const handleDeleteUser = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este usuário?')) {
      try {
        await ApiService.deleteUser(id)
        const updatedUsers = realUsers.filter(user => user.id !== id)
        setRealUsers(updatedUsers)
        setFilteredUsers(updatedUsers)
      } catch (error) {
        console.error('Erro ao excluir usuário:', error)
        alert('Erro ao excluir usuário')
      }
    }
  }

  const handleApprove = (id, type) => {
    console.log(`Aprovando ${type} ID: ${id}`)
  }

  const handleReject = (id, type) => {
    console.log(`Rejeitando ${type} ID: ${id}`)
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
    
    if (!term) {
      setFilteredPartners(mockPartners)
      setFilteredCoupons(mockCoupons)
      setFilteredUsers(mockUsers)
      return
    }

    const searchLower = term.toLowerCase()
    
    setFilteredPartners(mockPartners.filter(partner => 
      partner.name.toLowerCase().includes(searchLower) ||
      partner.email.toLowerCase().includes(searchLower)
    ))
    
    setFilteredCoupons(mockCoupons.filter(coupon => 
      coupon.title.toLowerCase().includes(searchLower) ||
      coupon.partner.toLowerCase().includes(searchLower)
    ))
    
    if (activeTab === 'users') {
      setFilteredUsers(realUsers.filter(user => 
        user.name.toLowerCase().includes(searchLower) ||
        user.email.toLowerCase().includes(searchLower)
      ))
    } else {
      setFilteredUsers(mockUsers.filter(user => 
        user.name.toLowerCase().includes(searchLower) ||
        user.email.toLowerCase().includes(searchLower)
      ))
    }
  }

  return (
    <Container>
      <Header>
        <Title>Painel Administrativo</Title>
      </Header>

      <StatsGrid>
        <StatCard>
          <StatNumber>24</StatNumber>
          <StatLabel>Parceiros Ativos</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>156</StatNumber>
          <StatLabel>Cupons Ativos</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>1,247</StatNumber>
          <StatLabel>Usuários</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>3,891</StatNumber>
          <StatLabel>Cupons Utilizados</StatLabel>
        </StatCard>
      </StatsGrid>

      <TabsContainer>
        <Tab 
          active={activeTab === 'partners'} 
          onClick={() => setActiveTab('partners')}
        >
          Parceiros
        </Tab>
        <Tab 
          active={activeTab === 'coupons'} 
          onClick={() => setActiveTab('coupons')}
        >
          Cupons
        </Tab>
        <Tab 
          active={activeTab === 'users'} 
          onClick={() => setActiveTab('users')}
        >
          Usuários
        </Tab>
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

        {activeTab === 'partners' && (
          <Table>
            <TableHeader>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Cupons</TableCell>
              <TableCell>Ações</TableCell>
            </TableHeader>
            {filteredPartners.map(partner => (
              <TableRow key={partner.id}>
                <TableCell>{partner.name}</TableCell>
                <TableCell>{partner.email}</TableCell>
                <TableCell>{partner.status}</TableCell>
                <TableCell>{partner.cupons}</TableCell>
                <TableCell>
                  {partner.status === 'Pendente' ? (
                    <>
                      <ActionButton approve onClick={() => handleApprove(partner.id, 'partner')}>
                        Aprovar
                      </ActionButton>
                      <ActionButton reject onClick={() => handleReject(partner.id, 'partner')}>
                        Rejeitar
                      </ActionButton>
                    </>
                  ) : (
                    <ActionButton reject onClick={() => handleReject(partner.id, 'partner')}>
                      Desativar
                    </ActionButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </Table>
        )}

        {activeTab === 'coupons' && (
          <Table>
            <TableHeader>
              <TableCell>Título</TableCell>
              <TableCell>Parceiro</TableCell>
              <TableCell>Desconto</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Expira</TableCell>
              <TableCell>Ações</TableCell>
            </TableHeader>
            {filteredCoupons.map(coupon => (
              <TableRow key={coupon.id}>
                <TableCell>{coupon.title}</TableCell>
                <TableCell>{coupon.partner}</TableCell>
                <TableCell>{coupon.discount}</TableCell>
                <TableCell>{coupon.status}</TableCell>
                <TableCell>{coupon.expires}</TableCell>
                <TableCell>
                  {coupon.status === 'Pendente' ? (
                    <>
                      <ActionButton approve onClick={() => handleApprove(coupon.id, 'coupon')}>
                        Aprovar
                      </ActionButton>
                      <ActionButton reject onClick={() => handleReject(coupon.id, 'coupon')}>
                        Rejeitar
                      </ActionButton>
                    </>
                  ) : (
                    <ActionButton reject onClick={() => handleReject(coupon.id, 'coupon')}>
                      Desativar
                    </ActionButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </Table>
        )}

        {activeTab === 'users' && (
          <Table>
            <TableHeader>
              <TableCell>ID</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Ações</TableCell>
            </TableHeader>
            {loading ? (
              <TableRow>
                <TableCell colSpan="4" style={{textAlign: 'center'}}>Carregando usuários...</TableCell>
              </TableRow>
            ) : (
              filteredUsers.map(user => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <ActionButton reject onClick={() => handleDeleteUser(user.id)}>
                      <FaTrash /> Excluir
                    </ActionButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </Table>
        )}
      </TabContent>
    </Container>
  )
}

export default Admin