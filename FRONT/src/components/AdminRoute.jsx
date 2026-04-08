import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';

const AdminRoute = ({ children }) => {
  const { isAuthenticated, dbUser, loading } = useAuth();

  if (loading) return <div>Carregando...</div>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (!dbUser || dbUser.role !== 'ADMIN') return <Navigate to="/" replace />;

  return children;
};

export default AdminRoute;
