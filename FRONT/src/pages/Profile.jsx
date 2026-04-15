import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { updateProfile, updatePassword, deleteUser, EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import { auth } from '../services/firebase';
import api from '../services/api';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Edit3, Save, X, Trash2, User, Calendar, Clock, Camera } from 'lucide-react';
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
  background: ${props => props.$hasImage ? 'transparent' : 'linear-gradient(135deg, #CDA09B 0%, #B8918C 100%)'};
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
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

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

const PhotoUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const PhotoPreview = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: ${props => props.$hasImage ? 'transparent' : 'linear-gradient(135deg, #CDA09B 0%, #B8918C 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  font-weight: 700;
  overflow: hidden;
  border: 4px solid #E5E7EB;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PhotoButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const PhotoButton = styled.label`
  background: #CDA09B;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    background: #B8918C;
  }

  input {
    display: none;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

const RemovePhotoButton = styled.button`
  background: #FF4C4C;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    background: #E53E3E;
  }

  svg {
    width: 14px;
    height: 14px;
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
  const { user, dbUser, setDbUser, logout } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [formData, setFormData] = useState({
    name: '',
    passwordHash: '',
    profilePicture: ''
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.displayName || '',
        passwordHash: '',
        profilePicture: user.photoURL || ''
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
      name: user.displayName || '',
      passwordHash: '',
      profilePicture: user.photoURL || '',
      profilePictureFile: null
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Imagem muito grande. Máximo 5MB');
        return;
      }
      const previewUrl = URL.createObjectURL(file);
      setFormData(prev => ({ ...prev, profilePicture: previewUrl, profilePictureFile: file }));
    }
  };

  const uploadToImgBB = async (file) => {
    const base64 = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
    const body = new URLSearchParams();
    body.append('key', '06e7312be7cd16b207344fba43e96449');
    body.append('image', base64);
    const res = await fetch('https://api.imgbb.com/1/upload', { method: 'POST', body });
    const data = await res.json();
    if (!data.success) throw new Error('Falha ao fazer upload da imagem');
    return data.data.url;
  };

  const handleRemovePhoto = () => {
    setFormData(prev => ({ ...prev, profilePicture: '', profilePictureFile: null }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let photoURL = formData.profilePicture || null;
      if (formData.profilePictureFile) {
        photoURL = await uploadToImgBB(formData.profilePictureFile);
      }
      await updateProfile(auth.currentUser, {
        displayName: formData.name,
        photoURL
      });

      if (formData.passwordHash.trim()) {
        await updatePassword(auth.currentUser, formData.passwordHash);
      }

      if (dbUser?.id) {
        await api.updateUser(dbUser.id, {
          name: formData.name,
          email: user.email,
          profilePicture: photoURL || null
        });
      }

      setIsEditing(false);
      toast.success('Perfil atualizado com sucesso!');
    } catch (error) {
      if (error.code === 'auth/requires-recent-login') {
        toast.error('Por segurança, faça login novamente antes de alterar email ou senha.');
      } else {
        toast.error(error.message || 'Erro ao atualizar perfil');
      }
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
      const credential = EmailAuthProvider.credential(user.email, deletePassword);
      await reauthenticateWithCredential(auth.currentUser, credential);
      if (dbUser?.id) await api.deleteUser(dbUser.id);
      await deleteUser(auth.currentUser);
      toast.success('Conta excluída com sucesso');
      navigate('/');
    } catch (error) {
      if (error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
        toast.error('Senha incorreta');
      } else {
        toast.error(error.message || 'Erro ao excluir conta');
      }
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
            <ProfileAvatar $hasImage={!!user.photoURL}>
              {user.photoURL ? (
                <img src={user.photoURL} alt={user.displayName} />
              ) : (
                user.displayName?.charAt(0).toUpperCase() || 'U'
              )}
            </ProfileAvatar>
            <ProfileInfo>
              <h1>{user.displayName}</h1>
              <p className="email">{user.email}</p>
              <InfoGrid>
                <InfoItem>
                  <Calendar />
                  <span>Membro desde {user.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString('pt-BR') : '-'}</span>
                </InfoItem>
                <InfoItem>
                  <Clock />
                  <span>Último acesso: {user.metadata?.lastSignInTime ? new Date(user.metadata.lastSignInTime).toLocaleDateString('pt-BR') : '-'}</span>
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
                <PhotoUploadContainer>
                  <PhotoPreview $hasImage={!!formData.profilePicture}>
                    {formData.profilePicture ? (
                      <img src={formData.profilePicture} alt="Preview" />
                    ) : (
                      formData.name?.charAt(0).toUpperCase() || 'U'
                    )}
                  </PhotoPreview>
                  <PhotoButtons>
                    <PhotoButton>
                      <Camera />
                      Alterar Foto
                      <input type="file" accept="image/*" onChange={handlePhotoChange} />
                    </PhotoButton>
                    {formData.profilePicture && (
                      <RemovePhotoButton type="button" onClick={handleRemovePhoto}>
                        <X />
                        Remover
                      </RemovePhotoButton>
                    )}
                  </PhotoButtons>
                </PhotoUploadContainer>

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