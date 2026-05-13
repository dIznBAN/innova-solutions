import { motion } from 'framer-motion';
import { FaShieldAlt, FaCalendarAlt, FaFileAlt, FaEnvelope } from 'react-icons/fa';
import {
  PageWrapper, Hero, HeroBadge, HeroTitle, HeroSubtitle, HeroMeta, MetaItem,
  ContentWrapper, TableOfContents, TocTitle, TocList, TocItem,
  Section, SectionHeader, SectionNumber, SectionTitle, SectionText,
  Highlight, PageFooter
} from './styles';

const sections = [
  {
    id: 'introducao',
    title: 'Introdução',
    text: 'A Innova Solutions valoriza e respeita a privacidade de seus usuários. Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos suas informações pessoais ao utilizar nossa plataforma, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).',
    highlight: 'Ao utilizar nossa plataforma, você concorda com as práticas descritas nesta política.'
  },
  {
    id: 'coleta',
    title: 'Dados que Coletamos',
    text: 'Coletamos informações que você nos fornece diretamente ao criar uma conta (nome, e-mail, foto de perfil), ao cadastrar uma loja parceira (dados empresariais, CNPJ, telefone) e ao interagir com cupons. Também coletamos automaticamente dados de uso, como páginas visitadas, cliques e informações do dispositivo.',
    highlight: 'Nunca coletamos dados de pagamento ou informações financeiras sensíveis diretamente em nossa plataforma.'
  },
  {
    id: 'uso',
    title: 'Como Usamos seus Dados',
    text: 'Utilizamos suas informações para: fornecer e melhorar nossos serviços; personalizar sua experiência na plataforma; enviar comunicações relevantes sobre cupons e promoções; processar cadastros de parceiros; garantir a segurança da plataforma; e cumprir obrigações legais.',
  },
  {
    id: 'compartilhamento',
    title: 'Compartilhamento de Dados',
    text: 'Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins comerciais. Podemos compartilhar dados com prestadores de serviços essenciais (como Firebase/Google para autenticação) que atuam em nosso nome e estão sujeitos a obrigações de confidencialidade.',
    highlight: 'Seus dados nunca são vendidos a anunciantes ou terceiros para fins de marketing.'
  },
  {
    id: 'armazenamento',
    title: 'Armazenamento e Segurança',
    text: 'Seus dados são armazenados em servidores seguros com criptografia em trânsito (HTTPS) e em repouso. Utilizamos o Firebase Authentication para gerenciar credenciais de acesso, garantindo que senhas nunca sejam armazenadas em texto simples em nossos sistemas.',
  },
  {
    id: 'cookies',
    title: 'Cookies e Tecnologias Similares',
    text: 'Utilizamos cookies e tecnologias similares para manter sua sessão ativa, lembrar suas preferências e analisar o uso da plataforma. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do serviço.',
  },
  {
    id: 'direitos',
    title: 'Seus Direitos (LGPD)',
    text: 'Conforme a LGPD, você tem direito a: confirmar a existência de tratamento dos seus dados; acessar seus dados; corrigir dados incompletos ou desatualizados; solicitar a anonimização, bloqueio ou eliminação de dados desnecessários; revogar o consentimento a qualquer momento; e solicitar a portabilidade dos dados.',
    highlight: 'Para exercer qualquer um desses direitos, entre em contato conosco pelo e-mail privacidade@innovasolutions.com.br'
  },
  {
    id: 'retencao',
    title: 'Retenção de Dados',
    text: 'Mantemos seus dados pelo tempo necessário para fornecer nossos serviços ou conforme exigido por lei. Ao excluir sua conta, seus dados pessoais são removidos de nossos sistemas em até 30 dias, exceto quando a retenção for obrigatória por legislação aplicável.',
  },
  {
    id: 'menores',
    title: 'Menores de Idade',
    text: 'Nossa plataforma não é direcionada a menores de 18 anos. Não coletamos intencionalmente dados de menores. Caso identifiquemos que coletamos dados de um menor sem consentimento parental, tomaremos medidas para remover essas informações imediatamente.',
  },
  {
    id: 'alteracoes',
    title: 'Alterações nesta Política',
    text: 'Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças significativas por e-mail ou através de aviso na plataforma. Recomendamos revisar esta política regularmente.',
  },
  {
    id: 'contato',
    title: 'Contato e DPO',
    text: 'Para dúvidas, solicitações ou exercício dos seus direitos relacionados à privacidade de dados, entre em contato com nosso encarregado de proteção de dados (DPO).',
    highlight: '📧 privacidade@innovasolutions.com.br'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Privacy = () => {
  return (
    <PageWrapper>
      <Hero>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <HeroBadge><FaShieldAlt /> Privacidade & LGPD</HeroBadge>
          <HeroTitle>Política de Privacidade</HeroTitle>
          <HeroSubtitle>
            Transparência total sobre como coletamos, usamos e protegemos seus dados pessoais.
          </HeroSubtitle>
          <HeroMeta>
            <MetaItem><FaCalendarAlt /> Última atualização: Janeiro de 2025</MetaItem>
            <MetaItem><FaFileAlt /> {sections.length} seções</MetaItem>
          </HeroMeta>
        </motion.div>
      </Hero>

      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TableOfContents>
            <TocTitle>Índice</TocTitle>
            <TocList>
              {sections.map((s, i) => (
                <TocItem key={s.id}>
                  <a href={`#${s.id}`}>{i + 1}. {s.title}</a>
                </TocItem>
              ))}
            </TocList>
          </TableOfContents>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {sections.map((s, i) => (
            <motion.div key={s.id} variants={itemVariants}>
              <Section id={s.id}>
                <SectionHeader>
                  <SectionNumber>{i + 1}</SectionNumber>
                  <SectionTitle>{s.title}</SectionTitle>
                </SectionHeader>
                <SectionText>{s.text}</SectionText>
                {s.highlight && <Highlight>{s.highlight}</Highlight>}
              </Section>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <PageFooter>
            <p>Dúvidas sobre privacidade? Fale com nosso DPO.</p>
            <p>
              <a href="mailto:privacidade@innovasolutions.com.br">
                <FaEnvelope style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                privacidade@innovasolutions.com.br
              </a>
            </p>
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', opacity: 0.6 }}>
              © 2025 Innova Solutions. Todos os direitos reservados.
            </p>
          </PageFooter>
        </motion.div>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Privacy;
