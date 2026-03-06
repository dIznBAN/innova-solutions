import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import AppRouter from './routes/AppRouter'
import MyGlobalStyles from './styles/globalStyles'
import { AuthProvider } from './hooks/useAuth.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyGlobalStyles />
    <Toaster position="top-right" />
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </StrictMode>,
)
