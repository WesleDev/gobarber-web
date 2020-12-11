import { createContext } from 'react';

interface AuthContextData {
  name: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData); // burlar o ts para iniciar o contexto vazio

export default AuthContext;
