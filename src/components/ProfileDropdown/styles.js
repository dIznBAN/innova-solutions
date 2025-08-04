import styled from 'styled-components'
import { theme } from '../../theme'

export const Container = styled.div`
  position: relative;
`

export const ProfileIcon = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(45, 138, 71, 0.3);

  &:hover {
    background: ${theme.colors.primaryLight};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(45, 138, 71, 0.4);
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