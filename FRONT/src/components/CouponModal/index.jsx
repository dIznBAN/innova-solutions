import React from 'react'
import {
  Overlay,
  Modal,
  CloseButton,
  Header,
  StoreImage,
  StoreName,
  Discount,
  Content,
  Section,
  SectionTitle,
  Text,
  RulesList,
  RuleItem,
  Footer,
  CouponButton
} from './styles'

const CouponModal = ({ coupon, isOpen, onClose }) => {
  if (!isOpen || !coupon) return null
  


  const handleUseOffer = () => {
    // Salvar cupom no localStorage
    const savedCoupons = JSON.parse(localStorage.getItem('myCoupons') || '[]')
    const couponExists = savedCoupons.find(c => c.id === coupon.id)
    
    if (!couponExists) {
      savedCoupons.push(coupon)
      localStorage.setItem('myCoupons', JSON.stringify(savedCoupons))
    }
    
    // Mostrar mensagem de sucesso
    alert('Cupom adicionado a Meus Cupons!')
    
    // Redirecionar para Meus Cupons
    window.location.href = '/meus-cupons'
  }

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        
        <Header>
          <StoreImage src={coupon.image} alt={coupon.storeName} />
          <StoreName>{coupon.storeName}</StoreName>
          <Discount>{coupon.discount}%</Discount>
        </Header>

        <Content>
          <Section>
            <SectionTitle>Descrição da Oferta</SectionTitle>
            <Text>
              {coupon.description || `Aproveite ${coupon.discount}% de desconto em toda a loja ${coupon.storeName}. Uma oportunidade única para renovar seu estilo com produtos de qualidade.`}
            </Text>
          </Section>

          <Section>
            <SectionTitle>Como Usar</SectionTitle>
            <RulesList>
              <RuleItem>Clique em "Aproveitar Oferta" para ser redirecionado</RuleItem>
              <RuleItem>Adicione os produtos desejados ao carrinho</RuleItem>
              <RuleItem>O desconto será aplicado automaticamente</RuleItem>
              <RuleItem>Finalize sua compra normalmente</RuleItem>
            </RulesList>
          </Section>

          <Section>
            <SectionTitle>Termos e Condições</SectionTitle>
            <RulesList>
              <RuleItem>Oferta válida até {coupon.validUntil || '31/12/2024'}</RuleItem>
              <RuleItem>Não cumulativo com outras promoções</RuleItem>
              <RuleItem>Válido apenas para compras online</RuleItem>
              <RuleItem>Sujeito à disponibilidade de estoque</RuleItem>
              <RuleItem>A loja se reserva o direito de alterar os termos</RuleItem>
            </RulesList>
          </Section>
        </Content>

        <Footer>
          <CouponButton onClick={handleUseOffer}>
            Aproveitar Oferta
          </CouponButton>
        </Footer>
      </Modal>
    </Overlay>
  )
}

export default CouponModal