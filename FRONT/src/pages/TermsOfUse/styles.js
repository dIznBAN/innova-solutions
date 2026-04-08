import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 80px);
  padding: 40px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #667eea;
  margin-bottom: 30px;
  text-align: center;
`;

export const Section = styled.section`
  margin-bottom: 30px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 12px;
  font-weight: 600;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;
