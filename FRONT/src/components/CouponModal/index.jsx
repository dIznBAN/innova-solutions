import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import { useAuth } from '../../hooks/useAuth'
import {
  Overlay, Modal, CloseButton, Header, StoreImage, StoreName, Discount,
  Content, Section, SectionTitle, Text, RulesList, RuleItem, Footer, CouponButton,
  CatalogSection, CatalogTitle, CatalogScroll, CatalogThumb, LightboxOverlay, LightboxImg
} from './styles'

const CouponModal = ({ coupon, isOpen, onClose }) => {
  if (!isOpen || !coupon) return null

  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()
  const [lightboxSrc, setLightboxSrc] = useState(null)
  const scrollRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const handleMouseDown = (e) => {
    isDragging.current = true
    startX.current = e.pageX - scrollRef.current.offsetLeft
    scrollLeft.current = scrollRef.current.scrollLeft
  }

  const handleMouseMove = (e) => {
    if (!isDragging.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    scrollRef.current.scrollLeft = scrollLeft.current - (x - startX.current)
  }

  const handleMouseUp = () => { isDragging.current = false }

  const handleThumbClick = (url) => {
    if (!isDragging.current) setLightboxSrc(url)
  }

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

  const catalogImages = coupon.catalogImages || []

  return (
    <>
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>

        <Header>
          {coupon.storeImage
            ? <StoreImage src={coupon.storeImage} alt={coupon.storeName} />
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

          {catalogImages.length > 0 && (
            <CatalogSection style={{ padding: '0 0 1.5rem' }}>
              <CatalogTitle>Catálogo de Produtos</CatalogTitle>
              <CatalogScroll
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                {catalogImages.map((url, i) => (
                  <CatalogThumb key={i} onClick={() => handleThumbClick(url)}>
                    <img src={url} alt={`produto ${i + 1}`} draggable={false} />
                  </CatalogThumb>
                ))}
              </CatalogScroll>
            </CatalogSection>
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

    {lightboxSrc && (
      <LightboxOverlay onClick={() => setLightboxSrc(null)}>
        <LightboxImg src={lightboxSrc} alt="produto ampliado" />
      </LightboxOverlay>
    )}
    </>  
  )
}

export default CouponModal
