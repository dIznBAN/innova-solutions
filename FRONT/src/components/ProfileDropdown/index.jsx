import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUser, FaSignOutAlt } from 'react-icons/fa'
import { useClickOutside } from '../../hooks/useClickOutside'
import { useAuth } from '../../hooks/useAuth.jsx'
import { Container, ProfileIcon, Dropdown, DropdownItem } from './styles'

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()
  const navigate = useNavigate()
  const dropdownRef = useClickOutside(() => setIsOpen(false))

  const handleProfileClick = () => {
    if (isAuthenticated) {
      navigate('/perfil')
    } else {
      setIsOpen(!isOpen)
    }
  }

  const handleLogin = () => {
    setIsOpen(false)
    navigate('/login')
  }

  const handleRegister = () => {
    setIsOpen(false)
    navigate('/registro')
  }

  const handleLogout = () => {
    logout()
    setIsOpen(false)
    navigate('/')
  }

  return (
    <Container ref={dropdownRef}>
      <ProfileIcon onClick={() => setIsOpen(!isOpen)} title={isAuthenticated ? user?.name : 'Menu do usuário'}>
        <FaUser />
      </ProfileIcon>
      {isOpen && !isAuthenticated && (
        <Dropdown>
          <DropdownItem onClick={handleLogin}>Entrar</DropdownItem>
          <DropdownItem onClick={handleRegister}>Criar conta</DropdownItem>
        </Dropdown>
      )}
      {isOpen && isAuthenticated && (
        <Dropdown>
          <DropdownItem onClick={() => { setIsOpen(false); navigate('/perfil'); }}>Meu Perfil</DropdownItem>
          <DropdownItem onClick={handleLogout}>
            <FaSignOutAlt style={{ marginRight: '8px' }} />
            Sair
          </DropdownItem>
        </Dropdown>
      )}
    </Container>
  )
}

export default ProfileDropdown