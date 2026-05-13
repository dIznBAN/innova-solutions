import { motion } from 'framer-motion';
import { FaShieldAlt, FaCalendarAlt, FaFileAlt, FaEnvelope } from 'react-icons/fa';
import {
  PageWrapper, Hero, HeroBadge, HeroTitle, HeroSubtitle, HeroMeta, MetaItem,
  ContentWrapper, TableOfContents, TocTitle, TocList, TocItem,
  Section, SectionHeader, SectionNumber, SectionTitle, SectionText,
  Highlight, Footer
} from './styles';

const sections = [
  {
    id: 'aceitacao',
    title: 'Aceitação dos Termos',
    text: 'Ao acessar e utilizar a plataforma Innova Solutions, você declara ter lido, compreendido e concordado integralmente com estes Termos de Uso. Caso não concorde com qualquer disposição aqui prevista, solicitamos que não utilize nossos serviços.',
    highlight: 'O uso contínuo da plataforma após alterações nos termos implica na aceitação automática das novas condições.'
  },
  {
    id: 'uso',
    title: 'Uso da Plataforma',
    text: 'A Innova Solutions é uma plataforma dedicada a conectar consumidores com cupons de desconto de lojas parceiras do segmento de semijoias e acessórios. Você se compromete a utilizar o serviço exclusivamente para fins lícitos, éticos e em conformidade com a legislação brasileira vigente.',
    highlight: 'É vedado o uso da plataforma para fins fraudulentos, spam, ou qualquer atividade que prejudique outros usuários ou parceiros.'
  },
  {
    id: 'cadastro',
    title: 'Cadastro e Conta',
    text: 'Para acessar recursos completos da plataforma, é necessário criar uma conta fornecendo informações verdadeiras, precisas e atualizadas. Você é o único responsável pela confidencialidade de suas credenciais de acesso e por todas as atividades realizadas em sua conta.',
    highlight: 'Em caso de suspeita de acesso não autorizado, notifique-nos imediatamente através dos nossos canais de suporte.'
  },
  {
    id: 'cupons',
    title: 'Cupons e Descontos',
    text: 'Os cupons disponibilizados na plataforma estão sujeitos à disponibilidade, validade e condições específicas estabelecidas por cada loja parceira. A Innova Solutions atua como intermediária e não se responsabiliza por alterações, cancelamentos ou indisponibilidade de cupons por parte dos parceiros.',
  },
  {
    id: 'parceiros',
    title: 'Cadastro de Parceiros',
    text: 'Empresas interessadas em se tornar parceiras devem submeter solicitação através do formulário de cadastro. A aprovação está sujeita à análise da equipe Innova Solutions, que se reserva o direito de aceitar ou recusar candidaturas sem necessidade de justificativa.',
    highlight: 'Parceiros aprovados devem manter suas informações e cupons atualizados, sendo responsáveis pela veracidade dos dados cadastrados.'
  },
  {
    id: 'propriedade',
    title: 'Propriedade Intelectual',
    text: 'Todo o conteúdo presente na plataforma — incluindo textos, imagens, logotipos, design e código-fonte — é protegido por direitos autorais e pertence à Innova Solutions ou a seus respectivos parceiros. É proibida a reprodução, distribuição ou uso comercial sem autorização prévia e expressa.',
  },
  {
    id: 'privacidade',
    title: 'Privacidade e Dados',
    text: 'A coleta e o tratamento de dados pessoais são realizados em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018). Utilizamos seus dados exclusivamente para melhorar sua experiência na plataforma e para comunicações relacionadas ao serviço.',
    highlight: 'Você pode solicitar a exclusão dos seus dados a qualquer momento através das configurações da sua conta ou pelo nosso suporte.'
  },
  {
    id: 'responsabilidade',
    title: 'Limitação de Responsabilidade',
    text: 'A Innova Solutions não se responsabiliza por danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso ou da impossibilidade de uso da plataforma, incluindo falhas técnicas, interrupções de serviço ou ações de terceiros.',
  },
  {
    id: 'alteracoes',
    title: 'Alterações nos Termos',
    text: 'Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entram em vigor imediatamente após sua publicação na plataforma. Recomendamos a revisão periódica deste documento para manter-se atualizado.',
  },
  {
    id: 'contato',
    title: 'Contato',
    text: 'Para dúvidas, sugestões ou solicitações relacionadas a estes Termos de Uso, entre em contato com nossa equipe.',
    highlight: '📧 contato@innovasolutions.com.br'
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

const TermsOfUse = () => {
  return (
    <PageWrapper>
      <Hero>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <HeroBadge><FaShieldAlt /> Documento Legal</HeroBadge>
          <HeroTitle>Termos de Uso</HeroTitle>
          <HeroSubtitle>
            Leia com atenção as condições que regem o uso da plataforma Innova Solutions.
          </HeroSubtitle>
          <HeroMeta>
            <MetaItem><FaCalendarAlt /> Última atualização: Maio de 2026</MetaItem>
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
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
          <Footer>
            <p>Dúvidas sobre nossos termos? Entre em contato.</p>
            <p>
              <a href="mailto:contato@innovasolutions.com.br">
                <FaEnvelope style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                contato@innovasolutions.com.br
              </a>
            </p>
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', opacity: 0.6 }}>
              © 2026 Innova Solutions. Todos os direitos reservados.
            </p>
          </Footer>
        </motion.div>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default TermsOfUse;
