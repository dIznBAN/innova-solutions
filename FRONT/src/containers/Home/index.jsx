import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import CouponsSection from '../../components/CouponsSection'
import { 
  Container, 
  HeroSection, 
  HeroContent,
  HeroTitle, 
  HeroSubtitle, 
  HeroButton,
  ParticlesContainer,
  Particle
} from './styles'

function Home(){
    const particles = Array.from({ length: 20 }, (_, i) => i);

    return (
        <Container>
            <HeroSection>
                <ParticlesContainer>
                    {particles.map((particle) => (
                        <Particle
                            key={particle}
                            as={motion.div}
                            initial={{ 
                                opacity: 0, 
                                y: 100,
                                x: Math.random() * 100 - 50
                            }}
                            animate={{ 
                                opacity: [0, 1, 0], 
                                y: -100,
                                x: Math.random() * 200 - 100
                            }}
                            transition={{
                                duration: Math.random() * 3 + 2,
                                repeat: Infinity,
                                delay: Math.random() * 2
                            }}
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`
                            }}
                        />
                    ))}
                </ParticlesContainer>
                
                <HeroContent
                    as={motion.div}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <HeroTitle
                        as={motion.h1}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Encontre cupons exclusivos para suas semijoias favoritas!
                    </HeroTitle>
                    
                    <HeroSubtitle
                        as={motion.p}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Promoções diárias das melhores lojas do segmento
                    </HeroSubtitle>
                    
                    <HeroButton
                        as={motion.a}
                        href="/cupons"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 10px 30px rgba(205, 160, 155, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Sparkles size={20} />
                        Ver Todos os Cupons
                    </HeroButton>
                </HeroContent>
            </HeroSection>
            
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <CouponsSection />
            </motion.div>
        </Container>
    )
}

export default Home
