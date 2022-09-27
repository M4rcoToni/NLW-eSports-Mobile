import React, { useState } from 'react';
import { View , Image, TouchableOpacity, Text, Modal, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/background';
import logoImg  from '../../assets/logo-nlw-esports.png';

import { styles } from './styles';
import { Heading } from '../../components/Heading';
import { GameController } from 'phosphor-react-native';
import { THEME } from '../../theme';
import * as AuthSession from 'expo-auth-session';
import { useNavigation } from '@react-navigation/native';
import { ModalLogin } from '../../components/ModalLogin';

interface DiscordInfos{
    username: string;
    id: string;
    discriminator: string;
    avatar: string;
}
export function Signin() {
    const [DiscordInfos, setDiscordInfos] = useState<DiscordInfos>();

    async function handleDiscordSignin() {
        const response = await AuthSession.startAsync({
            authUrl: 'https://discord.com/api/oauth2/authorize?client_id=1024387203952037889&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40m4rcotoni%2Fnlw-esports&response_type=token&scope=identify'

        })
        fetch('https://discord.com/api/users/@me', {
            headers:{
                'authorization': `Bearer ${response.params.access_token}`
            }
        }).then(response => response.json())
        .then(data => {setDiscordInfos(data)});

        
        console.log(''+JSON.stringify(DiscordInfos));
        
    }

    const navigation = useNavigation();
    function handleOpenHome() {
        navigation.navigate('home')
    }



    const [modalVisible, setModalVisible] = useState(false);

  return (
    <Background>
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo}
            source={logoImg}
            />
            <Heading
                title='Entrar' 
                subtitle='Encontre o seu duo e bora jogar'          
            />
            <ModalLogin
                visible={modalVisible}
                onClose={() => setModalVisible(!modalVisible)}           
                />
            <TouchableOpacity
                style={styles.button}
                onPress={handleDiscordSignin}
            >
                <Text style={styles.buttonTitle}>
                    Entrar com Discord
                </Text>

            </TouchableOpacity>

        </SafeAreaView>
      </Background>
  );
}