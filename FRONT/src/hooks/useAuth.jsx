import { useState, useEffect, createContext, useContext } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);
  const [userStore, setUserStore] = useState(null);
  const [userStores, setUserStores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        const profile = await api.getUserByFirebaseUid(firebaseUser.uid).catch(() => null);
        setDbUser(profile);
        const store = await api.getMyStore().catch(() => null);
        setUserStore(store);
        const stores = await api.getMyStores().catch(() => []);
        setUserStores(Array.isArray(stores) ? stores : []);
      } else {
        setDbUser(null);
        setUserStore(null);
        setUserStores([]);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, dbUser, setDbUser, userStore, setUserStore, userStores, setUserStores, logout, loading, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth deve ser usado dentro de AuthProvider');
  return context;
};
