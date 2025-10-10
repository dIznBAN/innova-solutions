import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from '../containers/Home'
import AuthPage from '../pages/Auth'
import ForgotPasswordPage from '../pages/ForgotPassword'
import CouponsPage from '../pages/Coupons'
import PartnerRegister from '../pages/PartnerRegister'
import Admin from '../pages/Admin'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container } from './styles'

const ProfilePage = () => (
  <div style={{ padding: '6rem 2rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
    <h1>Perfil do Usuário</h1>
    <p>Em desenvolvimento...</p>
  </div>
)

// Componente para controlar quando mostrar Header e Footer
const Layout = ({ children }) => {
  const location = useLocation()
  const hideHeaderFooter = ['/login', '/registro', '/esqueceu-senha', '/cadastro-parceiro'].includes(location.pathname)
  
  return (
    <Container>
      {!hideHeaderFooter && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </Container>
  )
}

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cupons" element={<CouponsPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/registro" element={<AuthPage />} />
          <Route path="/esqueceu-senha" element={<ForgotPasswordPage />} />
          <Route path="/perfil" element={<ProfilePage />} />
          <Route path="/cadastro-parceiro" element={<PartnerRegister />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default AppRouter