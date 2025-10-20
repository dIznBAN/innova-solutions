import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/api';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Edit3, Save, X, Trash2, User, Calendar, Clock } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import styled from 'styled-components';

const Container = styled.div`
  padding: 6rem 1rem 2rem;
  min-height: 100vh;
  background: #FAFAFA;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

  @media (min-width: 768px) {
    padding: 6rem 2rem 2rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProfileCard = styled(motion.div)`
  background: #FFFFFF;
  border-radius: 1.5rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  border: 1px solid rgba(205, 160, 155, 0.1);

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(205, 160, 155, 0.15);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
  }
`;

const ProfileAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #CDA09B 0%, #B8918C 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  flex-shrink: 0;
  box-shadow: 0 8px 25px rgba(205, 160, 155, 0.3);
  border: 4px solid #FFFFFF;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
  min-width: 0;

  h1 {
    margin: 0 0 0.5rem 0;
    color: #1A1A1A;
    font-size: 2rem;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    line-height: 1.2;
  }

  .email {
    margin: 0 0 1rem 0;
    color: #6B6B6B;
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6B6B6B;
  font-size: 0.9rem;

  svg {
    width: 16px;
    height: 16px;
    color: #CDA09B;
  }
`;

const EditButton = styled(motion.button)`
  background: #CDA09B;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(205, 160, 155, 0.3);

  &:hover {
    background: #B8918C;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(205, 160, 155, 0.4);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const Form = styled(motion.form)`
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
  font-weight: 600;
  color: #1A1A1A;
  font-size: 0.9rem;
  font-family: 'Poppins', sans-serif;
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid #E5E7EB;
  border-radius: 0.75rem;
  font-size: 1rem;
  background: #FAFAFA;
  transition: all 0.2s ease;
  font-family: 'Inter', sans-serif;

  &:focus {
    outline: none;
    border-color: #CDA09B;
    background: #FFFFFF;
    box-shadow: 0 0 0 3px rgba(205, 160, 155, 0.1);
  }

  &::placeholder {
    color: #9CA3AF;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const SaveButton = styled(motion.button)`
  background: #CDA09B;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  flex: 1;

  &:hover:not(:disabled) {
    background: #B8918C;
    transform: translateY(-1px);
  }

  &:disabled {
    background: #9CA3AF;
    cursor: not-allowed;
    transform: none;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const CancelButton = styled(motion.button)`
  background: transparent;
  color: #6B6B6B;
  border: 2px solid #E5E7EB;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  flex: 1;

  &:hover {
    border-color: #CDA09B;
    color: #CDA09B;
    transform: translateY(-1px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const SkeletonLoader = styled.div`
  .skeleton {
    background: linear-gradient(90deg, #F0F0F0 25%, #E0E0E0 50%, #F0F0F0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
  }

  @keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  .skeleton-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .skeleton-text {
    height: 20px;
    border-radius: 4px;
    margin-bottom: 8px;
  }

  .skeleton-title {
    height: 32px;
    width: 200px;
    border-radius: 4px;
    margin-bottom: 8px;
  }
`;

const DangerZone = styled(motion.div)`
  background: #FFF0F0;
  border: 2px solid rgba(255, 76, 76, 0.2);
  border-radius: 1.5rem;
  padding: 2rem;

  .danger-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;

    svg {
      width: 24px;
      height: 24px;
      color: #FF4C4C;
    }

    h3 {
      color: #FF4C4C;
      margin: 0;
      font-size: 1.25rem;
      font-weight: 700;
      font-family: 'Poppins', sans-serif;
    }
  }

  p {
    color: #6B6B6B;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

const DeleteButton = styled(motion.button)`
  background: #FF4C4C;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    background: #E53E3E;
    transform: translateY(-1px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalContent = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 1.5rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  .modal-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;

    svg {
      width: 24px;
      height: 24px;
      color: #FF4C4C;
    }

    h3 {
      color: #FF4C4C;
      margin: 0;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
    }
  }

  p {
    margin-bottom: 1.5rem;
    color: #6B6B6B;
    line-height: 1.5;
  }
`;

const ProfilePage = () => {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
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
      setIsLoading(false);
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
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({
      name: user.name || '',
      email: user.email || '',
      passwordHash: ''
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);

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
      toast.success('Perfil atualizado com sucesso!');
      
    } catch (error) {
      toast.error(error.message || 'Erro ao atualizar perfil');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (!deletePassword.trim()) {
      toast.error('Digite sua senha para confirmar');
      return;
    }

    setDeleteLoading(true);

    try {
      await apiService.deleteAccount(user.id, deletePassword);
      toast.success('Conta excluída com sucesso');
      logout();
      navigate('/auth');
    } catch (error) {
      toast.error(error.message || 'Erro ao excluir conta');
      setShowDeleteModal(false);
      setDeletePassword('');
    } finally {
      setDeleteLoading(false);
    }
  };

  const openDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setDeletePassword('');
  };

  if (isLoading || !user) {
    return (
      <Container>
        <ContentWrapper>
          <ProfileCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SkeletonLoader>
              <ProfileHeader>
                <div className="skeleton skeleton-avatar"></div>
                <div style={{ flex: 1 }}>
                  <div className="skeleton skeleton-title"></div>
                  <div className="skeleton skeleton-text" style={{ width: '60%' }}></div>
                  <div className="skeleton skeleton-text" style={{ width: '40%' }}></div>
                </div>
              </ProfileHeader>
            </SkeletonLoader>
          </ProfileCard>
        </ContentWrapper>
      </Container>
    );
  }

  return (
    <Container>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#FFFFFF',
            color: '#1A1A1A',
            border: '1px solid rgba(205, 160, 155, 0.2)',
            borderRadius: '12px',
            fontFamily: 'Inter, sans-serif'
          },
          success: {
            iconTheme: {
              primary: '#CDA09B',
              secondary: '#FFFFFF'
            }
          }
        }}
      />
      <ContentWrapper>
        <ProfileCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProfileHeader>
            <ProfileAvatar>
              {user.name?.charAt(0).toUpperCase() || 'U'}
            </ProfileAvatar>
            <ProfileInfo>
              <h1>{user.name}</h1>
              <p className="email">{user.email}</p>
              <InfoGrid>
                <InfoItem>
                  <Calendar />
                  <span>Membro desde {new Date(user.created_at).toLocaleDateString('pt-BR')}</span>
                </InfoItem>
                <InfoItem>
                  <Clock />
                  <span>Atualizado em {user.updated_at ? new Date(user.updated_at).toLocaleDateString('pt-BR') : 'Nunca'}</span>
                </InfoItem>
              </InfoGrid>
            </ProfileInfo>
            {!isEditing && (
              <EditButton
                onClick={handleEdit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Edit3 />
                Editar Perfil
              </EditButton>
            )}
          </ProfileHeader>

          <AnimatePresence mode="wait">
            {isEditing ? (
              <Form
                key="edit-form"
                onSubmit={handleSave}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
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
                  <SaveButton
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Save />
                    {loading ? 'Salvando...' : 'Salvar'}
                  </SaveButton>
                  <CancelButton
                    type="button"
                    onClick={handleCancel}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <X />
                    Cancelar
                  </CancelButton>
                </ButtonGroup>
              </Form>
            ) : null}
          </AnimatePresence>
        </ProfileCard>

        {!isEditing && (
          <DangerZone
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="danger-header">
              <AlertTriangle />
              <h3>Excluir conta permanentemente</h3>
            </div>
            <p>Esta ação não pode ser desfeita. Todos os seus dados serão permanentemente excluídos.</p>
            <DeleteButton
              onClick={openDeleteModal}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Trash2 />
              Excluir Conta
            </DeleteButton>
          </DangerZone>
        )}
      </ContentWrapper>

      <AnimatePresence>
        {showDeleteModal && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ModalContent
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="modal-header">
                <AlertTriangle />
                <h3>Confirmar Exclusão da Conta</h3>
              </div>
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
                <DeleteButton
                  onClick={handleDeleteAccount}
                  disabled={deleteLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Trash2 />
                  {deleteLoading ? 'Excluindo...' : 'Confirmar Exclusão'}
                </DeleteButton>
                <CancelButton
                  onClick={closeDeleteModal}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <X />
                  Cancelar
                </CancelButton>
              </ButtonGroup>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default ProfilePage;