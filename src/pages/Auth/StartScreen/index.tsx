import React from 'react';
import {View, TouchableOpacity, Text, Image, StatusBar} from 'react-native';

import styles from './styles'

import {useAuth} from '../../../contexts/auth';

const StartScreen: React.FC = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#7B72DF"/>
            <View style={styles.boxLogo}>
                <Image
                    style={styles.logo} 
                    source={require('../../../assets/imagens/logo.png')}
                />
            </View>
            <View style={styles.boxButtons}>
                <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={()=> navigation.navigate("Entrar")}>
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.button && styles.buttonCreate} onPress={()=> navigation.navigate("Criar conta")}>
                    <Text style={styles.textButton}>Criar conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default StartScreen;