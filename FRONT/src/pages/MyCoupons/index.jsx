import { useState, useEffect } from "react";
import { FaTicketAlt, FaQrcode, FaClock, FaExclamationTriangle, FaTrash } from "react-icons/fa";
import {
  Container,
  Header,
  CouponsGrid,
  CouponCard,
  CouponImage,
  CouponContent,
  StoreName,
  Discount,
  Description,
  ValidUntil,
  UseButton,
  RemoveButton,
  ButtonGroup,
  EmptyState,
  EmptyIcon,
  EmptyText
} from "./styles";

const MyCouponsPage = () => {
  const [myCoupons, setMyCoupons] = useState([]);

  useEffect(() => {
    const savedCoupons = JSON.parse(localStorage.getItem('myCoupons') || '[]');
    // Garantir que todos os cupons tenham validUntil
    const couponsWithValidUntil = savedCoupons.map(coupon => ({
      ...coupon,
      validUntil: coupon.validUntil || '31/12/2024'
    }));
    setMyCoupons(couponsWithValidUntil);
  }, []);

  const isExpired = (validUntil) => {
    const [day, month, year] = validUntil.split('/');
    const expiryDate = new Date(year, month - 1, day);
    return new Date() > expiryDate;
  };

  const handleUseCoupon = (coupon) => {
    if (isExpired(coupon.validUntil)) {
      alert('Este cupom já expirou!');
      return;
    }
    window.open(coupon.website || '#', '_blank');
  };

  const handleRemoveCoupon = (couponId) => {
    if (confirm('Tem certeza que deseja remover este cupom?')) {
      const updatedCoupons = myCoupons.filter(coupon => coupon.id !== couponId);
      setMyCoupons(updatedCoupons);
      localStorage.setItem('myCoupons', JSON.stringify(updatedCoupons));
    }
  };

  return (
    <Container>
      <Header>
        <h1>Meus Cupons</h1>
        <p>Seus cupons salvos estão aqui</p>
      </Header>

      {myCoupons.length > 0 ? (
        <CouponsGrid>
          {myCoupons.map((coupon) => (
            <CouponCard key={coupon.id}>
              <CouponImage src={coupon.image} alt={coupon.storeName} />
              <CouponContent>
                <StoreName>{coupon.storeName}</StoreName>
                <Discount>{coupon.discount}% OFF</Discount>
                <Description>{coupon.description}</Description>
                <ValidUntil $expired={isExpired(coupon.validUntil || '31/12/2024')}>
                  {isExpired(coupon.validUntil || '31/12/2024') ? (
                    <><FaExclamationTriangle /> Expirado em {coupon.validUntil || '31/12/2024'}</>
                  ) : (
                    <><FaClock /> Válido até {coupon.validUntil || '31/12/2024'}</>
                  )}
                </ValidUntil>
                <ButtonGroup>
                  <UseButton 
                    onClick={() => handleUseCoupon(coupon)}
                    disabled={isExpired(coupon.validUntil || '31/12/2024')}
                    $expired={isExpired(coupon.validUntil || '31/12/2024')}
                  >
                    <FaQrcode /> {isExpired(coupon.validUntil || '31/12/2024') ? 'Cupom Expirado' : 'Usar Cupom'}
                  </UseButton>
                  <RemoveButton onClick={() => handleRemoveCoupon(coupon.id)}>
                    <FaTrash />
                  </RemoveButton>
                </ButtonGroup>
              </CouponContent>
            </CouponCard>
          ))}
        </CouponsGrid>
      ) : (
        <EmptyState>
          <EmptyIcon>
            <FaTicketAlt />
          </EmptyIcon>
          <EmptyText>Você ainda não possui cupons salvos</EmptyText>
        </EmptyState>
      )}
    </Container>
  );
};

export default MyCouponsPage;