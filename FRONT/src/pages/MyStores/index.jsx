import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { FaStore, FaPlus, FaChevronRight, FaGlobe, FaEnvelope } from 'react-icons/fa'
import styled from 'styled-components'
import { theme } from '../../theme'

const Container = styled.div`
  padding: 6rem 1.5rem 3rem;
  min-height: 100vh;
  background: #FAFAFA;
  font-family: ${theme.fonts.primary};

  @media (min-width: 768px) {
    padding: 6rem 2rem 3rem;
  }
`

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`

const PageTitle = styled.h1`
  font-family: ${theme.fonts.secondary};
  font-size: 2rem;
  color: ${theme.colors.text};
  margin: 0;
  font-weight: 700;

  span { color: ${theme.colors.primaryLight}; }

  @media (max-width: 768px) { font-size: 1.5rem; }
`

const AddButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${theme.colors.primary};
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: ${theme.fonts.primary};
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(166, 113, 104, 0.3);

  &:hover {
    background: ${theme.colors.primaryDark};
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(166, 113, 104, 0.4);
  }
`

const StoresList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const StoreCard = styled.button`
  background: white;
  border: 1.5px solid rgba(205, 160, 155, 0.2);
  border-radius: 1.25rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);

  &:hover {
    border-color: ${theme.colors.primaryLight};
    box-shadow: 0 6px 20px rgba(166, 113, 104, 0.12);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`

const StoreLogo = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 1rem;
  background: ${props => props.$hasImage ? 'transparent' : `linear-gradient(135deg, ${theme.colors.primaryLight}, ${theme.colors.primary})`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  font-family: ${theme.fonts.secondary};
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(166, 113, 104, 0.2);

  img { width: 100%; height: 100%; object-fit: cover; }

  @media (max-width: 480px) { width: 52px; height: 52px; font-size: 1.2rem; }
`

const StoreInfo = styled.div`
  flex: 1;
  min-width: 0;
`

const StoreName = styled.h3`
  font-family: ${theme.fonts.secondary};
  font-size: 1.1rem;
  color: ${theme.colors.text};
  margin: 0 0 0.35rem;
  font-weight: 700;
`

const StoreMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: ${theme.colors.gray};

  svg { color: ${theme.colors.primaryLight}; font-size: 0.75rem; }
`

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-top: 0.5rem;

  ${props => props.$status === 'Aprovada' && `background: #E8F5E9; color: #2E7D32;`}
  ${props => props.$status === 'Pendente' && `background: #EEEEEE; color: #616161; border: 1px solid #BDBDBD;`}
  ${props => props.$status === 'Rejeitada' && `background: #FFEBEE; color: #C62828;`}

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
  }
`

const ChevronIcon = styled.div`
  color: ${theme.colors.primaryLight};
  font-size: 1rem;
  flex-shrink: 0;
  transition: transform 0.2s;

  ${StoreCard}:hover & { transform: translateX(4px); }
`

const EmptyState = styled.div`
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  border: 1px solid rgba(205, 160, 155, 0.12);
  padding: 4rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

const EmptyIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${theme.colors.primaryLight};
  margin-bottom: 0.5rem;
`

const EmptyTitle = styled.h3`
  font-family: ${theme.fonts.secondary};
  font-size: 1.4rem;
  color: ${theme.colors.text};
  margin: 0;
`

const EmptyText = styled.p`
  color: ${theme.colors.gray};
  font-size: 0.95rem;
  margin: 0;
  max-width: 360px;
  line-height: 1.6;
`

const MyStores = () => {
  const { userStores } = useAuth()
  const navigate = useNavigate()

  return (
    <Container>
      <ContentWrapper>
        <PageHeader>
          <PageTitle>Minhas <span>Lojas</span></PageTitle>
          <AddButton onClick={() => navigate('/cadastro-parceiro')}>
            <FaPlus /> Cadastrar nova loja
          </AddButton>
        </PageHeader>

        {userStores?.length > 0 ? (
          <StoresList>
            {userStores.map(store => (
              <StoreCard key={store.id} onClick={() => navigate(`/minha-loja/${store.id}`)}>
                <StoreLogo $hasImage={!!store.image_url}>
                  {store.image_url
                    ? <img src={store.image_url} alt={store.name} />
                    : store.name?.charAt(0).toUpperCase()
                  }
                </StoreLogo>
                <StoreInfo>
                  <StoreName>{store.name}</StoreName>
                  <StoreMeta>
                    {store.email && <MetaItem><FaEnvelope />{store.email}</MetaItem>}
                    {store.website_url && <MetaItem><FaGlobe />{store.website_url.replace(/^https?:\/\//, '')}</MetaItem>}
                  </StoreMeta>
                  <StatusBadge $status={store.status}>{store.status}</StatusBadge>
                </StoreInfo>
                <ChevronIcon><FaChevronRight /></ChevronIcon>
              </StoreCard>
            ))}
          </StoresList>
        ) : (
          <EmptyState>
            <EmptyIcon><FaStore /></EmptyIcon>
            <EmptyTitle>Nenhuma loja cadastrada</EmptyTitle>
            <EmptyText>Você ainda não possui nenhuma loja cadastrada. Cadastre sua primeira loja e comece a oferecer cupons para seus clientes.</EmptyText>
            <AddButton onClick={() => navigate('/cadastro-parceiro')}>
              <FaPlus /> Cadastrar minha loja
            </AddButton>
          </EmptyState>
        )}
      </ContentWrapper>
    </Container>
  )
}

export default MyStores
