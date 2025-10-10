import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${theme.colors.primary} 0%,
    ${theme.colors.primaryLight} 100%
  );
  padding: 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(202,199,182,0.3)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.3)"/><circle cx="40" cy="80" r="1" fill="rgba(202,199,182,0.2)"/></svg>');
  }
`;

export const AuthCard = styled.div`
  background: ${theme.colors.white};
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 450px;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

export const TabContainer = styled.div`
  display: flex;
  background: ${theme.colors.lightGray};
`;

export const Tab = styled.button`
  flex: 1;
  padding: 1.5rem;
  border: none;
  background: ${(props) => (props.active ? theme.colors.white : "transparent")};
  color: ${(props) =>
    props.active ? theme.colors.primary : theme.colors.gray};
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  ${(props) =>
    props.active &&
    `
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: ${theme.colors.primary};
    }
  `}

  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const FormContainer = styled.div`
  padding: 2.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputGroup = styled.div`
  position: relative;
`;

export const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${theme.colors.gray};
  z-index: 1;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid
    ${(props) => (props.error ? "#e74c3c" : theme.colors.lightGray)};
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: ${theme.colors.white};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(205, 160, 155, 0.1);
  }

  &::placeholder {
    color: ${theme.colors.gray};
  }
`;

export const PasswordToggle = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${theme.colors.gray};
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const SubmitButton = styled.button`
  background: linear-gradient(
    135deg,
    ${theme.colors.primary} 0%,
    ${theme.colors.primaryLight} 100%
  );
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
    box-shadow: 0 8px 25px rgba(205, 160, 155, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ForgotPassword = styled.a`
  text-align: center;
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  margin-top: 1rem;
  transition: color 0.3s;

  &:hover {
    color: ${theme.colors.primaryLight};
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.span`
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  display: block;
`;

export const SuccessMessage = styled.div`
  background: linear-gradient(135deg, ${theme.colors.success} 0%, #66bb6a 100%);
  color: ${theme.colors.white};
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 1.5rem;
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
`;

export const LogoContainer = styled.div`
  position: fixed;
  top: 1rem;
  left: 2rem;
  z-index: 1001;
  background: ${theme.colors.white};
  border-radius: 15px;
  padding: 0 1rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    left: 1rem;
  }
`;