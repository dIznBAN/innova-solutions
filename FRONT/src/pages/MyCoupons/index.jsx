import { useState, useEffect } from "react";
import { FaTicketAlt, FaQrcode, FaClock, FaTrash } from "react-icons/fa";
import api from "../../services/api";
import {
  Container, Header, CouponsGrid, CouponCard, CouponImage, CouponContent,
  StoreName, Discount, Description, ValidUntil, UseButton, RemoveButton,
  ButtonGroup, EmptyState, EmptyIcon, EmptyText
} from "./styles";

const MyCouponsPage = () => {
  const [myCoupons, setMyCoupons] = useState([]);
  const [stores, setStores] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [coupons, allStores] = await Promise.all([
          api.getMyCoupons(),
          api.getAllStores(),
        ]);
        const storeMap = {};
        allStores.forEach(s => { storeMap[s.id] = s; });
        setStores(storeMap);
        const now = new Date();
        setMyCoupons(coupons);
      } catch (e) {
        console.error('Erro ao carregar meus cupons:', e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleUseCoupon = (coupon) => {
    const store = stores[coupon.store_id];
    window.open(store?.website_url || '#', '_blank');
  };

  const handleRemoveCoupon = async (couponId) => {
    if (!confirm('Tem certeza que deseja remover este cupom?')) return;
    try {
      await api.removeUserCoupon(couponId);
      setMyCoupons(prev => prev.filter(c => c.id !== couponId));
    } catch (e) {
      console.error('Erro ao remover cupom:', e);
    }
  };

  return (
    <Container>
      <Header>
        <h1>Meus Cupons</h1>
        <p>Seus cupons salvos estão aqui</p>
      </Header>

      {loading ? (
        <EmptyState><EmptyText>Carregando...</EmptyText></EmptyState>
      ) : myCoupons.length > 0 ? (
        <CouponsGrid>
          {myCoupons.map((coupon) => {
            const store = stores[coupon.store_id] || {};
            const image = coupon.image_url?.trim() || store.image_url?.trim() || null;
            const validUntil = new Date(coupon.valid_until).toLocaleDateString('pt-BR');
            return (
              <CouponCard key={coupon.id}>
                {image
                  ? <CouponImage src={image} alt={store.name} />
                  : <div style={{
                      width: '100%', height: '200px',
                      background: 'linear-gradient(135deg, #CDA09B, #A67168)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '3.5rem', fontWeight: 700, color: 'white',
                      fontFamily: "'Playfair Display', serif"
                    }}>
                      {store.name?.charAt(0).toUpperCase()}
                    </div>
                }
                <CouponContent>
                  <StoreName>{store.name || 'Loja'}</StoreName>
                  <Discount>{coupon.discount}% OFF</Discount>
                  {coupon.description && <Description>{coupon.description}</Description>}
                  <ValidUntil $expired={new Date(coupon.valid_until) < new Date()}>
                    {new Date(coupon.valid_until) < new Date()
                      ? <><FaClock /> Expirado em {validUntil}</>
                      : <><FaClock /> Válido até {validUntil}</>
                    }
                  </ValidUntil>
                  <ButtonGroup>
                    <UseButton
                      onClick={() => handleUseCoupon(coupon)}
                      disabled={new Date(coupon.valid_until) < new Date()}
                      $expired={new Date(coupon.valid_until) < new Date()}
                    >
                      <FaQrcode /> {new Date(coupon.valid_until) < new Date() ? 'Cupom Expirado' : 'Usar Cupom'}
                    </UseButton>
                    <RemoveButton onClick={() => handleRemoveCoupon(coupon.id)}>
                      <FaTrash />
                    </RemoveButton>
                  </ButtonGroup>
                </CouponContent>
              </CouponCard>
            );
          })}
        </CouponsGrid>
      ) : (
        <EmptyState>
          <EmptyIcon><FaTicketAlt /></EmptyIcon>
          <EmptyText>Você ainda não possui cupons salvos</EmptyText>
        </EmptyState>
      )}
    </Container>
  );
};

export default MyCouponsPage;
