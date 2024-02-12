import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Posts from "../pages/App/Posts";
import NewPost from '../pages/App/NewPost';
import EditPost from '../pages/App/EditPost';

const AppStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
    <AppStack.Navigator screenOptions={{
        statusBarColor: "#d2d2d2",
        statusBarAnimation: 'fade',
        headerTintColor: "#7B72DF"
    }}>
        <AppStack.Screen name="Parlador Ideal" component={Posts} />
        <AppStack.Screen name="Nova Postagem" component={NewPost} />
        <AppStack.Screen name="Editar Postagem" component={EditPost} />
    </AppStack.Navigator>
)

export default AppRoutes;