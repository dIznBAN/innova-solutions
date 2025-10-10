import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { Container, Content, Row, SectionTitle, ContactItem, ContactIcon, Link, Copyright } from './styles'

const Footer = () => {
  return (
    <Container>
      <Content>
        <Row>
          <SectionTitle>Contato</SectionTitle>
          <ContactItem href="tel:+5511999999999">
            <ContactIcon>
              <FaPhone />
            </ContactIcon>
            (11) 99999-9999
          </ContactItem>
        </Row>
        
        <Row>
          <SectionTitle>Links Úteis</SectionTitle>
          <Link href="#">Termos de Uso</Link>
          <Link href="#">Política de Privacidade</Link>
          <Link href="#">Sobre</Link>
          <Link href="#">Central de Ajuda</Link>
        </Row>
      </Content>
      <Copyright>© 2025 Innova Solutions - Todos os direitos reservados</Copyright>
    </Container>
  )
}

export default Footer