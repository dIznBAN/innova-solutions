import { useState, useEffect } from "react";
import {
  FaSearch,
  FaFilter,
  FaTimes,
  FaCheck,
} from "react-icons/fa";
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
      affiliateLink: "https://www.vivara.com.br/?utm_source=affiliate&utm_medium=coupon",
    },
    {
      id: 2,
      storeName: "Rommanel",
      discount: 35,
      image: rommanelImg,
      affiliateLink: "https://www.rommanel.com.br/?utm_source=affiliate&utm_medium=coupon",
    },
    {
      id: 3,
      storeName: "MJ Folheados",
      discount: 50,
      image: mjFolheadosImg,
      affiliateLink: "https://www.mjfolheados.com.br/?utm_source=affiliate&utm_medium=coupon",
    },
    {
      id: 4,
      storeName: "Life Semijoias",
      discount: 30,
      image: lifeSemijoisImg,
      affiliateLink: "https://www.lifesemijoias.com.br/?utm_source=affiliate&utm_medium=coupon",
    },
    {
      id: 5,
      storeName: "Bella Acessórios",
      discount: 45,
      image: bellaAcessoriosImg,
      affiliateLink: "https://www.bellaacessorios.com.br/?utm_source=affiliate&utm_medium=coupon",
    },
    {
      id: 6,
      storeName: "Deluxe Joias",
      discount: 25,
      image: deluxeJoiasImg,
      affiliateLink: "https://www.deluxejoias.com.br/?utm_source=affiliate&utm_medium=coupon",
    },
    {
      id: 7,
      storeName: "Innova Solutions",
      discount: 60,
      image: innovaSolutionsImg,
      affiliateLink: "https://www.innovasolutions.com.br/?utm_source=affiliate&utm_medium=coupon",
    },
    {
      id: 8,
      storeName: "Glamour Store",
      discount: 35,
      image: glamourStoreImg,
      affiliateLink: "https://www.glamourstore.com.br/?utm_source=affiliate&utm_medium=coupon",
    },
    {
      id: 9,
      storeName: "Bella Joias",
      discount: 20,
      image: bellaJoiasImg,
      affiliateLink: "https://www.bellajoias.com.br/?utm_source=affiliate&utm_medium=coupon",
    },
    {
      id: 10,
      storeName: "Life Semijoias",
      discount: 55,
      image: lifeSemijoisImg,
      affiliateLink: "https://www.lifesemijoias.com.br/?utm_source=affiliate&utm_medium=coupon",
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


                <CouponButton onClick={() => window.open(coupon.affiliateLink, '_blank')}>
                  Aproveitar Oferta
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
    </Container>
  );
};

export default CouponsPage;
