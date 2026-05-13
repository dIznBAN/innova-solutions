import styled, { keyframes } from 'styled-components';
import { theme } from '../../theme';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: #FAFAFA;
  font-family: ${theme.fonts.primary};
`;

export const Hero = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryLight} 60%, #e8c5c0 100%);
  padding: 7rem 2rem 5rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 20% 80%, rgba(255,255,255,0.08) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 60px;
    background: #FAFAFA;
    clip-path: ellipse(55% 100% at 50% 100%);
  }
`;

export const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.25);
  color: white;
  padding: 0.4rem 1.1rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

export const HeroTitle = styled.h1`
  font-family: ${theme.fonts.secondary};
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  color: white;
  font-weight: 700;
  margin: 0 0 1rem;
  line-height: 1.15;
  text-shadow: 0 2px 20px rgba(0,0,0,0.15);
`;

export const HeroSubtitle = styled.p`
  color: rgba(255,255,255,0.88);
  font-size: 1.05rem;
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.7;
`;

export const HeroMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

export const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: rgba(255,255,255,0.75);
  font-size: 0.82rem;
  svg { font-size: 0.9rem; }
`;

export const ContentWrapper = styled.div`
  max-width: 860px;
  margin: 0 auto;
  padding: 3rem 1.5rem 5rem;
  animation: ${fadeUp} 0.6s ease both;
  animation-delay: 0.2s;
`;

export const TableOfContents = styled.nav`
  background: white;
  border-radius: 1.25rem;
  padding: 1.75rem 2rem;
  margin-bottom: 2.5rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  border: 1px solid rgba(205,160,155,0.15);
`;

export const TocTitle = styled.h3`
  font-family: ${theme.fonts.secondary};
  font-size: 1rem;
  color: ${theme.colors.text};
  margin: 0 0 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 4px;
    height: 18px;
    background: linear-gradient(180deg, ${theme.colors.primaryLight}, ${theme.colors.primary});
    border-radius: 2px;
    display: inline-block;
  }
`;

export const TocList = styled.ol`
  margin: 0;
  padding: 0 0 0 1.25rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.35rem 1.5rem;
`;

export const TocItem = styled.li`
  a {
    color: ${theme.colors.gray};
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.2s;
    line-height: 1.8;
    &:hover { color: ${theme.colors.primary}; }
  }
`;

export const Section = styled.section`
  background: white;
  border-radius: 1.25rem;
  padding: 2rem 2.25rem;
  margin-bottom: 1.25rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  border: 1px solid rgba(205,160,155,0.12);
  transition: box-shadow 0.2s, border-color 0.2s;

  &:hover {
    box-shadow: 0 6px 24px rgba(166,113,104,0.1);
    border-color: rgba(205,160,155,0.25);
  }

  @media (max-width: 600px) { padding: 1.5rem; }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const SectionNumber = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, ${theme.colors.secondary}, #f0d8d5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  flex-shrink: 0;
  font-family: ${theme.fonts.secondary};
`;

export const SectionTitle = styled.h2`
  font-family: ${theme.fonts.secondary};
  font-size: 1.15rem;
  color: ${theme.colors.text};
  margin: 0;
  font-weight: 700;
  line-height: 1.3;
  padding-top: 0.35rem;
`;

export const SectionText = styled.p`
  color: #555;
  font-size: 0.95rem;
  line-height: 1.8;
  margin: 0;
`;

export const Highlight = styled.div`
  background: linear-gradient(135deg, ${theme.colors.secondary}80, #fdf0ee);
  border-left: 3px solid ${theme.colors.primaryLight};
  border-radius: 0 0.75rem 0.75rem 0;
  padding: 1rem 1.25rem;
  margin-top: 1rem;
  font-size: 0.88rem;
  color: ${theme.colors.primaryDark};
  line-height: 1.7;
`;

export const PageFooter = styled.div`
  text-align: center;
  padding: 2.5rem 1.5rem;
  background: white;
  border-radius: 1.25rem;
  border: 1px solid rgba(205,160,155,0.15);
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);

  p {
    color: ${theme.colors.gray};
    font-size: 0.875rem;
    margin: 0 0 0.5rem;
    line-height: 1.6;
  }

  a {
    color: ${theme.colors.primary};
    font-weight: 600;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`;

/* ── Exclusivos da página Sobre Nós ── */

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2.5rem;
`;

export const StatCard = styled.div`
  background: white;
  border-radius: 1.25rem;
  padding: 1.75rem 1.25rem;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  border: 1px solid rgba(205,160,155,0.12);
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 6px 24px rgba(166,113,104,0.1);
    border-color: rgba(205,160,155,0.25);
    transform: translateY(-3px);
  }
`;

export const StatNumber = styled.div`
  font-family: ${theme.fonts.secondary};
  font-size: 2.2rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  line-height: 1;
  margin-bottom: 0.4rem;
`;

export const StatLabel = styled.div`
  font-size: 0.82rem;
  color: ${theme.colors.gray};
  font-weight: 500;
`;

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
  margin-top: 1rem;
`;

export const ValueCard = styled.div`
  background: linear-gradient(135deg, ${theme.colors.secondary}60, #fdf0ee);
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid rgba(205,160,155,0.2);
`;

export const ValueIcon = styled.div`
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
`;

export const ValueTitle = styled.h4`
  font-family: ${theme.fonts.secondary};
  font-size: 1rem;
  color: ${theme.colors.text};
  margin: 0 0 0.4rem;
  font-weight: 700;
`;

export const ValueText = styled.p`
  font-size: 0.85rem;
  color: #666;
  margin: 0;
  line-height: 1.6;
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.25rem;
  margin-top: 1rem;
`;

export const TeamCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem 1rem;
  text-align: center;
  border: 1px solid rgba(205,160,155,0.15);
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 6px 20px rgba(166,113,104,0.12);
    transform: translateY(-3px);
  }
`;

export const TeamAvatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${theme.colors.primaryLight}, ${theme.colors.primary});
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.fonts.secondary};
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin: 0 auto 0.75rem;
`;

export const TeamName = styled.h4`
  font-family: ${theme.fonts.secondary};
  font-size: 0.95rem;
  color: ${theme.colors.text};
  margin: 0 0 0.25rem;
  font-weight: 700;
`;

export const TeamRole = styled.p`
  font-size: 0.78rem;
  color: ${theme.colors.gray};
  margin: 0;
`;
