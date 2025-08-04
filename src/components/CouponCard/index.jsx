import { Card, StoreImage, StoreName, Discount, CouponButton } from "./styles";

const CouponCard = ({ storeName, discount, image }) => {
  return (
    <Card>
      <StoreImage
        src={
          image ||
          "https://via.placeholder.com/200x120.png?text=Imagem+Indisponível"
        }
        alt={storeName}
      />
      <StoreName>{storeName}</StoreName>
      <Discount>{discount}% OFF</Discount>
      <CouponButton>Ver Cupom</CouponButton>
    </Card>
  );
};

export default CouponCard;
