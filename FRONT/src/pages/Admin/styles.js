import styled from 'styled-components'
import { theme } from '../../theme'

export const Container = styled.div`
  padding: 6rem 2rem 3rem;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
  background: #FAFAFA;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`

export const Title = styled.h1`
  font-family: ${theme.fonts.secondary};
  color: ${theme.colors.text};
  font-size: 2rem;
  margin: 0;
  font-weight: 700;
`

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2.5rem;
`

export const StatCard = styled.div`
  background: ${theme.colors.white};
  border-radius: 16px;
  padding: 1.5rem 2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  display: flex;
  align-items: center;
  gap: 1.25rem;
  border: 1px solid rgba(205, 160, 155, 0.15);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  }
`

export const StatIcon = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: ${theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.primary};
  font-size: 1.4rem;
  flex-shrink: 0;
`

export const StatInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const StatNumber = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${theme.colors.text};
  line-height: 1;
  margin-bottom: 0.25rem;
`

export const StatLabel = styled.div`
  color: ${theme.colors.gray};
  font-size: 0.85rem;
  font-weight: 500;
`

export const TabsContainer = styled.div`
  display: flex;
  background: ${theme.colors.white};
  border-radius: 12px;
  padding: 0.375rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  border: 1px solid rgba(205, 160, 155, 0.15);
  gap: 0.25rem;
`

export const Tab = styled.button`
  flex: 1;
  padding: 0.75rem 1.5rem;
  border: none;
  background: ${props => props.active ? theme.colors.primary : 'transparent'};
  color: ${props => props.active ? theme.colors.white : theme.colors.gray};
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: ${props => props.active ? theme.colors.white : theme.colors.primary};
    background: ${props => props.active ? theme.colors.primary : theme.colors.secondary};
  }
`

export const TabContent = styled.div`
  background: ${theme.colors.white};
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  border: 1px solid rgba(205, 160, 155, 0.15);
`

export const FilterContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const SearchInput = styled.input`
  width: 100%;
  max-width: 360px;
  padding: 0.75rem 1rem;
  border: 2px solid ${theme.colors.lightGray};
  border-radius: 10px;
  font-size: 0.9rem;
  background: #FAFAFA;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primaryLight};
    background: white;
    box-shadow: 0 0 0 3px rgba(205, 160, 155, 0.1);
  }

  &::placeholder {
    color: #BDBDBD;
  }
`

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 12px;
  border: 1px solid ${theme.colors.lightGray};
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
`

export const TableHeader = styled.thead`
  background: ${theme.colors.secondary};
`

export const TableHeaderCell = styled.th`
  padding: 1rem 1.25rem;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;

  &:last-child {
    text-align: center;
  }
`

export const TableBody = styled.tbody``

export const TableRow = styled.tr`
  border-bottom: 1px solid ${theme.colors.lightGray};
  transition: background 0.15s;

  &:hover {
    background: #FAFAFA;
  }

  &:last-child {
    border-bottom: none;
  }
`

export const TableCell = styled.td`
  padding: 1rem 1.25rem;
  font-size: 0.9rem;
  color: ${theme.colors.text};
  vertical-align: middle;

  &:last-child {
    text-align: center;
  }
`

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 600;

  ${props => props.variant === 'active' && `
    background: #E8F5E9;
    color: #2E7D32;
  `}
  ${props => props.variant === 'pending' && `
    background: #FFF8E1;
    color: #F57F17;
  `}
  ${props => props.variant === 'inactive' && `
    background: #FAFAFA;
    color: #757575;
    border: 1px solid #E0E0E0;
  `}
  ${props => props.variant === 'admin' && `
    background: ${theme.colors.secondary};
    color: ${theme.colors.primary};
  `}
  ${props => props.variant === 'user' && `
    background: #F5F5F5;
    color: #757575;
  `}
`

export const ActionsCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`

export const ActionButton = styled.button`
  padding: 0.4rem 0.9rem;
  border: none;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  white-space: nowrap;

  ${props => props.approve && `
    background: ${theme.colors.secondary};
    color: ${theme.colors.primary};
    &:hover { background: ${theme.colors.primaryLight}; color: white; transform: translateY(-1px); }
  `}

  ${props => props.reject && `
    background: #FFEBEE;
    color: #C62828;
    &:hover { background: #C62828; color: white; transform: translateY(-1px); }
  `}

  ${props => props.neutral && `
    background: #F5F5F5;
    color: #424242;
    &:hover { background: #E0E0E0; transform: translateY(-1px); }
  `}
`

export const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: ${theme.colors.gray};
  font-size: 0.95rem;
`

export const LoadingState = styled.div`
  text-align: center;
  padding: 3rem;
  color: ${theme.colors.gray};
  font-size: 0.95rem;
`

export const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  color: ${theme.colors.primary};
  flex-shrink: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
