import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CouponCard from "../CouponCard";
import CouponModal from "../CouponModal";
import api from "../../services/api";
import { Container, Title, CouponsGrid } from "./styles";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const CouponsSection = () => {
  const [coupons, setCoupons] = useState([]);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [rawCoupons, stores] = await Promise.all([
          api.request('/coupons'),
          api.getAllStores(),
        ]);
        const storeMap = {};
        stores.forEach(s => { storeMap[s.id] = s; });
        const now = new Date();
        const normalized = rawCoupons
          .filter(c => new Date(c.valid_until) >= now)
          .slice(0, 6)
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
        setCoupons(normalized);
      } catch (e) {
        console.error('Erro ao carregar cupons:', e);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Title
        as={motion.h2}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Mais Cupons
      </Title>

      <CouponsGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {coupons.map((coupon, index) => (
          <motion.div key={coupon.id} variants={itemVariants}>
            <CouponCard
              storeName={coupon.storeName}
              discount={coupon.discount}
              image={coupon.image}
              index={index}
              onViewCoupon={() => { setSelectedCoupon(coupon); setIsModalOpen(true); }}
            />
          </motion.div>
        ))}
      </CouponsGrid>

      <CouponModal
        coupon={selectedCoupon}
        isOpen={isModalOpen}
        onClose={() => { setIsModalOpen(false); setSelectedCoupon(null); }}
      />
    </Container>
  );
};

export default CouponsSection;
