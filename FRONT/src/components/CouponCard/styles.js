import styled from 'styled-components'
import { theme } from '../../theme'

export const Card = styled.div`
  background: #FFFFFF;
  border-radius: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 280px;
  height: 360px;
  border: 1px solid rgba(205, 160, 155, 0.1);
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    border-color: rgba(205, 160, 155, 0.2);
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  overflow: hidden;
`

export const StoreImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
`

export const DiscountBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: #CDA09B;
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  box-shadow: 0 4px 12px rgba(205, 160, 155, 0.4);
  font-family: 'Poppins', sans-serif;
`

export const StoreName = styled.h3`
  font-family: 'Poppins', sans-serif;
  color: #1A1A1A;
  margin: 0;
  padding: 1.5rem 1.5rem 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.3;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Discount = styled.div`
  background: linear-gradient(135deg, #CDA09B, #B8918C);
  color: white;
  text-align: center;
  padding: 0.75rem;
  font-weight: 700;
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.5px;
`

export const CouponButton = styled.button`
  width: 100%;
  background: #F7E8E2;
  color: #CDA09B;
  border: none;
  padding: 1rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.95rem;

  &:hover {
    background: #CDA09B;
    color: white;
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: scale(1.1);
  }
`