import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash, FaCamera } from "react-icons/fa";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../services/firebase';
import { useAuth } from "../../hooks/useAuth.jsx";
import api from '../../services/api';
import {
  Container,
  AuthCard,
  TabContainer,
  Tab,
  FormContainer,
  Form,
  InputGroup,
  Input,
  InputIcon,
  PasswordToggle,
  SubmitButton,
  ForgotPassword,
  ErrorMessage,
  SuccessMessage,
  PhotoUpload,
  PhotoPreview,
  PhotoLabel
} from "./styles";
import { LogoContainer } from "./styles";
import { Logo } from "../../components/Header/styles";

const AuthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("login");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (location.pathname === "/registro") {
      setActiveTab("register");
    } else {
      setActiveTab("login");
    }
  }, [location.pathname]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePicture: ""
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, photo: "Imagem muito grande. Máximo 5MB" }));
        return;
      }
      const previewUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, profilePicture: previewUrl, profilePictureFile: file }));
      setErrors((prev) => ({ ...prev, photo: "" }));
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
    const res = await fetch('https://api.imgbb.com/1/upload', {
      method: 'POST',
      body,
    });
    const data = await res.json();
    if (!data.success) throw new Error('Falha ao fazer upload da imagem');
    return data.data.url;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }

    if (!formData.password) {
      newErrors.password = "Senha é obrigatória";
    } else if (activeTab === "register") {
      const passwordErrors = [];
      if (formData.password.length < 8) passwordErrors.push("8 caracteres");
      if (!/[A-Z]/.test(formData.password)) passwordErrors.push("1 maiúscula");
      if (!/[a-z]/.test(formData.password)) passwordErrors.push("1 minúscula");
      if (!/\d/.test(formData.password)) passwordErrors.push("1 número");
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) passwordErrors.push("1 caractere especial");
      
      if (passwordErrors.length > 0) {
        newErrors.password = `Faltando: ${passwordErrors.join(", ")}`;
      }
    }

    if (activeTab === "register") {
      if (!formData.name) {
        newErrors.name = "Nome é obrigatório";
      }
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Confirme sua senha";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Senhas não coincidem";
      }
    }

    return newErrors;
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const { uid, displayName, email, photoURL } = result.user;
      const exists = await api.getUserByFirebaseUid(uid).catch(() => null);
      if (!exists) await api.createUser(uid, displayName || 'Usuário', email, photoURL);
      navigate('/');
    } catch (error) {
      setErrors({ general: 'Erro ao entrar com Google. Tente novamente.' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrors({});
    setSuccessMessage("");

    try {
      if (activeTab === "login") {
        const result = await signInWithEmailAndPassword(auth, formData.email, formData.password);
        if (!result.user.emailVerified) {
          await auth.signOut();
          setErrors({ general: 'Confirme seu e-mail antes de entrar. Verifique sua caixa de entrada.' });
          return;
        }
        setSuccessMessage("Login realizado com sucesso!");
        setTimeout(() => navigate('/'), 1500);
      } else {
        const { user } = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        let photoURL = null;
        if (formData.profilePictureFile) {
          photoURL = await uploadToImgBB(formData.profilePictureFile);
        }
        await updateProfile(user, { displayName: formData.name, photoURL });
        await api.createUser(user.uid, formData.name, formData.email, photoURL);
        await sendEmailVerification(user);
        await auth.signOut();
        setSuccessMessage("Conta criada! Verifique seu e-mail para confirmar antes de entrar.");
        setTimeout(() => {
          setActiveTab("login");
          setFormData({ name: "", email: "", password: "", confirmPassword: "", profilePicture: "", profilePictureFile: null });
          setSuccessMessage("");
        }, 3000);
      }
    } catch (error) {
      const messages = {
        'auth/user-not-found': 'Usuário não encontrado',
        'auth/wrong-password': 'Senha incorreta',
        'auth/email-already-in-use': 'E-mail já cadastrado',
        'auth/invalid-credential': 'E-mail ou senha incorretos',
        'auth/too-many-requests': 'Muitas tentativas. Tente novamente mais tarde',
      };
      setErrors({ general: messages[error.code] || error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <LogoContainer>
        <Logo as={Link} to="/">
          Innova Solutions
        </Logo>
      </LogoContainer>
      <AuthCard>
        <TabContainer>
          <Tab
            active={activeTab === "login"}
            onClick={() => setActiveTab("login")}
          >
            Entrar
          </Tab>
          <Tab
            active={activeTab === "register"}
            onClick={() => setActiveTab("register")}
          >
            Criar Conta
          </Tab>
        </TabContainer>

        <FormContainer>
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
          {errors.general && <ErrorMessage>{errors.general}</ErrorMessage>}

          <Form onSubmit={handleSubmit}>
            {activeTab === "register" && (
              <>
                <PhotoUpload>
                  <PhotoPreview $hasImage={!!formData.profilePicture}>
                    {formData.profilePicture ? (
                      <img src={formData.profilePicture} alt="Preview" />
                    ) : (
                      <FaUser />
                    )}
                  </PhotoPreview>
                  <PhotoLabel>
                    <FaCamera />
                    Adicionar Foto (Opcional)
                    <input type="file" accept="image/*" onChange={handlePhotoChange} />
                  </PhotoLabel>
                  {errors.photo && <ErrorMessage>{errors.photo}</ErrorMessage>}
                </PhotoUpload>

                <InputGroup>
                  <InputIcon>
                    <FaUser />
                  </InputIcon>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Nome completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    error={errors.name}
                  />
                  {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                </InputGroup>
              </>
            )}

            <InputGroup>
              <InputIcon>
                <FaEnvelope />
              </InputIcon>
              <Input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <InputIcon>
                <FaLock />
              </InputIcon>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Senha"
                value={formData.password}
                onChange={handleInputChange}
                error={errors.password}
              />
              <PasswordToggle type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </PasswordToggle>
              {errors.password && (
                <ErrorMessage>{errors.password}</ErrorMessage>
              )}
            </InputGroup>

            {activeTab === "register" && (
              <InputGroup>
                <InputIcon>
                  <FaLock />
                </InputIcon>
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirmar senha"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  error={errors.confirmPassword}
                />
                <PasswordToggle
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </PasswordToggle>
                {errors.confirmPassword && (
                  <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
                )}
              </InputGroup>
            )}

            <SubmitButton type="submit" disabled={loading}>
              {loading ? "Carregando..." : (activeTab === "login" ? "Entrar" : "Criar Conta")}
            </SubmitButton>

            {activeTab === "login" && (
              <ForgotPassword as={Link} to="/esqueceu-senha">
                Esqueceu a senha?
              </ForgotPassword>
            )}

            <div style={{ textAlign: 'center', margin: '0.5rem 0', color: '#999', fontSize: '0.85rem' }}>ou</div>

            <SubmitButton type="button" onClick={handleGoogleLogin} style={{ background: '#fff', color: '#444', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18" alt="Google" />
              Continuar com Google
            </SubmitButton>
          </Form>
        </FormContainer>
      </AuthCard>
    </Container>
  );
};

export default AuthPage;
