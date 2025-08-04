import styled from 'styled-components'
import { theme } from '../../theme'

export const Container = styled.footer`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 1.5rem 2rem;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  margin-top: auto;
`

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 1rem;
    justify-content: center;
  }
`

export const SectionTitle = styled.h4`
  color: ${theme.colors.secondary};
  font-family: ${theme.fonts.secondary};
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  min-width: 80px;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    min-width: auto;
    width: 100%;
    text-align: center;
    margin-bottom: 0.5rem;
  }
`

export const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${theme.colors.white};
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  opacity: 0.9;
  white-space: nowrap;

  &:hover {
    color: ${theme.colors.secondary};
    opacity: 1;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    white-space: normal;
  }
`

export const ContactIcon = styled.div`
  color: ${theme.colors.secondary};
  font-size: 0.8rem;
  width: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Link = styled.a`
  color: ${theme.colors.white};
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  opacity: 0.9;
  white-space: nowrap;

  &:hover {
    color: ${theme.colors.secondary};
    opacity: 1;
    text-decoration: underline;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    white-space: normal;
  }
`

export const Copyright = styled.div`
  text-align: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  color: ${theme.colors.white};
  font-size: 0.85rem;
  opacity: 0.8;
`