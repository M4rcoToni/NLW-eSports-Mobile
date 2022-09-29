import React, { useState } from 'react';
import { Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/background';
import logoImg  from '../../assets/logo-nlw-esports.png';

import { styles } from './styles';
import { Heading } from '../../components/Heading';
// import { GameController } from 'phosphor-react-native';
import { ModalLogin, ModalLoginProps } from '../../components/ModalLogin';
import { LoginButton } from '../../components/LoginButton';


export function Signin() {


  return (
    <Background>
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo}
            source={logoImg}
            />
            <Heading
                title={'Entrar'} 
                subtitle='Encontre o seu duo e bora jogar'          
            />
            
            <LoginButton
                
            />
              
        </SafeAreaView>
      </Background>
  );
}