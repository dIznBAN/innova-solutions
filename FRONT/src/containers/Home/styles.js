import styled, { keyframes } from 'styled-components'
import { theme } from '../../theme'

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const Container = styled.div`
  min-height: 100vh;
  background: #FAFAFA;
  scroll-behavior: smooth;
`;

export const HeroSection = styled.section`
  background: linear-gradient(135deg, #CDA09B 0%, #E6BDB6 100%);
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
`;

export const Particle = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  animation: ${float} 6s ease-in-out infinite;
  
  &:nth-child(odd) {
    background: rgba(255, 255, 255, 0.4);
    width: 6px;
    height: 6px;
  }
  
  &:nth-child(3n) {
    background: rgba(255, 255, 255, 0.3);
    width: 3px;
    height: 3px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 2;
  max-width: 900px;
`;

export const HeroTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  color: #FFFFFF;
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  background: linear-gradient(45deg, #FFFFFF, #F0F0F0);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 3s ease-in-out infinite;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const HeroSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.3rem;
  margin-bottom: 3rem;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 1.6;
  max-width: 600px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

export const HeroButton = styled.a`
  background: #FFFFFF;
  color: #CDA09B;
  text-decoration: none;
  padding: 1.2rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border: 2px solid transparent;
  
  &:hover {
    background: #F8F8F8;
    color: #B8918C;
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: rotate(12deg) scale(1.1);
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`;