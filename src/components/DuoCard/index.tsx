import React from 'react';
import { TouchableOpacity, View , Text} from 'react-native';
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

export interface DuoCardProps {
  length: number;
    id: string,
    hoursEnd: string, 
    hoursStart: string, 
    useVoiceChannel: boolean,
     name: string, 
     weekDays: string[], 
     yearsPlayng: number
}
interface CardProps{
    data: DuoCardProps;
    onConect: ()=> void;
}

export function DuoCard({data, onConect}: CardProps) {

    return (
        <View style={styles.container}>
            <DuoInfo
                label='Nome'
                value={data.name}
            />
            <DuoInfo
                label='Tempo de jogo'
                value={`${data.yearsPlayng} anos`}
            />
            <DuoInfo
                label='Disponibilidade'
                value={`${data.weekDays.length} dias \u2022 ${data.hoursStart} - ${data.hoursEnd}`}
            />
            <DuoInfo
                label='Chama de áudio?'
                value={data.useVoiceChannel ? 'Sim' : 'Não'}
                colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS :THEME.COLORS.ALERT}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={onConect}
            >
                <Text style={styles.buttonTitle}>
                    Conectar
                </Text>
            </TouchableOpacity>
        </View>
    );
}