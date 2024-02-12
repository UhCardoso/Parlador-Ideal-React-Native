import React, { useState} from 'react';
import {View, TouchableOpacity, Text, TextInput, KeyboardAvoidingView, ActivityIndicator} from 'react-native';

import styles from './styles'

import {useAuth} from '../../../contexts/auth';

// icons
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const SignIn: React.FC = ({navigation}) => {
    const {signIn} = useAuth();
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassWord] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    function handleSignIn() {
        setLoading(true);
        signIn(email, password);
    }

    if(loading) {
        return (
           <View style={styles.loading}>
            <ActivityIndicator size="large" color="#666" />
           </View>
        );
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View>
                <View style={styles.boxTitles}>
                    <Text style={styles.title}>Bem Vindo</Text>
                    <Text style={styles.colorWhite}>Logue para ver as novas postagens</Text>
                </View>

                <View style={styles.boxInputs}>
                    <View style={styles.inputs}>
                    <MaterialIcons name="email" size={24} color="#7283de" />
                        <TextInput 
                            value={email}
                            onChangeText={setEmail}
                            placeholder='Email'
                            style={styles.textInput}
                            placeholderTextColor="#fff"
                        />
                    </View>

                    <View style={styles.inputs}>
                    <Entypo name="lock" size={24} color="#7283de" />
                        <TextInput 
                            value={password}
                            onChangeText={setPassWord}
                            placeholder='Senha'
                            style={styles.textInput}
                            placeholderTextColor="#fff"
                        />
                    </View>
                </View>
            </View>

            <View style={styles.boxButton}>
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text 
                        style={styles.textButton}
                        onPress={()=>handleSignIn()}
                    >Entrar</Text>
                </TouchableOpacity>
                <View style={styles.boxRegister}>
                    <Text style={styles.colorWhite}>Não tem uma conta?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate("Criar conta")}>
                        <Text style={styles.linkRegister}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default SignIn;