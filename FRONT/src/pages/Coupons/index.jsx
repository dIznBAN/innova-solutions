import { useState, useEffect } from "react";
import { FaSearch, FaFilter, FaTimes, FaCheck } from "react-icons/fa";
import CouponModal from "../../components/CouponModal";
import api from "../../services/api";
import {
  Container, Header, SearchContainer, SearchInput, SearchIcon,
  FilterContainer, FilterButton, FilterOverlay, FilterPanel,
  FilterSection, FilterTitle, FilterOption, FilterActions,
  ClearFiltersButton, ApplyFiltersButton, CouponsGrid, CouponCard,
  CouponImage, CouponContent, StoreName, Discount, CouponButton, NoResults,
} from "./styles";

const normalizeCoupons = (coupons, stores) => {
  const storeMap = {};
  stores.forEach(s => { storeMap[s.id] = s; });
  const now = new Date();
  return coupons
    .filter(c => new Date(c.valid_until) >= now)
    .map(c => {
      const store = storeMap[c.store_id] || {};
      return {
        id: c.id,
        storeName: store.name || 'Loja',
        discount: c.discount,
        image: store.image_url || null,
        website: store.website_url || '#',
        description: c.description || '',
        title: c.title || '',
        validUntil: new Date(c.valid_until).toLocaleDateString('pt-BR'),
      };
    });
};

const CouponsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState({ sortBy: "" });
  const [tempFilters, setTempFilters] = useState({ sortBy: "" });
  const [allCoupons, setAllCoupons] = useState([]);
  const [filteredCoupons, setFilteredCoupons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [coupons, stores] = await Promise.all([
          api.request('/coupons'),
          api.getAllStores(),
        ]);
        const normalized = normalizeCoupons(coupons, stores);
        setAllCoupons(normalized);
        setFilteredCoupons(normalized);
      } catch (e) {
        console.error('Erro ao carregar cupons:', e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const applyFilters = () => {
    let filtered = allCoupons.filter(c =>
      c.storeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filters.sortBy === "highest-discount") filtered.sort((a, b) => b.discount - a.discount);
    if (filters.sortBy === "lowest-discount") filtered.sort((a, b) => a.discount - b.discount);
    setFilteredCoupons(filtered);
  };

  useEffect(() => { applyFilters(); }, [searchTerm, filters, allCoupons]);

  const handleTempFilterChange = (filterType, value) => {
    setTempFilters(prev => ({ ...prev, [filterType]: prev[filterType] === value ? "" : value }));
  };

  const applyTempFilters = () => { setFilters(tempFilters); setShowFilters(false); };

  const clearFilters = () => {
    const empty = { sortBy: "" };
    setFilters(empty); setTempFilters(empty); setSearchTerm(""); setShowFilters(false);
  };

  return (
    <Container>
      <Header>
        <h1>Cupons de Desconto</h1>
        <p>Encontre as melhores ofertas em semijoias das lojas parceiras</p>
      </Header>

      <SearchContainer>
        <SearchIcon><FaSearch /></SearchIcon>
        <SearchInput
          type="text"
          placeholder="Buscar por nome da loja ou cupom..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FilterButton onClick={() => { setTempFilters(filters); setShowFilters(true); }}>
          <FaFilter /> Filtros
        </FilterButton>
      </SearchContainer>

      {showFilters && (
        <>
          <FilterOverlay onClick={() => setShowFilters(false)} />
          <FilterPanel>
            <FilterContainer>
              <FilterSection>
                <FilterTitle>Ordenar por:</FilterTitle>
                <FilterOption active={tempFilters.sortBy === "highest-discount"} onClick={() => handleTempFilterChange("sortBy", "highest-discount")}>
                  Maior desconto
                </FilterOption>
                <FilterOption active={tempFilters.sortBy === "lowest-discount"} onClick={() => handleTempFilterChange("sortBy", "lowest-discount")}>
                  Menor desconto
                </FilterOption>
              </FilterSection>
              <FilterActions>
                <ClearFiltersButton onClick={clearFilters}><FaTimes /> Limpar</ClearFiltersButton>
                <ApplyFiltersButton onClick={applyTempFilters}><FaCheck /> Aplicar Filtros</ApplyFiltersButton>
              </FilterActions>
            </FilterContainer>
          </FilterPanel>
        </>
      )}

      {loading ? (
        <NoResults><h3>Carregando cupons...</h3></NoResults>
      ) : filteredCoupons.length > 0 ? (
        <CouponsGrid>
          {filteredCoupons.map((coupon) => (
            <CouponCard key={coupon.id}>
              <CouponImage
                src={coupon.image || null}
                alt={coupon.storeName}
                style={!coupon.image ? { display: 'none' } : {}}
              />
              {!coupon.image && (
                <div style={{
                  width: '100%', height: '100%',
                  background: 'linear-gradient(135deg, #CDA09B, #A67168)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '3rem', fontWeight: 700, color: 'white',
                  fontFamily: "'Playfair Display', serif"
                }}>
                  {coupon.storeName?.charAt(0).toUpperCase()}
                </div>
              )}
              <CouponContent>
                <StoreName>{coupon.storeName}</StoreName>
                <Discount>{coupon.discount}% OFF</Discount>
                <CouponButton onClick={() => { setSelectedCoupon(coupon); setShowModal(true); }}>
                  Ver Detalhes
                </CouponButton>
              </CouponContent>
            </CouponCard>
          ))}
        </CouponsGrid>
      ) : (
        <NoResults>
          <h3>Nenhum cupom encontrado</h3>
          <p>Tente ajustar os filtros ou buscar por outro termo</p>
        </NoResults>
      )}

      <CouponModal
        coupon={selectedCoupon}
        isOpen={showModal}
        onClose={() => { setShowModal(false); setSelectedCoupon(null); }}
      />
    </Container>
  );
};

export default CouponsPage;
