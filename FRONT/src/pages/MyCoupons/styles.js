import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 2rem 2rem;
  
  @media (max-width: 768px) {
    padding: 6rem 1rem 2rem;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    color: #2c3e50;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #7f8c8d;
    font-size: 1.1rem;
  }
`;

export const CouponsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`;

export const CouponCard = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`;

export const CouponImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CouponContent = styled.div`
  padding: 1.5rem;
`;

export const StoreName = styled.h3`
  color: #2c3e50;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

export const Discount = styled.div`
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-weight: bold;
  font-size: 1.1rem;
  display: inline-block;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  color: #7f8c8d;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

export const ValidUntil = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.$expired ? '#e74c3c' : '#f39c12'};
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  font-weight: ${props => props.$expired ? 'bold' : 'normal'};
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const UseButton = styled.button`
  flex: 1;
  background: ${props => props.$expired ? 'linear-gradient(135deg, #95a5a6, #7f8c8d)' : 'linear-gradient(135deg, #27ae60, #2ecc71)'};
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: ${props => props.$expired ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  opacity: ${props => props.$expired ? '0.6' : '1'};

  &:hover {
    background: ${props => props.$expired ? 'linear-gradient(135deg, #95a5a6, #7f8c8d)' : 'linear-gradient(135deg, #229954, #27ae60)'};
    transform: ${props => props.$expired ? 'none' : 'translateY(-2px)'};
  }
`;

export const RemoveButton = styled.button`
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 45px;

  &:hover {
    background: linear-gradient(135deg, #c0392b, #a93226);
    transform: translateY(-2px);
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
`;

export const EmptyIcon = styled.div`
  font-size: 4rem;
  color: #bdc3c7;
  margin-bottom: 1rem;
`;

export const EmptyText = styled.p`
  color: #7f8c8d;
  font-size: 1.2rem;
`;