import styled from 'styled-components'
import { theme } from '../../theme'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`

export const Modal = styled.div`
  background: ${theme.colors.white};
  border-radius: 20px;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  color: ${theme.colors.gray};
  cursor: pointer;
  z-index: 1;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  &:hover {
    background: ${theme.colors.lightGray};
    color: ${theme.colors.text};
  }
`

export const Header = styled.div`
  text-align: center;
  padding: 2rem;
  border-bottom: 1px solid ${theme.colors.lightGray};
`

export const StoreImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 4px solid ${theme.colors.secondary};
`

export const StoreName = styled.h2`
  font-family: ${theme.fonts.secondary};
  color: ${theme.colors.text};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`

export const Discount = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryLight} 100%);
  color: ${theme.colors.white};
  padding: 0.75rem 2rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 1.2rem;
  display: inline-block;
`

export const Content = styled.div`
  padding: 2rem;
`

export const Section = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`

export const SectionTitle = styled.h3`
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.secondary};
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid ${theme.colors.secondary};
  padding-bottom: 0.5rem;
`

export const Text = styled.p`
  color: ${theme.colors.text};
  line-height: 1.6;
  margin: 0;
`

export const RulesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const RuleItem = styled.li`
  color: ${theme.colors.text};
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;

  &:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${theme.colors.primary};
    font-weight: bold;
  }
`

export const Footer = styled.div`
  padding: 2rem;
  border-top: 1px solid ${theme.colors.lightGray};
  text-align: center;
`

export const CouponButton = styled.button`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryLight} 100%);
  color: ${theme.colors.white};
  border: none;
  padding: 1rem 3rem;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(205, 160, 155, 0.3);
  }
`