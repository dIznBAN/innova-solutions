import styled from 'styled-components'
import { theme } from '../../theme'

export const Container = styled.section`
  padding: 4rem 2rem;
  background: ${theme.colors.white};
`

export const Title = styled.h2`
  font-family: ${theme.fonts.secondary};
  text-align: center;
  color: ${theme.colors.text};
  font-size: 2.5rem;
  margin-bottom: 3rem;
`

export const CouponsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`