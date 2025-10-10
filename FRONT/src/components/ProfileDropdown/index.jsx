import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { useClickOutside } from '../../hooks/useClickOutside'
import { Container, ProfileIcon, Dropdown, DropdownItem } from './styles'

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Estado do usuário
  const navigate = useNavigate()
  const dropdownRef = useClickOutside(() => setIsOpen(false))

  const handleProfileClick = () => {
    if (isLoggedIn) {
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

  return (
    <Container ref={dropdownRef}>
      <ProfileIcon onClick={handleProfileClick}>
        <FaUser />
      </ProfileIcon>
      {isOpen && !isLoggedIn && (
        <Dropdown>
          <DropdownItem onClick={handleLogin}>Entrar</DropdownItem>
          <DropdownItem onClick={handleRegister}>Criar conta</DropdownItem>
        </Dropdown>
      )}
    </Container>
  )
}

export default ProfileDropdown