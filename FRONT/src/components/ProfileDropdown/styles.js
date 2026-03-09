import styled from 'styled-components'
import { theme } from '../../theme'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    display: none;
  }
`

export const UserName = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${theme.colors.text};
  line-height: 1.2;
`

export const UserStatus = styled.span`
  font-size: 0.75rem;
  color: ${theme.colors.primary};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${theme.colors.primary};
    animation: pulse 2s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`

export const ProfileIcon = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.$hasImage ? 'transparent' : theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(205, 160, 155, 0.3);
  overflow: hidden;
  padding: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    background: ${props => props.$hasImage ? 'transparent' : theme.colors.primaryLight};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(205, 160, 155, 0.4);
  }

  svg {
    font-size: 16px;
  }
`

export const Dropdown = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  min-width: 150px;
  z-index: 1001;
  overflow: hidden;
  border: 1px solid ${theme.colors.lightGray};
`

export const DropdownItem = styled.button`
  width: 100%;
  padding: 12px 16px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  color: ${theme.colors.text};
  font-weight: 500;
  transition: background 0.2s;

  &:hover {
    background: ${theme.colors.lightGray};
    color: ${theme.colors.primary};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${theme.colors.lightGray};
  }
`