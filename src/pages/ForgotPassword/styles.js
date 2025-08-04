import styled from 'styled-components'
import { theme } from '../../theme'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryLight} 100%);
  padding: 2rem;
`

export const Card = styled.div`
  background: ${theme.colors.white};
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
  padding: 2.5rem;
  position: relative;
`

export const BackLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 2rem;
  transition: color 0.3s;

  &:hover {
    color: ${theme.colors.primaryLight};
  }
`

export const Title = styled.h1`
  font-family: ${theme.fonts.secondary};
  color: ${theme.colors.text};
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const InputGroup = styled.div`
  position: relative;
`

export const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${theme.colors.gray};
  z-index: 1;
`

export const Input = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid ${theme.colors.lightGray};
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(45, 138, 71, 0.1);
  }
`

export const SubmitButton = styled.button`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryLight} 100%);
  color: ${theme.colors.white};
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(45, 138, 71, 0.3);
  }
`

export const SuccessMessage = styled.div`
  background: linear-gradient(135deg, ${theme.colors.success} 0%, #66BB6A 100%);
  color: ${theme.colors.white};
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 500;
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`