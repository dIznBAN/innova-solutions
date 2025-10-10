import CouponsSection from '../../components/CouponsSection'
import { Container, HeroSection, HeroTitle, HeroSubtitle, HeroButton } from './styles'

function Home(){
    return (
        <Container>
            <HeroSection>
                <HeroTitle>Encontre cupons exclusivos para suas semijoias favoritas!</HeroTitle>
                <HeroSubtitle>Promoções diárias das melhores lojas do segmento</HeroSubtitle>
                <HeroButton href="/cupons">Ver Todos os Cupons</HeroButton>
            </HeroSection>
            <CouponsSection />
        </Container>
    )
}

export default Home
