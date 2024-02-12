import React, { useState} from 'react';
import {View, TouchableOpacity, Text, TextInput, KeyboardAvoidingView,  ScrollView} from 'react-native';

import styles from './styles'

import { register } from '../../../services/user';

// icons
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Register: React.FC = ({navigation}) => {
    const [name, setName] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassWord] = useState<string | null>(null);
    const [password2, setPassWord2] = useState<string | null>(null);

    async function handleRegister() {
        if(password === password2) {
            const response = await register(name, email, password);
        } else {
            alert("Senhas não conferem")
        }
    }

    return (
        <ScrollView style={styles.container}>
            <KeyboardAvoidingView behavior='padding'>
            <View>
                <View style={styles.boxTitles}>
                    <Text style={styles.title}>Bem Vindo</Text>
                    <Text style={styles.colorWhite}>Crie Sua conta</Text>
                </View>

                <View style={styles.boxInputs}>
                <View style={styles.inputs}>
                <FontAwesome name="user" size={24} color="#7283de" />
                        <TextInput 
                            value={name}
                            onChangeText={setName}
                            placeholder='Digite seu Nome'
                            style={styles.textInput}
                            placeholderTextColor="#fff"
                        />
                    </View>
                    
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

                    <View style={styles.inputs}>
                    <Entypo name="lock" size={24} color="#7283de" />
                        <TextInput 
                            value={password2}
                            onChangeText={setPassWord2}
                            placeholder='Confirmar senha'
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
                        onPress={()=>handleRegister()}
                    >Registrar</Text>
                </TouchableOpacity>
                <View style={styles.boxRegister}>
                    <Text style={styles.colorWhite}>Já tem uma conta?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate("Entrar")}>
                        <Text style={styles.linkRegister}>Entre</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default Register;