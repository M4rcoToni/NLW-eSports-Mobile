import React, { useState } from 'react';
import { View, Modal, Text, Alert, TouchableOpacity, ModalProps, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../theme';

interface Props extends ModalProps{
    onClose: ()=> void;
    name: string;
    photo: string;
}
export function ModalLogin({ onClose, name, photo, ...rest }: Props) {
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
                            source={{uri: photo}}
                        />
                        <Text style={styles.label}>
                            Seja bem vindo!
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