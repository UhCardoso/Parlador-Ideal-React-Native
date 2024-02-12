import React, {useEffect, useState} from 'react';
import {View, ScrollView, TouchableOpacity, Image, Text} from 'react-native';

// icons
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';

import { useAuth } from '../../../contexts/auth';
import { getPosts, deletePost} from '../../../services/posts';
import {convertHour, convertDate} from '../../../utils/convertData';

const Posts: React.FC = ({navigation}) => {
    const {user, signOut} = useAuth();
    const [posts, setPosts] = useState([]);
    const [reloadCount, setReloadCount] = useState(0);
    const [postIdModal, setPostIdModal] = useState(false);

    useEffect(()=> {
        (async () => {
            let postsData = await getPosts();
            setPosts(postsData)
        })()
    }, [reloadCount, postIdModal]);

    function handleReload() {
        let nowCountReload = reloadCount+1;
        setReloadCount(nowCountReload)
        setPostIdModal(false)
    }

    function handleLogout() {
        signOut();
    }

    function handleEditPost() {
        setPostIdModal(false);
        navigation.navigate("Editar Postagem", {postData:postIdModal});
    }

    async function handleDeletePost() {
        let response = await deletePost(user.id, postIdModal.identify);
        if(response.deleted) {
            setPostIdModal(false);
        }
    }

    return (
        <>
        <ScrollView style={styles.container} onView>
            {posts.map(value => (
                <View key={value.identify} style={styles.boxPostLine}>
                    <View style={styles.areaLineLeft}>
                        <Image
                            style={styles.logoUser}
                            source={require('../../../assets/imagens/user.png')}
                        />
                        <View style={styles.line}>
                            <Text>|</Text>
                        </View>
                        <Text style={styles.hour}>{convertHour(value.created)}</Text>
                    </View>
                    <View style={styles.boxPost}>
                        <View style={styles.areaName}>
                        {user.id === value.user.id ? (
                            <Text style={styles.textName}>Você</Text>
                        ) : (
                            <Text style={styles.textName}>{value.user.name}</Text>
                        )}

                        {user.id === value.user.id && (
                            <TouchableOpacity style={styles.moreBox} onPress={()=>setPostIdModal(value)}>
                                <Feather
                                    name="more-horizontal"
                                    size={24}
                                    color="#7B72DF"    
                                />
                            </TouchableOpacity>
                        )}
                        </View>
                        <View style={styles.description}>
                            <Text>
                            {value.description}
                            </Text>
                        </View>
                        <View style={styles.boxDate}>
                            <Text style={styles.textDate}>{convertDate(value.created)}</Text>
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>
        <View style={styles.boxNavBottom}>

            <TouchableOpacity style={styles.boxButtonNav} onPress={()=> handleReload()}>
                <Ionicons name="reload-circle-outline" size={40} color="#7B72DF" />
                <Text style={styles.textNav}>Atualizar</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.boxButtonNav} onPress={()=> navigation.navigate("Nova Postagem")}>
                <Ionicons name="add-circle-sharp" size={40} color="#7B72DF" />
                <Text style={styles.textNav}>Novo Post</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boxButtonNav} onPress={()=> handleLogout()}>
                <AntDesign name="logout" size={30} color="#7B72DF" />
                <Text style={styles.textNav}>Sair</Text>
            </TouchableOpacity>
        </View>
        
        {postIdModal && (
            <View style={styles.modalDetails}>
                <View style={styles.boxDetails}>
                    <TouchableOpacity onPress={()=> handleEditPost()}>
                        <Text style={styles.textEdit}>Editar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>handleDeletePost()}>
                        <Text style={styles.textDelete}>Excluir</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )}
        </>
    )
}

export default Posts;