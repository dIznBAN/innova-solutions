import { useState, useEffect } from "react";
import {
  FaSearch,
  FaFilter,
  FaTimes,
  FaCheck,
} from "react-icons/fa";
import CouponModal from "../../components/CouponModal";
import bellaJoiasImg from "../../assets/bella.joias.jpeg";
import glamourStoreImg from "../../assets/glamour_store.jpeg";
import luxoAcessoriosImg from "../../assets/luxo.acessorios.jpeg";
import innovaSolutionsImg from "../../assets/innova_solutions.jpeg";
import deluxeJoiasImg from "../../assets/deluxe_joias.png";
import bellaAcessoriosImg from "../../assets/bella_acessorios.png";
import vivaraImg from "../../assets/vivara.png";
import rommanelImg from "../../assets/rommanel.jpeg";
import mjFolheadosImg from "../../assets/mj folheados.png";
import lifeSemijoisImg from "../../assets/life semijoias.jpeg";
import {
  Container,
  Header,
  SearchContainer,
  SearchInput,
  SearchIcon,
  FilterContainer,
  FilterButton,
  FilterOverlay,
  FilterPanel,
  FilterSection,
  FilterTitle,
  FilterOption,
  FilterActions,
  ClearFiltersButton,
  ApplyFiltersButton,
  CouponsGrid,
  CouponCard,
  CouponImage,
  CouponContent,
  StoreName,
  Discount,


  CouponButton,
  NoResults,
} from "./styles";

const CouponsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState({
    sortBy: "",
  });
  const [tempFilters, setTempFilters] = useState({
    sortBy: "",
  });

  // Mock de dados de cupons
  const [allCoupons] = useState([
    {
      id: 1,
      storeName: "Vivara",
      discount: 40,
      image: vivaraImg,
      website: "https://www.vivara.com.br/?utm_source=affiliate&utm_medium=coupon",
      description: "Descubra a elegância das joias Vivara com 40% de desconto em peças selecionadas.",
      validUntil: "15/11/2025",
    },
    {
      id: 2,
      storeName: "Rommanel",
      discount: 35,
      image: rommanelImg,
      website: "https://www.rommanel.com.br/?utm_source=affiliate&utm_medium=coupon",
      description: "Semijoias Rommanel com 35% de desconto. Qualidade e beleza em cada peça.",
      validUntil: "28/11/2025",
    },
    {
      id: 3,
      storeName: "MJ Folheados",
      discount: 50,
      image: mjFolheadosImg,
      website: "https://www.mjfolheados.com.br/?utm_source=affiliate&utm_medium=coupon",
      description: "Mega promoção MJ Folheados! 50% OFF em toda a coleção de semijoias.",
      validUntil: "15/11/2025",
    },
    {
      id: 4,
      storeName: "Life Semijoias",
      discount: 30,
      image: lifeSemijoisImg,
      website: "https://www.lifesemijoias.com.br/?utm_source=affiliate&utm_medium=coupon",
      description: "Semijoias Life com 30% de desconto. Estilo e sofisticação para o seu dia a dia.",
      validUntil: "20/11/2025",
    },
    {
      id: 5,
      storeName: "Bella Acessórios",
      discount: 45,
      image: bellaAcessoriosImg,
      website: "https://www.bellaacessorios.com.br/?utm_source=affiliate&utm_medium=coupon",
      description: "Bella Acessórios com 45% OFF! Renove seu guarda-roupa com nossos acessórios únicos.",
      validUntil: "25/11/2025",
    },
    {
      id: 6,
      storeName: "Deluxe Joias",
      discount: 25,
      image: deluxeJoiasImg,
      website: "https://www.deluxejoias.com.br/?utm_source=affiliate&utm_medium=coupon",
      description: "Joias Deluxe com 25% de desconto. Luxo e qualidade em cada peça especial.",
      validUntil: "15/11/2025",
    },
    {
      id: 7,
      storeName: "Innova Solutions",
      discount: 60,
      image: innovaSolutionsImg,
      website: "https://www.innovasolutions.com.br/?utm_source=affiliate&utm_medium=coupon",
      description: "Super oferta Innova Solutions! 60% de desconto em produtos selecionados.",
      validUntil: "30/11/2025",
    },
    {
      id: 8,
      storeName: "Glamour Store",
      discount: 35,
      image: glamourStoreImg,
      website: "https://www.glamourstore.com.br/?utm_source=affiliate&utm_medium=coupon",
      description: "Glamour Store com 35% OFF. Acessórios que destacam sua personalidade.",
      validUntil: "12/11/2025",
    },
    {
      id: 9,
      storeName: "Bella Joias",
      discount: 20,
      image: bellaJoiasImg,
      website: "https://www.bellajoias.com.br/?utm_source=affiliate&utm_medium=coupon",
      description: "Bella Joias oferece 20% de desconto em toda a coleção de semijoias.",
      validUntil: "08/11/2025",
    },
    {
      id: 10,
      storeName: "Life Semijoias",
      discount: 55,
      image: lifeSemijoisImg,
      website: "https://www.lifesemijoias.com.br/?utm_source=affiliate&utm_medium=coupon",
      description: "Oferta especial Life Semijoias! 55% OFF em peças da nova coleção.",
      validUntil: "18/11/2025",
    },
  ]);

  const [filteredCoupons, setFilteredCoupons] = useState(allCoupons);



  const applyFilters = () => {
    let filtered = allCoupons.filter((coupon) =>
      coupon.storeName.toLowerCase().includes(searchTerm.toLowerCase())
    );





    // Ordenação
    if (filters.sortBy) {
      filtered.sort((a, b) => {
        switch (filters.sortBy) {
          case "highest-discount":
            return b.discount - a.discount;
          case "lowest-discount":
            return a.discount - b.discount;

          default:
            return 0;
        }
      });
    }

    setFilteredCoupons(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [searchTerm, filters]);

  const handleTempFilterChange = (filterType, value) => {
    setTempFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType] === value ? "" : value,
    }));
  };

  const applyTempFilters = () => {
    setFilters(tempFilters);
    setShowFilters(false);
  };

  const clearFilters = () => {
    const emptyFilters = { sortBy: "" };
    setFilters(emptyFilters);
    setTempFilters(emptyFilters);
    setSearchTerm("");
    setShowFilters(false);
  };

  const openFilters = () => {
    setTempFilters(filters);
    setShowFilters(true);
  };

  return (
    <Container>
      <Header>
        <h1>Cupons de Desconto</h1>
        <p>Encontre as melhores ofertas em semijoias das lojas parceiras</p>
      </Header>

      <SearchContainer>
        <SearchIcon>
          <FaSearch />
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder="Buscar por nome da loja..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FilterButton onClick={openFilters}>
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
                <FilterOption
                  active={tempFilters.sortBy === "highest-discount"}
                  onClick={() =>
                    handleTempFilterChange("sortBy", "highest-discount")
                  }
                >
                  Maior desconto
                </FilterOption>
                <FilterOption
                  active={tempFilters.sortBy === "lowest-discount"}
                  onClick={() =>
                    handleTempFilterChange("sortBy", "lowest-discount")
                  }
                >
                  Menor desconto
                </FilterOption>

              </FilterSection>





              <FilterActions>
                <ClearFiltersButton onClick={clearFilters}>
                  <FaTimes /> Limpar
                </ClearFiltersButton>
                <ApplyFiltersButton onClick={applyTempFilters}>
                  <FaCheck /> Aplicar Filtros
                </ApplyFiltersButton>
              </FilterActions>
            </FilterContainer>
          </FilterPanel>
        </>
      )}

      {filteredCoupons.length > 0 ? (
        <CouponsGrid>
          {filteredCoupons.map((coupon) => (
            <CouponCard key={coupon.id}>
              <CouponImage src={coupon.image} alt={coupon.storeName} />
              <CouponContent>
                <StoreName>{coupon.storeName}</StoreName>
                <Discount>{coupon.discount}% OFF</Discount>


                <CouponButton onClick={() => {
                  setSelectedCoupon(coupon)
                  setShowModal(true)
                }}>
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
        onClose={() => {
          setShowModal(false)
          setSelectedCoupon(null)
        }}
      />
    </Container>
  );
};

export default CouponsPage;
