import { motion } from 'framer-motion';
import { FaUsers, FaCalendarAlt, FaEnvelope, FaHandshake, FaRocket } from 'react-icons/fa';
import {
  PageWrapper, Hero, HeroBadge, HeroTitle, HeroSubtitle, HeroMeta, MetaItem,
  ContentWrapper, Section, SectionHeader, SectionNumber, SectionTitle, SectionText,
  Highlight, PageFooter,
  StatsGrid, StatCard, StatNumber, StatLabel,
  ValuesGrid, ValueCard, ValueIcon, ValueTitle, ValueText,
  TeamGrid, TeamCard, TeamAvatar, TeamName, TeamRole
} from '../Privacy/styles';

const stats = [
  { number: '5+', label: 'Lojas Parceiras' },
  { number: '100%', label: 'Gratuito para usuários' },
  { number: '2025', label: 'Ano de fundação' },
  { number: '24/7', label: 'Cupons disponíveis' },
];

const values = [
  { icon: '💎', title: 'Qualidade', text: 'Curadoria rigorosa de parceiros para garantir as melhores ofertas do segmento.' },
  { icon: '🔒', title: 'Segurança', text: 'Seus dados protegidos com as melhores práticas de segurança e conformidade com a LGPD.' },
  { icon: '🤝', title: 'Parceria', text: 'Construímos relações duradouras com lojas e consumidores baseadas em confiança.' },
  { icon: '✨', title: 'Inovação', text: 'Tecnologia moderna para conectar você às melhores oportunidades de desconto.' },
];

const team = [
  { name: 'João Victor', role: 'Fundador & Dev', initial: 'J' },
  { name: 'Equipe Innova', role: 'Desenvolvimento', initial: 'E' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const About = () => {
  return (
    <PageWrapper>
      <Hero>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <HeroBadge><FaUsers /> Nossa História</HeroBadge>
          <HeroTitle>Sobre a Innova Solutions</HeroTitle>
          <HeroSubtitle>
            Conectando consumidores às melhores ofertas de semijoias e acessórios do Brasil.
          </HeroSubtitle>
          <HeroMeta>
            <MetaItem><FaCalendarAlt /> Fundada em 2025</MetaItem>
            <MetaItem><FaHandshake /> Parceiros em todo o Brasil</MetaItem>
          </HeroMeta>
        </motion.div>
      </Hero>

      <ContentWrapper>
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <StatsGrid>
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
              >
                <StatCard>
                  <StatNumber>{s.number}</StatNumber>
                  <StatLabel>{s.label}</StatLabel>
                </StatCard>
              </motion.div>
            ))}
          </StatsGrid>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible">

          {/* Missão */}
          <motion.div variants={itemVariants}>
            <Section id="missao">
              <SectionHeader>
                <SectionNumber>🎯</SectionNumber>
                <SectionTitle>Nossa Missão</SectionTitle>
              </SectionHeader>
              <SectionText>
                A Innova Solutions nasceu com um propósito claro: democratizar o acesso a cupons de desconto de qualidade no segmento de semijoias e acessórios. Acreditamos que toda pessoa merece encontrar peças bonitas com o melhor custo-benefício, e que toda loja merece uma vitrine digital eficiente para alcançar novos clientes.
              </SectionText>
              <Highlight>
                Nossa plataforma é 100% gratuita para consumidores e oferece ferramentas poderosas para lojas parceiras gerenciarem seus cupons e alcançarem mais clientes.
              </Highlight>
            </Section>
          </motion.div>

          {/* História */}
          <motion.div variants={itemVariants}>
            <Section id="historia">
              <SectionHeader>
                <SectionNumber>📖</SectionNumber>
                <SectionTitle>Nossa História</SectionTitle>
              </SectionHeader>
              <SectionText>
                Fundada em 2025 como projeto de TCC do Instituto Técnico de Barueri (ITB), a Innova Solutions surgiu da identificação de uma lacuna no mercado: a falta de uma plataforma centralizada e especializada em cupons para o nicho de semijoias e acessórios. O que começou como um projeto acadêmico rapidamente evoluiu para uma solução real, conectando lojas e consumidores de forma simples e eficiente.
              </SectionText>
            </Section>
          </motion.div>

          {/* Valores */}
          <motion.div variants={itemVariants}>
            <Section id="valores">
              <SectionHeader>
                <SectionNumber>💡</SectionNumber>
                <SectionTitle>Nossos Valores</SectionTitle>
              </SectionHeader>
              <SectionText>
                Tudo o que fazemos é guiado por princípios que colocam pessoas em primeiro lugar.
              </SectionText>
              <ValuesGrid>
                {values.map((v, i) => (
                  <ValueCard key={i}>
                    <ValueIcon>{v.icon}</ValueIcon>
                    <ValueTitle>{v.title}</ValueTitle>
                    <ValueText>{v.text}</ValueText>
                  </ValueCard>
                ))}
              </ValuesGrid>
            </Section>
          </motion.div>

          {/* Para parceiros */}
          <motion.div variants={itemVariants}>
            <Section id="parceiros">
              <SectionHeader>
                <SectionNumber><FaRocket style={{ fontSize: '0.9rem' }} /></SectionNumber>
                <SectionTitle>Para Lojas Parceiras</SectionTitle>
              </SectionHeader>
              <SectionText>
                Se você tem uma loja de semijoias ou acessórios e quer alcançar mais clientes, a Innova Solutions é o lugar certo. Cadastre sua loja, crie cupons atrativos e apareça para milhares de consumidores que buscam as melhores ofertas do segmento.
              </SectionText>
              <Highlight>
                O cadastro é simples e gratuito. Nossa equipe analisa cada solicitação para garantir a qualidade da plataforma para todos os usuários.
              </Highlight>
            </Section>
          </motion.div>

          {/* Equipe */}
          <motion.div variants={itemVariants}>
            <Section id="equipe">
              <SectionHeader>
                <SectionNumber>👥</SectionNumber>
                <SectionTitle>Nossa Equipe</SectionTitle>
              </SectionHeader>
              <SectionText>
                Somos um time apaixonado por tecnologia e inovação, comprometido em entregar a melhor experiência para usuários e parceiros.
              </SectionText>
              <TeamGrid>
                {team.map((member, i) => (
                  <TeamCard key={i}>
                    <TeamAvatar>{member.initial}</TeamAvatar>
                    <TeamName>{member.name}</TeamName>
                    <TeamRole>{member.role}</TeamRole>
                  </TeamCard>
                ))}
              </TeamGrid>
            </Section>
          </motion.div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <PageFooter>
            <p>Quer saber mais ou se tornar um parceiro?</p>
            <p>
              <a href="mailto:contato@innovasolutions.com.br">
                <FaEnvelope style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                contato@innovasolutions.com.br
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

export default About;
