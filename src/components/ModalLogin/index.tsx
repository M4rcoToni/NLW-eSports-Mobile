import React, { useState } from 'react';
import { View, Modal, Text, Alert, TouchableOpacity, ModalProps, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../theme';

export interface ModalLoginProps extends ModalProps{
    username:string;
    discriminator:string;
    avatar:string;
    id:string;
}
interface Props{
    visible: boolean;
    data: ModalLoginProps;
    onClose: ()=> void;
}
export function ModalLogin({ onClose,  data,...rest }: Props) {

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

                        <Image
                            source={{uri: data.avatar}}
                        />
                        <Text style={styles.label}>
                            Seja bem vindo!
                        </Text>
                        <Text>
                            {data.username}#{data.discriminator}
                        </Text>

                        <TouchableOpacity 
                            style={styles.button}
                            >
                        </TouchableOpacity>

                    </View>
                </View>

            </Modal>
    );
}