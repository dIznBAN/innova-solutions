import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
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
  const [activeTab, setActiveTab] = useState("login");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSuccessMessage(
      activeTab === "login"
        ? "Login realizado com sucesso!"
        : "Conta criada com sucesso!"
    );

    setTimeout(() => {
      setSuccessMessage("");
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    }, 3000);
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

            <SubmitButton type="submit">
              {activeTab === "login" ? "Entrar" : "Criar Conta"}
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
