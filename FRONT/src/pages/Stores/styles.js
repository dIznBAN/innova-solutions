import styled from 'styled-components'
import { theme } from '../../theme'

export const Container = styled.div`
  padding: 8rem 2rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 6rem 1rem 2rem;
  }
`

export const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.text};
    font-size: 3rem;
    margin-bottom: 1rem;

    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 2.2rem;
    }
  }

  p {
    color: ${theme.colors.gray};
    font-size: 1.2rem;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  position: relative;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`

export const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  color: ${theme.colors.gray};
  z-index: 1;
`

export const SearchInput = styled.input`
  flex: 1;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid ${theme.colors.lightGray};
  border-radius: 25px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(205, 160, 155, 0.1);
  }

  &::placeholder {
    color: ${theme.colors.gray};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
  }
`

export const StoresGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

export const StoreCard = styled.div`
  background: ${theme.colors.white};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  }
`

export const StoreImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  flex-shrink: 0;
`

export const StoreImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${StoreCard}:hover & {
    transform: scale(1.05);
  }
`

export const StorePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #CDA09B, #A67168);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 700;
  color: white;
  font-family: ${theme.fonts.secondary};
`

export const StoreContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;
`

export const StoreName = styled.h3`
  font-family: ${theme.fonts.secondary};
  color: ${theme.colors.text};
  font-size: 1.3rem;
  font-weight: 600;
`

export const StoreDescription = styled.p`
  color: ${theme.colors.gray};
  font-size: 0.95rem;
  line-height: 1.5;
  flex: 1;
`

export const StoreLink = styled.a`
  display: block;
  width: 100%;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryLight} 100%);
  color: ${theme.colors.white};
  border: none;
  padding: 1rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  text-decoration: none;
  margin-top: auto;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(205, 160, 155, 0.3);
  }
`

export const NoResults = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: ${theme.colors.gray};

  h3 {
    color: ${theme.colors.text};
    margin-bottom: 1rem;
    font-family: ${theme.fonts.secondary};
  }
`
