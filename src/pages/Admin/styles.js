import styled from 'styled-components'
import { theme } from '../../theme'

export const Container = styled.div`
  padding: 6rem 2rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
`

export const Header = styled.div`
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-family: ${theme.fonts.secondary};
  color: ${theme.colors.text};
  font-size: 2.5rem;
  margin: 0;
`

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`

export const StatCard = styled.div`
  background: ${theme.colors.white};
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  text-align: center;
  border-left: 4px solid ${theme.colors.primary};
`

export const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  margin-bottom: 0.5rem;
`

export const StatLabel = styled.div`
  color: ${theme.colors.gray};
  font-weight: 500;
`

export const TabsContainer = styled.div`
  display: flex;
  background: ${theme.colors.lightGray};
  border-radius: 10px;
  padding: 0.5rem;
  margin-bottom: 2rem;
`

export const Tab = styled.button`
  flex: 1;
  padding: 1rem 2rem;
  border: none;
  background: ${props => props.active ? theme.colors.white : 'transparent'};
  color: ${props => props.active ? theme.colors.primary : theme.colors.gray};
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: ${theme.colors.primary};
  }
`

export const TabContent = styled.div`
  background: ${theme.colors.white};
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
`

export const FilterContainer = styled.div`
  margin-bottom: 2rem;
`

export const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 1rem;
  border: 2px solid ${theme.colors.lightGray};
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(205, 160, 155, 0.1);
  }
`

export const Table = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid ${theme.colors.lightGray};
`

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr 2fr;
  background: ${theme.colors.secondary};
  font-weight: 600;
  color: ${theme.colors.text};
`

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr 2fr;
  border-bottom: 1px solid ${theme.colors.lightGray};
  transition: background 0.3s;

  &:hover {
    background: ${theme.colors.lightGray};
  }

  &:last-child {
    border-bottom: none;
  }
`

export const TableCell = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 0.5rem;

  ${props => props.approve && `
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    
    &:hover {
      background: ${theme.colors.primaryDark};
      transform: translateY(-1px);
    }
  `}

  ${props => props.reject && `
    background: #e74c3c;
    color: ${theme.colors.white};
    
    &:hover {
      background: #c0392b;
      transform: translateY(-1px);
    }
  `}
`