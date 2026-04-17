import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import api from '../../services/api'
import {
  Container, Header, SearchContainer, SearchIcon, SearchInput,
  StoresGrid, StoreCard, StoreImageWrapper, StoreImage, StorePlaceholder,
  StoreContent, StoreName, StoreDescription, StoreLink, NoResults,
} from './styles'

const StoresPage = () => {
  const [allStores, setAllStores] = useState([])
  const [filteredStores, setFilteredStores] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.getAllStores()
      .then(stores => {
        setAllStores(stores)
        setFilteredStores(stores)
      })
      .catch(e => console.error('Erro ao carregar lojas:', e))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    const term = searchTerm.toLowerCase()
    setFilteredStores(
      allStores.filter(s =>
        s.name?.toLowerCase().includes(term) ||
        s.description?.toLowerCase().includes(term)
      )
    )
  }, [searchTerm, allStores])

  return (
    <Container>
      <Header>
        <h1>Lojas Parceiras</h1>
        <p>Conheça todas as lojas cadastradas na plataforma</p>
      </Header>

      <SearchContainer>
        <SearchIcon><FaSearch /></SearchIcon>
        <SearchInput
          type="text"
          placeholder="Buscar por nome da loja..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </SearchContainer>

      {loading ? (
        <NoResults><h3>Carregando lojas...</h3></NoResults>
      ) : filteredStores.length > 0 ? (
        <StoresGrid>
          {filteredStores.map(store => (
            <StoreCard key={store.id}>
              <StoreImageWrapper>
                {store.image_url
                  ? <StoreImage src={store.image_url} alt={store.name} />
                  : <StorePlaceholder>{store.name?.charAt(0).toUpperCase()}</StorePlaceholder>
                }
              </StoreImageWrapper>
              <StoreContent>
                <StoreName>{store.name}</StoreName>
                {store.description && (
                  <StoreDescription>{store.description}</StoreDescription>
                )}
                {store.website_url && (
                  <StoreLink href={store.website_url} target="_blank" rel="noopener noreferrer">
                    Visitar Loja
                  </StoreLink>
                )}
              </StoreContent>
            </StoreCard>
          ))}
        </StoresGrid>
      ) : (
        <NoResults>
          <h3>Nenhuma loja encontrada</h3>
          <p>Tente buscar por outro termo</p>
        </NoResults>
      )}
    </Container>
  )
}

export default StoresPage
