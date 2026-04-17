import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { FaUser, FaSignOutAlt, FaTicketAlt, FaUserShield, FaStore } from 'react-icons/fa'
import { useClickOutside } from '../../hooks/useClickOutside'
import { useAuth } from '../../hooks/useAuth.jsx'
import { Container, ProfileIcon, Dropdown, DropdownItem, UserInfo, UserName, UserStatus } from './styles'

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isAuthenticated, user, dbUser, userStores, logout } = useAuth()
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
    toast.success('Conta desconectada com sucesso!')
    navigate('/')
  }

  return (
    <Container ref={dropdownRef}>
      {isAuthenticated && (
        <UserInfo>
          <UserName>{user?.displayName}</UserName>
          <UserStatus>Conectado</UserStatus>
        </UserInfo>
      )}
      <ProfileIcon onClick={() => setIsOpen(!isOpen)} title={isAuthenticated ? user?.displayName : 'Menu do usuário'} $hasImage={!!user?.photoURL}>
        {isAuthenticated && user?.photoURL ? (
          <img src={user.photoURL} alt={user.displayName} />
        ) : (
          <FaUser />
        )}
      </ProfileIcon>
      {isOpen && !isAuthenticated && (
        <Dropdown>
          <DropdownItem onClick={handleLogin}>Entrar</DropdownItem>
          <DropdownItem onClick={handleRegister}>Criar conta</DropdownItem>
        </Dropdown>
      )}
      {isOpen && isAuthenticated && (
        <Dropdown>
          {dbUser?.role === 'ADMIN' && (
            <DropdownItem onClick={() => { setIsOpen(false); navigate('/admin'); }}>
              <FaUserShield style={{ marginRight: '8px' }} />
              Painel Administrativo
            </DropdownItem>
          )}
          <DropdownItem onClick={() => { setIsOpen(false); navigate('/perfil'); }}>Meu Perfil</DropdownItem>
          {userStores?.length > 0 && (
            <DropdownItem onClick={() => { setIsOpen(false); navigate('/minhas-lojas'); }}>
              <FaStore style={{ marginRight: '8px' }} />
              Minhas Lojas
            </DropdownItem>
          )}
          <DropdownItem onClick={() => { setIsOpen(false); navigate('/meus-cupons'); }}>
            <FaTicketAlt style={{ marginRight: '8px' }} />
            Meus Cupons
          </DropdownItem>
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