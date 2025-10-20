import { motion } from 'framer-motion';
import { Phone, Mail, FileText, Shield, Info, HelpCircle } from 'lucide-react';
import { 
  Container, 
  Content, 
  FooterGrid,
  Column,
  SectionTitle, 
  ContactItem, 
  ContactIcon, 
  Link, 
  Copyright,
  Divider
} from './styles'

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <Container
      as={motion.footer}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Content>
        <FooterGrid>
          <Column as={motion.div} variants={itemVariants}>
            <SectionTitle>Contato</SectionTitle>
            <ContactItem href="tel:+5511999999999">
              <ContactIcon>
                <Phone size={16} />
              </ContactIcon>
              (11) 99999-9999
            </ContactItem>
            <ContactItem href="mailto:contato@innovasolutions.com">
              <ContactIcon>
                <Mail size={16} />
              </ContactIcon>
              contato@innovasolutions.com
            </ContactItem>
          </Column>
          
          <Column as={motion.div} variants={itemVariants}>
            <SectionTitle>Links Úteis</SectionTitle>
            <Link href="#">
              <FileText size={14} />
              Termos de Uso
            </Link>
            <Link href="#">
              <Shield size={14} />
              Política de Privacidade
            </Link>
            <Link href="#">
              <Info size={14} />
              Sobre Nós
            </Link>
            <Link href="#">
              <HelpCircle size={14} />
              Central de Ajuda
            </Link>
          </Column>
        </FooterGrid>
        
        <Divider as={motion.div} variants={itemVariants} />
        
        <Copyright as={motion.p} variants={itemVariants}>
          © 2025 Innova Solutions - Todos os direitos reservados
        </Copyright>
      </Content>
    </Container>
  )
}

export default Footer