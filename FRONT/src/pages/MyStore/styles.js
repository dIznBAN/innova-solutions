import styled from 'styled-components'
import { theme } from '../../theme'

export const Container = styled.div`
  padding: 6rem 1.5rem 3rem;
  min-height: 100vh;
  background: #FAFAFA;
  font-family: ${theme.fonts.primary};

  @media (min-width: 768px) {
    padding: 6rem 2rem 3rem;
  }
`

export const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`

export const PageTitle = styled.h1`
  font-family: ${theme.fonts.secondary};
  font-size: 2rem;
  color: ${theme.colors.text};
  margin: 0;
  font-weight: 700;

  span {
    color: ${theme.colors.primaryLight};
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;

  ${props => props.$status === 'Aprovada' && `
    background: #E8F5E9;
    color: #2E7D32;
  `}
  ${props => props.$status === 'Pendente' && `
    background: #EEEEEE;
    color: #616161;
    border: 1px solid #BDBDBD;
  `}
  ${props => props.$status === 'Rejeitada' && `
    background: #FFEBEE;
    color: #C62828;
  `}

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: currentColor;
  }
`

export const Card = styled.div`
  background: #FFFFFF;
  border-radius: 1.5rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  border: 1px solid rgba(205, 160, 155, 0.12);
  overflow: hidden;
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(205, 160, 155, 0.12);
  flex-wrap: wrap;
  gap: 1rem;
`

export const CardTitle = styled.h2`
  font-family: ${theme.fonts.secondary};
  font-size: 1.2rem;
  color: ${theme.colors.text};
  margin: 0;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  svg {
    color: ${theme.colors.primaryLight};
    font-size: 1.1rem;
  }
`

export const CardBody = styled.div`
  padding: 2rem;
`

export const StoreHero = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const StoreLogoWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
`

export const StoreLogo = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 1.25rem;
  background: ${props => props.$hasImage ? 'transparent' : `linear-gradient(135deg, ${theme.colors.primaryLight}, ${theme.colors.primary})`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  font-family: ${theme.fonts.secondary};
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(166, 113, 104, 0.25);
  border: 3px solid white;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }
`

export const StoreInfo = styled.div`
  flex: 1;
  min-width: 0;

  h2 {
    font-family: ${theme.fonts.secondary};
    font-size: 1.6rem;
    color: ${theme.colors.text};
    margin: 0 0 0.4rem;
    font-weight: 700;
  }

  p {
    color: ${theme.colors.gray};
    font-size: 0.9rem;
    margin: 0 0 0.75rem;
  }
`

export const StoreMetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
`

export const StoreMeta = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  color: ${theme.colors.gray};

  svg {
    color: ${theme.colors.primaryLight};
    font-size: 0.85rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.$cols === 2 ? '1fr 1fr' : '1fr'};
  gap: 1.25rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

export const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${theme.colors.text};
`

export const Input = styled.input`
  padding: 0.85rem 1rem;
  border: 2px solid #E5E7EB;
  border-radius: 0.75rem;
  font-size: 0.95rem;
  font-family: ${theme.fonts.primary};
  background: #FAFAFA;
  color: ${theme.colors.text};
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primaryLight};
    background: white;
    box-shadow: 0 0 0 3px rgba(205, 160, 155, 0.12);
  }

  &::placeholder { color: #9CA3AF; }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`

export const Textarea = styled.textarea`
  padding: 0.85rem 1rem;
  border: 2px solid #E5E7EB;
  border-radius: 0.75rem;
  font-size: 0.95rem;
  font-family: ${theme.fonts.primary};
  background: #FAFAFA;
  color: ${theme.colors.text};
  resize: vertical;
  min-height: 90px;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primaryLight};
    background: white;
    box-shadow: 0 0 0 3px rgba(205, 160, 155, 0.12);
  }

  &::placeholder { color: #9CA3AF; }
`

export const ImageUploadBox = styled.div`
  border: 2px dashed ${props => props.$hasImage ? theme.colors.primaryLight : '#E5E7EB'};
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  background: ${props => props.$hasImage ? 'rgba(205,160,155,0.04)' : '#FAFAFA'};
  transition: all 0.2s;
  flex-wrap: wrap;
`

export const ImageThumb = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 0.75rem;
  overflow: hidden;
  flex-shrink: 0;
  background: ${theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${theme.colors.primary};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ImageActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ImageLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  background: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  border-radius: 0.5rem;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover { background: ${theme.colors.primaryLight}; color: white; }

  input { display: none; }
`

export const ImageHint = styled.span`
  font-size: 0.75rem;
  color: ${theme.colors.gray};
`

export const ButtonRow = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  background: ${theme.colors.primary};
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: ${theme.fonts.primary};
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(166, 113, 104, 0.3);

  &:hover:not(:disabled) {
    background: ${theme.colors.primaryDark};
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(166, 113, 104, 0.4);
  }

  &:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

  @media (max-width: 480px) { justify-content: center; }
`

export const SecondaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  background: transparent;
  color: ${theme.colors.gray};
  border: 2px solid #E5E7EB;
  border-radius: 0.75rem;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: ${theme.fonts.primary};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: ${theme.colors.primaryLight};
    color: ${theme.colors.primary};
    transform: translateY(-1px);
  }

  @media (max-width: 480px) { justify-content: center; }
`

export const DangerButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.9rem;
  background: #FFEBEE;
  color: #C62828;
  border: none;
  border-radius: 0.6rem;
  font-size: 0.8rem;
  font-weight: 600;
  font-family: ${theme.fonts.primary};
  cursor: pointer;
  transition: all 0.2s;

  &:hover { background: #C62828; color: white; }
`

export const CouponsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

export const CouponCard = styled.div`
  border: 1.5px solid rgba(205, 160, 155, 0.2);
  border-radius: 1rem;
  padding: 1.25rem;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: box-shadow 0.2s, transform 0.2s;

  &:hover {
    box-shadow: 0 6px 20px rgba(166, 113, 104, 0.12);
    transform: translateY(-2px);
  }
`

export const CouponHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
`

export const CouponDiscount = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primaryLight}, ${theme.colors.primary});
  color: white;
  font-size: 1.4rem;
  font-weight: 700;
  font-family: ${theme.fonts.secondary};
  padding: 0.5rem 0.9rem;
  border-radius: 0.75rem;
  line-height: 1;
  white-space: nowrap;
`

export const CouponActions = styled.div`
  display: flex;
  gap: 0.4rem;
`

export const CouponEditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 0.5rem;
  border: none;
  background: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.85rem;

  &:hover { background: ${theme.colors.primaryLight}; color: white; }
`

export const CouponDeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 0.5rem;
  border: none;
  background: #FFEBEE;
  color: #C62828;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.85rem;

  &:hover { background: #C62828; color: white; }
`

export const CouponTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${theme.colors.text};
  margin: 0;
  line-height: 1.3;
`

export const CouponDescription = styled.p`
  font-size: 0.82rem;
  color: ${theme.colors.gray};
  margin: 0;
  line-height: 1.5;
`

export const CouponMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.78rem;
  color: ${theme.colors.gray};
  margin-top: auto;

  svg { color: ${theme.colors.primaryLight}; }
`

export const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  color: ${theme.colors.gray};

  svg {
    font-size: 3rem;
    color: ${theme.colors.secondary};
    margin-bottom: 1rem;
  }

  h3 {
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.text};
    margin: 0 0 0.5rem;
  }

  p {
    font-size: 0.9rem;
    margin: 0 0 1.5rem;
  }
`

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`

export const ModalBox = styled.div`
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 25px 50px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-height: 90vh;
  overflow-y: auto;
`

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-family: ${theme.fonts.secondary};
    font-size: 1.2rem;
    color: ${theme.colors.text};
    margin: 0;
  }
`

export const ModalCloseButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: ${theme.colors.lightGray};
  color: ${theme.colors.gray};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  font-size: 0.9rem;

  &:hover { background: #E0E0E0; color: ${theme.colors.text}; }
`

export const PendingBanner = styled.div`
  background: linear-gradient(135deg, #FFF8E1, #FFF3CD);
  border: 1.5px solid #FFD54F;
  border-radius: 1rem;
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  svg {
    color: #F57F17;
    font-size: 1.3rem;
    flex-shrink: 0;
    margin-top: 2px;
  }

  div {
    h4 {
      margin: 0 0 0.25rem;
      color: #E65100;
      font-size: 0.95rem;
      font-weight: 700;
    }
    p {
      margin: 0;
      color: #795548;
      font-size: 0.85rem;
      line-height: 1.5;
    }
  }
`
