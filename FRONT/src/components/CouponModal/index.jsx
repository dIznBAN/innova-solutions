import React from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import { useAuth } from '../../hooks/useAuth'
import {
  Overlay, Modal, CloseButton, Header, StoreImage, StoreName, Discount,
  Content, Section, SectionTitle, Text, RulesList, RuleItem, Footer, CouponButton
} from './styles'

const CouponModal = ({ coupon, isOpen, onClose }) => {
  if (!isOpen || !coupon) return null

  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()

  const handleUseOffer = async () => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }
    try {
      await api.saveUserCoupon(coupon.id)
    } catch (e) {
      // já salvo, ignora
    }
    navigate('/meus-cupons')
  }

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>

        <Header>
          {coupon.image
            ? <StoreImage src={coupon.image} alt={coupon.storeName} />
            : <div style={{
                width: '100%', height: '160px',
                background: 'linear-gradient(135deg, #CDA09B, #A67168)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '4rem', fontWeight: 700, color: 'white',
                fontFamily: "'Playfair Display', serif"
              }}>
                {coupon.storeName?.charAt(0).toUpperCase()}
              </div>
          }
          <StoreName>{coupon.storeName}</StoreName>
          <Discount>{coupon.discount}% OFF</Discount>
        </Header>

        <Content>
          {coupon.title && (
            <Section>
              <SectionTitle>{coupon.title}</SectionTitle>
            </Section>
          )}

          <Section>
            <SectionTitle>Descrição da Oferta</SectionTitle>
            <Text>
              {coupon.description || `Aproveite ${coupon.discount}% de desconto em toda a loja ${coupon.storeName}.`}
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
              <RuleItem>Oferta válida até {coupon.validUntil}</RuleItem>
              <RuleItem>Não cumulativo com outras promoções</RuleItem>
              <RuleItem>Válido apenas para compras online</RuleItem>
              <RuleItem>Sujeito à disponibilidade de estoque</RuleItem>
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
