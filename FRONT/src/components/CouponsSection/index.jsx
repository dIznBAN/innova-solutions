import CouponCard from "../CouponCard";
import { Container, Title, CouponsGrid } from "./styles";
import bellaJoiasImg from "../../assets/bella.joias.jpeg";
import glamourStoreImg from "../../assets/glamour_store.jpeg";
import luxoAcessoriosImg from "../../assets/luxo.acessorios.jpeg";
import innovaSolutionsImg from "../../assets/innova_solutions.jpeg";
import deluxeJoiasImg from "../../assets/deluxe_joias.png";
import bellaAcessoriosImg from "../../assets/bella_acessorios.png";

const CouponsSection = () => {
  const coupons = [
    {
      storeName: "Bella Joias",
      discount: 40,
      image: bellaJoiasImg,
    },
    {
      storeName: "Glamour Store",
      discount: 60,
      image: glamourStoreImg,
    },
    {
      storeName: "Luxo Acessórios",
      discount: 35,
      image: luxoAcessoriosImg,
    },
    {
      storeName: "Innova Solutions",
      discount: 35,
      image: innovaSolutionsImg,
    },
    {
      storeName: "Deluxe Joias",
      discount: 20,
      image: deluxeJoiasImg,
    },
    {
      storeName: "Bella Acessorios",
      discount: 45,
      image: bellaAcessoriosImg,
    },
  ];

  return (
    <Container>
      <Title>Mais Cupons</Title>
      <CouponsGrid>
        {coupons.map((coupon, index) => (
          <CouponCard
            key={index}
            storeName={coupon.storeName}
            discount={coupon.discount}
            image={coupon.image}
          />
        ))}
      </CouponsGrid>
    </Container>
  );
};

export default CouponsSection;
