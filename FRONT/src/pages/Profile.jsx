import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/api';
import styled from 'styled-components';

const Container = styled.div`
  padding: 6rem 2rem 2rem;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f8f9fa;
`;

const ProfileCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 600px;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e9ecef;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  flex-shrink: 0;
`;

const ProfileInfo = styled.div`
  flex: 1;

  h1 {
    margin: 0 0 0.5rem 0;
    color: #333;
    font-size: 1.8rem;
  }

  p {
    margin: 0 0 0.25rem 0;
    color: #666;
    font-size: 1.1rem;
  }

  small {
    color: #999;
    font-size: 0.9rem;
  }
`;

const EditButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s;

  &:hover {
    background: #0056b3;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: #333;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const SaveButton = styled.button`
  background: #28a745;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background: #218838;
  }

  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
  }
`;

const CancelButton = styled.button`
  background: #6c757d;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background: #5a6268;
  }
`;

const ErrorMessage = styled.div`
  background: #f8d7da;
  color: #721c24;
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid #f5c6cb;
  margin-bottom: 1rem;
`;

const SuccessMessage = styled.div`
  background: #d4edda;
  color: #155724;
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid #c3e6cb;
  margin-bottom: 1rem;
`;

const DangerZone = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  border: 1px solid #dc3545;
  border-radius: 8px;
  background-color: #f8f9fa;

  h3 {
    color: #dc3545;
    margin: 0 0 1rem 0;
    font-size: 1.2rem;
  }

  p {
    color: #666;
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }
`;

const DeleteButton = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s;

  &:hover {
    background: #c82333;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  h3 {
    color: #dc3545;
    margin: 0 0 1rem 0;
  }

  p {
    margin-bottom: 1.5rem;
    color: #666;
  }
`;

const ProfilePage = () => {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');
  const [deleteLoading, setDeleteLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    passwordHash: ''
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        passwordHash: ''
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
    setMessage({ type: '', text: '' });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({
      name: user.name || '',
      email: user.email || '',
      passwordHash: ''
    });
    setMessage({ type: '', text: '' });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const updateData = {
        name: formData.name,
        email: formData.email
      };

      if (formData.passwordHash.trim()) {
        updateData.passwordHash = formData.passwordHash;
      } else {
        updateData.passwordHash = user.passwordHash;
      }

      const updatedUser = await apiService.updateProfile(user.id, updateData);
      
      login(updatedUser);
      
      setIsEditing(false);
      setMessage({ type: 'success', text: 'Perfil atualizado com sucesso!' });
      
      setTimeout(() => {
        setMessage({ type: '', text: '' });
      }, 3000);
      
    } catch (error) {
      setMessage({ type: 'error', text: error.message || 'Erro ao atualizar perfil' });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (!deletePassword.trim()) {
      setMessage({ type: 'error', text: 'Digite sua senha para confirmar' });
      return;
    }

    setDeleteLoading(true);
    setMessage({ type: '', text: '' });

    try {
      await apiService.deleteAccount(user.id, deletePassword);
      logout();
      navigate('/auth');
    } catch (error) {
      setMessage({ type: 'error', text: error.message || 'Erro ao excluir conta' });
      setShowDeleteModal(false);
      setDeletePassword('');
    } finally {
      setDeleteLoading(false);
    }
  };

  const openDeleteModal = () => {
    setShowDeleteModal(true);
    setMessage({ type: '', text: '' });
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setDeletePassword('');
  };

  if (!user) {
    return (
      <Container>
        <ProfileCard>
          <p>Carregando...</p>
        </ProfileCard>
      </Container>
    );
  }

  return (
    <Container>
      <ProfileCard>
        <ProfileHeader>
          <ProfileAvatar>
            {user.name?.charAt(0).toUpperCase() || 'U'}
          </ProfileAvatar>
          <ProfileInfo>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <small>Membro desde: {new Date(user.created_at).toLocaleDateString('pt-BR')}</small>
          </ProfileInfo>
          {!isEditing && (
            <EditButton onClick={handleEdit}>
              Editar Perfil
            </EditButton>
          )}
        </ProfileHeader>

        {message.text && (
          message.type === 'success' ? (
            <SuccessMessage>{message.text}</SuccessMessage>
          ) : (
            <ErrorMessage>{message.text}</ErrorMessage>
          )
        )}

        {isEditing ? (
          <Form onSubmit={handleSave}>
            <FormGroup>
              <Label htmlFor="name">Nome</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="passwordHash">Nova Senha (opcional)</Label>
              <Input
                type="password"
                id="passwordHash"
                name="passwordHash"
                value={formData.passwordHash}
                onChange={handleInputChange}
                placeholder="Deixe em branco para manter a senha atual"
              />
            </FormGroup>

            <ButtonGroup>
              <SaveButton type="submit" disabled={loading}>
                {loading ? 'Salvando...' : 'Salvar'}
              </SaveButton>
              <CancelButton type="button" onClick={handleCancel}>
                Cancelar
              </CancelButton>
            </ButtonGroup>
          </Form>
        ) : (
          <>
            <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <h3>Informações da Conta</h3>
              <p><strong>Nome:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Última atualização:</strong> {user.updated_at ? new Date(user.updated_at).toLocaleDateString('pt-BR') : 'Nunca'}</p>
            </div>

            <DangerZone>
              <h3>Zona de Perigo</h3>
              <p>Esta ação é irreversível. Todos os seus dados serão permanentemente excluídos.</p>
              <DeleteButton onClick={openDeleteModal}>
                Excluir Conta
              </DeleteButton>
            </DangerZone>
          </>
        )}
      </ProfileCard>

      {showDeleteModal && (
        <Modal>
          <ModalContent>
            <h3>Confirmar Exclusão da Conta</h3>
            <p>Digite sua senha para confirmar a exclusão permanente da sua conta:</p>
            
            <FormGroup>
              <Input
                type="password"
                placeholder="Digite sua senha"
                value={deletePassword}
                onChange={(e) => setDeletePassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleDeleteAccount()}
              />
            </FormGroup>

            <ButtonGroup>
              <DeleteButton onClick={handleDeleteAccount} disabled={deleteLoading}>
                {deleteLoading ? 'Excluindo...' : 'Confirmar Exclusão'}
              </DeleteButton>
              <CancelButton onClick={closeDeleteModal}>
                Cancelar
              </CancelButton>
            </ButtonGroup>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default ProfilePage;