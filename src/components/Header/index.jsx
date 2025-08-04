import { Link, useLocation } from 'react-router-dom'
import ProfileDropdown from '../ProfileDropdown'
import { Container, Logo, CenterNav, Nav, NavItem, ProfileSection } from './styles'

const Header = () => {
  const location = useLocation()

  return (
    <Container>
      <Logo as={Link} to="/">Innova Solutions</Logo>
      
      <CenterNav>
        <Nav>
          <NavItem 
            as={Link} 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
          >
            Início
          </NavItem>
          <NavItem 
            as={Link} 
            to="/cupons"
            className={location.pathname === '/cupons' ? 'active' : ''}
          >
            Cupons
          </NavItem>
        </Nav>
      </CenterNav>
      
      <ProfileSection>
        <ProfileDropdown />
      </ProfileSection>
    </Container>
  )
}

export default Header