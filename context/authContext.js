import { createContext } from 'react';

const AuthContext = createContext({
    auth: undefined,
    sesion: () => null,
    logout: () => null,
    setReloadUSer: () => null
});

export default AuthContext;
