import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import * as AuthSession from 'expo-auth-session';

import { styles } from './styles';
import { ModalLogin, ModalLoginProps } from '../ModalLogin';
import { GAMES } from '../../utils/games';

export function LoginButton() {
    const [discordInfos, setdiscordInfos] = useState<ModalLoginProps>();

    const [modalVisible, setModalVisible] = useState(false);
    async function handleDiscordSignin() {
        const response = await AuthSession.startAsync({
            authUrl: 'https://discord.com/api/oauth2/authorize?client_id=1024387203952037889&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40m4rcotoni%2Fnlw-esports&response_type=token&scope=identify'

        });
        fetch('https://discord.com/api/users/@me', {
            headers:{
                'authorization': `Bearer ${response.params.access_token}`
            }
        }).then(response => response.json())
        .then(data => { 
            
                setdiscordInfos( data);
        });
        
        console.log(discordInfos);
        
        if (response.type == 'success') {
            setModalVisible(!modalVisible)
        } 
    }
    

   
  return (
    <TouchableOpacity 
        style={styles.container}
        onPress={handleDiscordSignin}
    >
        {/* <ModalLogin
                visible={modalVisible}
                onClose={() => setModalVisible(!modalVisible)} 
                
                /> */}
        <Text style={styles.buttonTitle}>
            Entrar com Discord{}
        </Text>
    </TouchableOpacity>
  );
}