import { useState } from 'react';
import { motion } from 'framer-motion';
import CouponCard from "../CouponCard";
import CouponModal from "../CouponModal";
import { Container, Title, CouponsGrid } from "./styles";
import bellaJoiasImg from "../../assets/bella.joias.jpeg";
import glamourStoreImg from "../../assets/glamour_store.jpeg";
import luxoAcessoriosImg from "../../assets/luxo.acessorios.jpeg";
import innovaSolutionsImg from "../../assets/innova_solutions.jpeg";
import deluxeJoiasImg from "../../assets/deluxe_joias.png";
import bellaAcessoriosImg from "../../assets/bella_acessorios.png";

const CouponsSection = () => {
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (coupon) => {
    setSelectedCoupon(coupon);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCoupon(null);
  };

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

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
          <motion.div
            key={index}
            variants={itemVariants}
          >
            <CouponCard
              storeName={coupon.storeName}
              discount={coupon.discount}
              image={coupon.image}
              index={index}
              onViewCoupon={() => handleOpenModal(coupon)}
            />
          </motion.div>
        ))}
      </CouponsGrid>
      
      <CouponModal
        coupon={selectedCoupon}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </Container>
  );
};

export default CouponsSection;
