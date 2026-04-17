import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from '../containers/Home'
import AuthPage from '../pages/Auth'
import ForgotPasswordPage from '../pages/ForgotPassword'
import CouponsPage from '../pages/Coupons'
import MyCouponsPage from '../pages/MyCoupons'
import PartnerRegister from '../pages/PartnerRegister'
import Admin from '../pages/Admin'
import ProfilePage from '../pages/Profile'
import MyStore from '../pages/MyStore'
import MyStores from '../pages/MyStores'
import StoresPage from '../pages/Stores'
import TermsOfUse from '../pages/TermsOfUse'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProtectedRoute from '../components/ProtectedRoute'
import AdminRoute from '../components/AdminRoute'
import { Container } from './styles'

// Componente para controlar quando mostrar Header e Footer
const Layout = ({ children }) => {
  const location = useLocation()
  const hideHeaderFooter = ['/login', '/registro', '/esqueceu-senha', '/cadastro-parceiro'].includes(location.pathname)
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  
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
          <Route path="/meus-cupons" element={<ProtectedRoute><MyCouponsPage /></ProtectedRoute>} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/registro" element={<AuthPage />} />
          <Route path="/esqueceu-senha" element={<ForgotPasswordPage />} />
          <Route path="/perfil" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="/cadastro-parceiro" element={<ProtectedRoute><PartnerRegister /></ProtectedRoute>} />
          <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} />
          <Route path="/lojas" element={<StoresPage />} />
          <Route path="/termos-de-uso" element={<TermsOfUse />} />
          <Route path="/minhas-lojas" element={<ProtectedRoute><MyStores /></ProtectedRoute>} />
          <Route path="/minha-loja/:id" element={<ProtectedRoute><MyStore /></ProtectedRoute>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default AppRouter