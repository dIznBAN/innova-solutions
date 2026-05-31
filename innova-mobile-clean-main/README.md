# Innova Solutions — App Mobile

Aplicativo React Native + Expo convertido do site web Innova Solutions.

## 🚀 Como rodar no Expo Go

### Pré-requisitos
- Node.js 18+
- Expo Go instalado no celular ([iOS](https://apps.apple.com/app/expo-go/id982107779) / [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))

### Passos

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar o servidor
npx expo start

# 3. Escanear o QR code com:
#    - iOS: câmera nativa
#    - Android: app Expo Go
```

## 📁 Estrutura do Projeto

```
src/
├── services/
│   ├── firebase.js     # Configuração Firebase Auth
│   └── api.js          # Chamadas para a API REST
├── hooks/
│   └── useAuth.jsx     # Contexto de autenticação
├── theme/
│   └── index.js        # Cores, espaçamentos, sombras
├── navigation/
│   └── AppNavigator.jsx # React Navigation (Stack + Tabs)
├── screens/            # 14 telas
└── components/
    └── CouponModal.jsx
```

## 🔑 API local

O app usa apenas o backend local na porta `8080`.

```bash
# backend
cd ../BACK
./mvnw.cmd spring-boot:run

# mobile
cd ../innova-mobile-clean-main
npx expo start
```

No Expo Go, o app tenta descobrir automaticamente o IP do seu computador pelo Metro.
Se precisar forçar manualmente, inicie o Expo assim:

```bash
$env:EXPO_PUBLIC_API_URL="http://SEU_IP_LOCAL:8080/api"
npx expo start
```

## 📱 Telas disponíveis

- **Início** — Hero + cupons em destaque
- **Cupons** — Lista com busca e filtros
- **Meus Cupons** — Cupons salvos (requer login)
- **Lojas** — Lojas parceiras aprovadas
- **Perfil** — Login, cadastro, edição e exclusão de conta
- **Recuperar Senha**
- **Cadastro de Parceiro**
- **Minha Loja** — Gerenciar loja e cupons
- **Admin** — Painel administrativo
- **Termos / Privacidade / Sobre**

## ⚠️ Observações

- Login com Google foi removido (requer configuração adicional do Google OAuth no Expo)
- Upload de imagens usa ImgBB API (chave já configurada)
- Auth persistente via AsyncStorage
