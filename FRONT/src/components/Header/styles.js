import styled from 'styled-components'
import { theme } from '../../theme'

export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${theme.colors.white};
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 1000;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 1rem;
    justify-content: space-between;
  }
`

export const Logo = styled.h1`
  font-family: ${theme.fonts.secondary};
  color: ${theme.colors.primary};
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s;
  flex-shrink: 0;

  &:hover {
    color: ${theme.colors.primaryLight};
  }
`

export const CenterNav = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    flex: none;
  }
`

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 1rem;
  }
`

export const ProfileSection = styled.div`
  flex-shrink: 0;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    position: relative;
    z-index: 1;
  }
`

export const NavItem = styled.a`
  color: ${theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  position: relative;

  &:hover {
    color: ${theme.colors.primary};
    background: rgba(205, 160, 155, 0.1);
  }

  &.active {
    color: ${theme.colors.primary};
    background: rgba(205, 160, 155, 0.15);
  }
`