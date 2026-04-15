import styled from 'styled-components'
import { theme } from '../../theme'

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: #FAFAFA;
  display: flex;
  align-items: stretch;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const Sidebar = styled.aside`
  width: 380px;
  flex-shrink: 0;
  background: linear-gradient(160deg, ${theme.colors.primaryDark} 0%, ${theme.colors.primary} 55%, ${theme.colors.primaryLight} 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 3rem;
  position: sticky;
  top: 0;
  height: 100vh;

  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    position: static;
    padding: 3rem 2rem 2.5rem;
  }
`

export const SidebarLogo = styled.div`
  font-family: ${theme.fonts.secondary};
  font-size: 1.6rem;
  font-weight: 700;
  color: white;
  margin-bottom: 3rem;
  letter-spacing: 0.02em;

  span {
    display: block;
    font-family: ${theme.fonts.primary};
    font-size: 0.8rem;
    font-weight: 400;
    opacity: 0.75;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-top: 0.2rem;
  }
`

export const SidebarHeading = styled.h2`
  font-family: ${theme.fonts.secondary};
  font-size: 2rem;
  color: white;
  line-height: 1.3;
  margin-bottom: 1rem;
`

export const SidebarText = styled.p`
  color: rgba(255,255,255,0.75);
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
`

export const BenefitList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  color: rgba(255,255,255,0.9);
  font-size: 0.9rem;
  font-weight: 500;
`

export const BenefitIcon = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: rgba(255,255,255,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  flex-shrink: 0;
`

export const FormArea = styled.main`
  flex: 1;
  padding: 5rem 4rem 4rem;
  overflow-y: auto;

  @media (max-width: 1100px) {
    padding: 4rem 2.5rem 3rem;
  }

  @media (max-width: 900px) {
    padding: 2.5rem 1.5rem 3rem;
  }
`

export const FormHeader = styled.div`
  margin-bottom: 2.5rem;
`

export const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: ${theme.colors.gray};
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 2rem;
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.primary};
  }
`

export const Title = styled.h1`
  font-family: ${theme.fonts.secondary};
  color: ${theme.colors.text};
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.4rem;
`

export const Subtitle = styled.p`
  color: ${theme.colors.gray};
  font-size: 0.95rem;
  margin: 0;
`

export const StepsBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2.5rem;
`

export const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex: 1;
`

export const StepDot = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  flex-shrink: 0;
  background: ${props => props.active ? theme.colors.primary : props.done ? theme.colors.secondary : '#E0E0E0'};
  color: ${props => props.active ? 'white' : props.done ? theme.colors.primary : '#9E9E9E'};
  border: 2px solid ${props => props.active ? theme.colors.primary : props.done ? theme.colors.primaryLight : '#E0E0E0'};
  transition: all 0.3s;
`

export const StepLabel = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${props => props.active ? theme.colors.primary : '#9E9E9E'};
  white-space: nowrap;

  @media (max-width: 600px) {
    display: none;
  }
`

export const StepLine = styled.div`
  flex: 1;
  height: 2px;
  background: ${props => props.done ? theme.colors.primaryLight : '#E0E0E0'};
  margin: 0 0.5rem;
  transition: background 0.3s;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Section = styled.div`
  background: ${theme.colors.white};
  border-radius: 16px;
  padding: 1.75rem 2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  border: 1px solid rgba(205, 160, 155, 0.15);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const SectionTitle = styled.h3`
  font-family: ${theme.fonts.secondary};
  color: ${theme.colors.text};
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  svg {
    color: ${theme.colors.primary};
    font-size: 1rem;
  }
`

export const SectionDivider = styled.div`
  height: 1px;
  background: ${theme.colors.secondary};
  margin: 0 0 0.25rem;
`

export const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.cols === 2 ? '1fr 1fr' : '1fr'};
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`

export const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${theme.colors.gray};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const InputIcon = styled.div`
  position: absolute;
  left: 0.9rem;
  color: ${props => props.error ? '#C62828' : theme.colors.primaryLight};
  font-size: 0.95rem;
  pointer-events: none;
  z-index: 1;
`

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem 0.8rem ${props => props.hasIcon ? '2.6rem' : '1rem'};
  border: 2px solid ${props => props.error ? '#FFCDD2' : theme.colors.lightGray};
  border-radius: 10px;
  font-size: 0.95rem;
  font-family: ${theme.fonts.primary};
  background: ${props => props.error ? '#FFF8F8' : '#FAFAFA'};
  color: ${theme.colors.text};
  transition: all 0.2s;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${props => props.error ? '#E53935' : theme.colors.primary};
    background: white;
    box-shadow: 0 0 0 3px ${props => props.error ? 'rgba(229,57,53,0.08)' : 'rgba(166,113,104,0.1)'};
  }

  &::placeholder {
    color: #BDBDBD;
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 2px solid ${theme.colors.lightGray};
  border-radius: 10px;
  font-size: 0.95rem;
  font-family: ${theme.fonts.primary};
  background: #FAFAFA;
  color: ${theme.colors.text};
  resize: vertical;
  min-height: 90px;
  transition: all 0.2s;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    background: white;
    box-shadow: 0 0 0 3px rgba(166,113,104,0.1);
  }

  &::placeholder {
    color: #BDBDBD;
  }
`

export const ErrorMessage = styled.span`
  color: #C62828;
  font-size: 0.78rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`

export const SubmitButton = styled.button`
  background: linear-gradient(135deg, ${theme.colors.primaryDark} 0%, ${theme.colors.primary} 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  font-family: ${theme.fonts.primary};
  cursor: pointer;
  transition: all 0.25s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  letter-spacing: 0.02em;
  box-shadow: 0 4px 15px rgba(166,113,104,0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(166,113,104,0.4);
  }

  &:active {
    transform: translateY(0);
  }
`

export const SuccessCard = styled.div`
  background: ${theme.colors.white};
  border-radius: 20px;
  padding: 4rem 3rem;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  border: 1px solid rgba(205, 160, 155, 0.15);
  max-width: 480px;
  margin: 0 auto;
`

export const SuccessIcon = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: ${theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
  color: ${theme.colors.primary};
`

export const SuccessTitle = styled.h2`
  font-family: ${theme.fonts.secondary};
  color: ${theme.colors.text};
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
`

export const SuccessText = styled.p`
  color: ${theme.colors.gray};
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 2rem;
`

export const ImageUploadArea = styled.div`
  border: 2px dashed ${theme.colors.primaryLight};
  border-radius: 12px;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  background: ${theme.colors.secondary};
  cursor: pointer;
  transition: all 0.2s;

  svg {
    font-size: 2rem;
    color: ${theme.colors.primaryLight};
  }

  &:hover {
    border-color: ${theme.colors.primary};
    background: #EDD8D5;
  }
`

export const ImageUploadLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${theme.colors.primary};
  color: white;
  padding: 0.55rem 1.25rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${theme.colors.primaryDark};
  }

  input {
    display: none;
  }
`

export const ImageUploadHint = styled.span`
  font-size: 0.78rem;
  color: ${theme.colors.gray};
`

export const ImagePreview = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid ${theme.colors.primaryLight};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: ${theme.colors.secondary};
`

export const ImagePreviewImg = styled.img`
  width: 100%;
  max-height: 180px;
  object-fit: contain;
  border-radius: 8px;
`

export const ImageRemoveButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: #FFEBEE;
  color: #C62828;
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #C62828;
    color: white;
  }
`
