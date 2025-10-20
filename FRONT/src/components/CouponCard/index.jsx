import { motion } from 'framer-motion';
import { Eye, Percent } from 'lucide-react';
import { Card, StoreImage, StoreName, Discount, CouponButton, ImageContainer, DiscountBadge } from "./styles";

const CouponCard = ({ storeName, discount, image, index }) => {
  return (
    <Card
      as={motion.div}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <ImageContainer>
        <StoreImage
          src={
            image ||
            "https://via.placeholder.com/200x120.png?text=Imagem+Indisponível"
          }
          alt={storeName}
        />
        <DiscountBadge
          as={motion.div}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            delay: index * 0.1 + 0.5,
            duration: 0.5,
            type: "spring",
            stiffness: 200
          }}
        >
          <Percent size={14} />
          {discount}
        </DiscountBadge>
      </ImageContainer>
      
      <StoreName>{storeName}</StoreName>
      
      <Discount>{discount}% OFF</Discount>
      
      <CouponButton
        as={motion.button}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 6px 20px rgba(205, 160, 155, 0.3)"
        }}
        whileTap={{ scale: 0.98 }}
      >
        <Eye size={16} />
        Ver Cupom
      </CouponButton>
    </Card>
  );
};

export default CouponCard;
