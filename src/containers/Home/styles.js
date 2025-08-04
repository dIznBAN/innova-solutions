import styled from 'styled-components'
import { theme } from '../../theme'

export const Container = styled.div`
  min-height: 100vh;
`

export const HeroSection = styled.section`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryLight} 100%);
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(202,199,182,0.4)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.4)"/><circle cx="40" cy="80" r="1" fill="rgba(202,199,182,0.3)"/></svg>');
  }
`

export const HeroTitle = styled.h1`
  font-family: ${theme.fonts.secondary};
  color: ${theme.colors.white};
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
  max-width: 800px;
  position: relative;
  z-index: 1;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`

export const HeroSubtitle = styled.p`
  color: ${theme.colors.white};
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  position: relative;
  z-index: 1;
`

export const HeroButton = styled.a`
  background: ${theme.colors.secondary};
  color: ${theme.colors.text};
  text-decoration: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(202,199,182,0.4);
  }
`