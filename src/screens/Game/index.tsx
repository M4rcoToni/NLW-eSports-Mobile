import { FlatList, Image ,TouchableOpacity, View , Text} from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import logoImg from "../../assets/logo-nlw-esports.png";

import { styles } from './styles';
import { THEME } from '../../theme';


import { GameParams } from '../../@types/navigation';
import { Background } from '../../components/background';

import { Heading } from '../../components/Heading'; 
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import React, { useEffect, useState } from 'react';
import { DuoMacth } from '../../components/DuoMacth/indes';

export function Game() {

  const [duos , setDuos ] =  useState<DuoCardProps>([]);
  const [discordDuoSelected , setDiscordDuoSelected] = useState('');
  const route = useRoute();
  const game = route.params as GameParams;
  
  const navigation = useNavigation();
  
  function handleGoBack (){
  navigation.goBack();
  }
 async function getDiscordUser(adsId: string) {
  fetch(`http://192.168.0.102:3333/ads/${adsId}/discord`)  // alterar o ip para o do seu computador
    .then(response => response.json())
    .then(data => {setDiscordDuoSelected(data.discord)})
 }

  useEffect(() => {
    fetch(`http://192.168.0.102:3333/games/${game.id}/ads`)  // alterar o ip para o do seu computador
    .then(response => response.json())
    .then(data => {setDuos(data)})
  },[])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image
            source={logoImg}
            style={styles.logo}
          />
          
          <View style={styles.right} />
        </View>
        
        <Image 
        source={{uri: game.bannerURL}}
        style={styles.cover}
        resizeMode="cover"
        />


        <Heading
          title={game.title}
          subtitle='Conecte-se e comece a jogar!'
          />
          <FlatList
            data={duos}
            keyExtractor={ item => item.id}
            renderItem={({item }) =>(
              <DuoCard 
              data={item} 
              onConect={()=> getDiscordUser(item.id) }
              />
            )}
            horizontal
            styles={styles.containerList}
            contentContainerStyle={[ duos.length > 0 ? styles.contentList : styles.emptyListContent]}
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent= {() => (
              <Text style={styles.emptyListText}>
                Não há anúncios publicados ainda.
              </Text>
            )}
          />
          <DuoMacth
            visible={discordDuoSelected.length > 0}
            discord={discordDuoSelected}
            onClose={() => setDiscordDuoSelected('')}
          />
      </SafeAreaView>
    </Background>
  );
}