import styled from 'styled-components'
import { theme } from '../../theme'

export const Card = styled.div`
  background: ${theme.colors.white};
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 280px;
  height: 380px;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  }
`

export const StoreImage = styled.img`
  width: 100%;
  height: 200px;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
`

export const StoreName = styled.h3`
  font-family: ${theme.fonts.secondary};
  color: ${theme.colors.text};
  margin: 0;
  padding: 1rem;
  font-size: 1.1rem;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  background-color: ${theme.colors.white};
`

export const Discount = styled.div`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  text-align: center;
  padding: 0.5rem;
  font-weight: 700;
  font-size: 1.1rem;
`

export const CouponButton = styled.button`
  width: 100%;
  background: ${theme.colors.secondary};
  color: ${theme.colors.text};
  border: none;
  padding: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: auto;

  &:hover {
    background: ${theme.colors.primaryLight};
  }
`