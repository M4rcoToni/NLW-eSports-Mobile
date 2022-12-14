import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import * as AuthSession from 'expo-auth-session';

import { styles } from './styles';
import { ModalLogin, ModalLoginProps } from '../ModalLogin';

export function LoginButton() {
    const [discordInfos, setdiscordInfos] = useState<ModalLoginProps>();

    const [modalVisible, setModalVisible] = useState(false);
    async function handleDiscordSignin() {
        const response = await AuthSession.startAsync({
            authUrl: 'https://discord.com/api/oauth2/authorize?client_id=1024387203952037889&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40m4rcotoni%2Fnlw-esports&response_type=token&scope=identify'

        });
        const token = response.params.access_token;
        fetch('https://discord.com/api/users/@me', {
            headers:{
                'authorization': `Bearer ${token}`
            }
        }).then(response => response.json())
        .then(data => { 
            setdiscordInfos( data);
        });

        if (token != undefined) {
            setModalVisible(!modalVisible)
        } 
    }
    
   
  return (
    <TouchableOpacity 
        style={styles.container}
        onPress={handleDiscordSignin}
    >
        <ModalLogin
              visible={modalVisible}
              onClose={() => setModalVisible(!modalVisible)} 
              username={discordInfos?.username ? discordInfos?.username : 'não carregou '}  
              discriminator={discordInfos?.discriminator ? discordInfos?.discriminator : 'não carregou'}  
              avatar={discordInfos?.avatar ? discordInfos?.avatar : 'não carregou '}         
              id={discordInfos?.id ? discordInfos?.id : 'não carregou '}               
                />
        <Text style={styles.buttonTitle}>
            Entrar com Discord{}
        </Text>
    </TouchableOpacity>
  );
}