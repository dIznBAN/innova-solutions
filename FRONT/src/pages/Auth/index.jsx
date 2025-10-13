import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import ApiService from "../../services/api";
import { useAuth } from "../../hooks/useAuth.jsx";
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
} from "./styles";
import { LogoContainer } from "./styles";
import { Logo } from "../../components/Header/styles";

const AuthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();
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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }

    if (!formData.password) {
      newErrors.password = "Senha é obrigatória";
    } else if (formData.password.length < 6) {
      newErrors.password = "Senha deve ter pelo menos 6 caracteres";
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
        const user = await ApiService.login(formData.email, formData.password);
        setSuccessMessage("Login realizado com sucesso!");
        authLogin(user);
        setTimeout(() => navigate('/'), 1500);
      } else {
        const userData = {
          name: formData.name,
          email: formData.email,
          passwordHash: formData.password
        };
        await ApiService.register(userData);
        setSuccessMessage("Conta criada com sucesso! Faça login para continuar.");
        setTimeout(() => {
          setActiveTab("login");
          setFormData({ name: "", email: "", password: "", confirmPassword: "" });
          setSuccessMessage("");
        }, 2000);
      }
    } catch (error) {
      setErrors({ general: error.message });
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
              <PasswordToggle onClick={() => setShowPassword(!showPassword)}>
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
          </Form>
        </FormContainer>
      </AuthCard>
    </Container>
  );
};

export default AuthPage;
