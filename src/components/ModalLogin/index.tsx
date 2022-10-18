import React, { useState } from 'react';
import { View, Modal, Text, Alert, TouchableOpacity, ModalProps, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../theme';
import { useNavigation } from '@react-navigation/native';


export interface ModalLoginProps extends ModalProps {
    username: string;
    discriminator: string;
    avatar: string;
    id: string;
    onClose: () => void;
}
export function ModalLogin({ onClose, username, discriminator, avatar, id, ...rest }: ModalLoginProps) {
    const navigation = useNavigation();

    function handleOpenHome() { 
        onClose();
        navigation.navigate('home');
    }

    return (
        <Modal
            animationType='fade'
            transparent
            statusBarTranslucent
            {...rest}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity
                        style={styles.closeIcon}
                        onPress={onClose}
                    >
                        <MaterialIcons
                            name="close"
                            size={20}
                            color={THEME.COLORS.CAPTION_500}
                        />
                    </TouchableOpacity>
                    <Text style={styles.label}>
                        Seja bem vindo!
                    </Text>
                    <Image style={styles.fotologo}
                        source={{ uri: `https://cdn.discordapp.com/avatars/${id}/${avatar}.png` }}
                    />

                    <Text style={styles.username}>
                        {username}#{discriminator}
                    </Text>

                    <TouchableOpacity
                        style={styles.btnhome}
                        onPress={handleOpenHome}
                    >
                        <Text style={styles.buttonTitle}>
                            Continuar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}