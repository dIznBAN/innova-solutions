import styled from 'styled-components'
import { theme } from '../../theme'

export const Container = styled.div`
  padding: 6rem 2rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
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

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.primaryLight};
    transform: translateY(-2px);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
    justify-content: center;
  }
`

export const FilterOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`

export const FilterPanel = styled.div`
  background: ${theme.colors.white};
  border: 2px solid ${theme.colors.lightGray};
  border-radius: 15px;
  margin-bottom: 2rem;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  position: relative;
  z-index: 1000;
  animation: slideDown 0.3s ease;

  @keyframes slideDown {
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

export const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 2rem;
  padding-bottom: 1rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const FilterTitle = styled.h4`
  color: ${theme.colors.text};
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-family: ${theme.fonts.secondary};
`

export const FilterOption = styled.button`
  background: ${props => props.active ? theme.colors.primary : 'transparent'};
  color: ${props => props.active ? theme.colors.white : theme.colors.text};
  border: 2px solid ${props => props.active ? theme.colors.primary : theme.colors.lightGray};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    border-color: ${theme.colors.primary};
    color: ${props => props.active ? theme.colors.white : theme.colors.primary};
  }
`

export const FilterActions = styled.div`
  grid-column: 1 / -1;
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding-top: 1rem;
  border-top: 1px solid ${theme.colors.lightGray};
  margin-top: 1rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`

export const ClearFiltersButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: ${theme.colors.gray};
  border: 2px solid ${theme.colors.lightGray};
  padding: 1rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    color: #e74c3c;
    border-color: #e74c3c;
    transform: translateY(-1px);
  }
`

export const ApplyFiltersButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryLight} 100%);
  color: ${theme.colors.white};
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(205, 160, 155, 0.3);
  }
`

export const CouponsGrid = styled.div`
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

export const CouponCard = styled.div`
  background: ${theme.colors.white};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  }
`

export const CouponImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${CouponCard}:hover & {
    transform: scale(1.05);
  }
`

export const CouponContent = styled.div`
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
  margin-bottom: 0.5rem;
  font-weight: 600;
`

export const Discount = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryLight} 100%);
  color: ${theme.colors.white};
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  display: inline-block;
`





export const CouponButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryLight} 100%);
  color: ${theme.colors.white};
  border: none;
  padding: 1rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
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