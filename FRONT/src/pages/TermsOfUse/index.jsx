import { motion } from 'framer-motion';
import { Container, Content, Title, Section, SectionTitle, Text } from './styles';

const TermsOfUse = () => {
  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Content>
        <Title>Termos de Uso</Title>
        
        <Section>
          <SectionTitle>1. Aceitação dos Termos</SectionTitle>
          <Text>
            Ao acessar e usar a plataforma Innova Solutions, você concorda com estes Termos de Uso. 
            Se não concordar, não utilize nossos serviços.
          </Text>
        </Section>

        <Section>
          <SectionTitle>2. Uso da Plataforma</SectionTitle>
          <Text>
            A plataforma destina-se a conectar usuários com cupons de desconto de parceiros. 
            Você se compromete a usar o serviço de forma legal e ética.
          </Text>
        </Section>

        <Section>
          <SectionTitle>3. Cadastro e Conta</SectionTitle>
          <Text>
            Para acessar recursos completos, é necessário criar uma conta com informações verdadeiras. 
            Você é responsável pela segurança de suas credenciais.
          </Text>
        </Section>

        <Section>
          <SectionTitle>4. Cupons e Descontos</SectionTitle>
          <Text>
            Os cupons estão sujeitos a disponibilidade e condições específicas de cada parceiro. 
            A Innova Solutions não se responsabiliza por alterações ou cancelamentos.
          </Text>
        </Section>

        <Section>
          <SectionTitle>5. Propriedade Intelectual</SectionTitle>
          <Text>
            Todo conteúdo da plataforma é protegido por direitos autorais e pertence à Innova Solutions 
            ou seus parceiros.
          </Text>
        </Section>

        <Section>
          <SectionTitle>6. Limitação de Responsabilidade</SectionTitle>
          <Text>
            A Innova Solutions não se responsabiliza por danos indiretos decorrentes do uso da plataforma.
          </Text>
        </Section>

        <Section>
          <SectionTitle>7. Alterações nos Termos</SectionTitle>
          <Text>
            Reservamo-nos o direito de modificar estes termos a qualquer momento. 
            Alterações entram em vigor imediatamente após publicação.
          </Text>
        </Section>

        <Section>
          <SectionTitle>8. Contato</SectionTitle>
          <Text>
            Para dúvidas sobre estes termos, entre em contato através de contato@innovasolutions.com
          </Text>
        </Section>
      </Content>
    </Container>
  );
};

export default TermsOfUse;
