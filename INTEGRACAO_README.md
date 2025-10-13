# Integração Frontend-Backend - Sistema de Autenticação

## ✅ O que foi implementado:

### Backend (Spring Boot)
- CRUD completo de usuários em `/api/users`
- Endpoint de login: `POST /api/users/login`
- Endpoint de cadastro: `POST /api/users`
- Configuração CORS habilitada
- Validação de email duplicado

### Frontend (React)
- Serviço de API (`src/services/api.js`)
- Hook de autenticação (`src/hooks/useAuth.js`)
- Página de login/cadastro integrada
- Rotas protegidas
- Dropdown de perfil com logout
- Estados de loading e tratamento de erros

## 🚀 Como testar:

### 1. Iniciar o Backend
```bash
cd BACK
./mvnw spring-boot:run
```
O backend estará rodando em `http://localhost:8080`

### 2. Iniciar o Frontend
```bash
cd FRONT
npm run dev
```
O frontend estará rodando em `http://localhost:5173`

### 3. Testar a integração
1. Acesse `http://localhost:5173/login`
2. Crie uma nova conta na aba "Criar Conta"
3. Faça login com as credenciais criadas
4. Teste o logout pelo dropdown do perfil

## 📋 Funcionalidades implementadas:

### Cadastro de usuário
- Validação de campos obrigatórios
- Verificação de email duplicado
- Confirmação de senha
- Feedback visual de sucesso/erro

### Login
- Autenticação com email e senha
- Armazenamento do usuário no localStorage
- Redirecionamento após login
- Tratamento de credenciais inválidas

### Autenticação
- Context API para gerenciar estado global
- Rotas protegidas (perfil, admin)
- Logout com limpeza de dados
- Persistência de sessão

### Interface
- Estados de loading nos botões
- Mensagens de erro e sucesso
- Dropdown de perfil responsivo
- Navegação condicional baseada na autenticação

## 🔧 Estrutura dos arquivos criados/modificados:

### Novos arquivos:
- `FRONT/src/services/api.js` - Serviço de comunicação com API
- `FRONT/src/hooks/useAuth.js` - Hook de autenticação
- `FRONT/src/components/ProtectedRoute.jsx` - Componente de rota protegida

### Arquivos modificados:
- `FRONT/src/pages/Auth/index.jsx` - Integração com backend
- `FRONT/src/pages/Auth/styles.js` - Estilos para loading
- `FRONT/src/components/ProfileDropdown/index.jsx` - Integração com auth
- `FRONT/src/routes/AppRouter.jsx` - Rotas protegidas
- `FRONT/src/main.jsx` - Provider de autenticação

## 🎯 Próximos passos sugeridos:
1. Implementar recuperação de senha
2. Adicionar validação de token JWT
3. Criar página de perfil do usuário
4. Implementar refresh token
5. Adicionar testes unitários