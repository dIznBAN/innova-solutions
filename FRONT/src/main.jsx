import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './routes/AppRouter'
import MyGlobalStyles from './styles/globalStyles'
import { AuthProvider } from './hooks/useAuth.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyGlobalStyles />
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </StrictMode>,
)
