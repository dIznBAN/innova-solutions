import styled from 'styled-components'
import { theme } from '../../theme'

export const Container = styled.section`
  padding: 5rem 2rem;
  background: #FAFAFA;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 1rem;
  }
`

export const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  text-align: center;
  color: #1A1A1A;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #CDA09B, #E6BDB6);
    border-radius: 2px;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`

export const CouponsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`