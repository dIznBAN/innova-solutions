import styled from 'styled-components'
import { theme } from '../../theme'

export const Container = styled.footer`
  background: #CDA09B;
  color: white;
  padding: 3rem 0 1.5rem;
  margin-top: auto;
`

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 2rem;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const SectionTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 30px;
    height: 2px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 1px;
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

export const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  
  &:hover {
    color: white;
    transform: translateX(5px);
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    justify-content: center;
  }
`

export const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
  
  ${ContactItem}:hover & {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  padding: 0.25rem 0;
  
  &:hover {
    color: white;
    transform: translateX(5px);
  }
  
  svg {
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }
  
  &:hover svg {
    opacity: 1;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    justify-content: center;
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 2rem 0 1.5rem;
`

export const Copyright = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  margin: 0;
  padding: 1rem 0;
`