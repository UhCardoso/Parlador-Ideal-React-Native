import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from "../pages/Auth/SignIn";
import Register from '../pages/Auth/Register';
import StartScreen from '../pages/Auth/StartScreen';

const AuthStack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator screenOptions={{
        headerTintColor: "#7B72DF",
        headerStyle: {
            backgroundColor: '#7B72DF',
        }
    }}>
        <AuthStack.Screen options={{headerShadowVisible: false}}  name="Bem Vindo!" component={StartScreen} />
        <AuthStack.Screen options={{headerShadowVisible: false}} name="Entrar" component={SignIn} />
        <AuthStack.Screen  options={{headerShadowVisible: false}} name="Criar conta" component={Register} />
    </AuthStack.Navigator>
)

export default AuthRoutes;