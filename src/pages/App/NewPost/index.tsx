import React, { useState, useEffect} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

import { useAuth } from '../../../contexts/auth';
import { savePost } from '../../../services/posts';

//icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const NewPost: React.FC = ({navigation}) => {
    const {user} = useAuth();
    const [description, setDescription] = useState<string | null>(null);

    async function handleSendPost() {
        const response = await savePost(user.id, description);
        if(response.data) {
            navigation.navigate('Parlador Ideal');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.boxPostLine}>
                <View style={styles.areaLineLeft}>
                    <Image
                        style={styles.logoUser}
                        source={require('../../../assets/imagens/user.png')}
                    />
                    <View style={styles.line}>
                        <Text>|</Text>
                    </View>
                    <Text style={styles.hour}>Agora</Text>
                </View>
                <View style={styles.boxPost}>
                    <View style={styles.areaName}>
                        <Text style={styles.textName}>{user.name}</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        value={description}
                        onChangeText={setDescription}
                        placeholder='Digite algo...'
                        multiline
                    />
                </View>
            </View>
            {description && (
                <View style={styles.boxNavBottom}>
                    <TouchableOpacity style={styles.boxButtonNav} onPress={()=>handleSendPost()}>
                        <Text style={styles.textNav}>Enviar postagem</Text>
                        <MaterialCommunityIcons name="send" size={40} color="#7B72DF" />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

export default NewPost;