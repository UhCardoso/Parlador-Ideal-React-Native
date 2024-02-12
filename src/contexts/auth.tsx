import React, {createContext, ReactNode, useEffect, useState, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';
import * as auth from '../services/auth';

interface User {
    name: string;
    email: string;
}

interface SignInParams {
    email: string;
    password: string;
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    loading: boolean;
    signIn(): Promise<SignInParams>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        // Load Storage Data
        (async () => {
            const storagedUser = await AsyncStorage.getItem('@PIAuth:user');
            const storagedToken = await AsyncStorage.getItem('@PIAuth:token');

            if(storagedUser && storagedToken) {
                api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;

                setUser(JSON.parse(storagedUser));
            }
            setLoading(false);
        })();
    }, [])

    async function signIn(email:string, password:string) {
        const response = await auth.signIn(email, password);

        setUser(response.user);

        api.defaults.headers['Authorization'] = `Bearer ${response.token}`;

        await AsyncStorage.setItem('@PIAuth:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@PIAuth:token', response.token);
    }

    async function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }

    return (
        <AuthContext.Provider value={{signed: !!user, user, loading, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}