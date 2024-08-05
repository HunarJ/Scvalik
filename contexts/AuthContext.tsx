import React, { createContext, useState, ReactNode } from 'react';

interface AuthContextProps {
  isAuthenticated: boolean;
  email: string;
  password: string;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  email: '',
  password: '',
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (email: string, password: string) => {
    if (email === 'jan.hunar@seznam.cz' && password === '123456') {
      setEmail(email);
      setPassword(password);
      setIsAuthenticated(true);
    } else {
      alert('Nesprávný email nebo heslo');
    }
  };

  const logout = () => {
    setEmail('');
    setPassword('');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, email, password, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;