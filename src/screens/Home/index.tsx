import { Image , FlatList, TouchableOpacity} from 'react-native';

import logoImg  from '../../assets/logo-nlw-esports.png';

import { GameCard ,GameCardPros} from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import { styles } from './styles';
import React, { useEffect, useState } from 'react';
import { Entypo } from "@expo/vector-icons";

import { SafeAreaView} from 'react-native-safe-area-context';
import { Background } from '../../components/background';
import { useNavigation } from '@react-navigation/native';
import { THEME } from '../../theme';

export function Home() {

  const [games, setGames] = useState<GameCardPros>([]); 
  const navigation = useNavigation();
  function handleGoBack (){
    navigation.goBack();
    }
  
  async function handleOpenGame ({id, title, bannerURL}:GameCardPros ){
    navigation.navigate("game", {id, title, bannerURL});
  }
  useEffect(() => {
    fetch('http://192.168.0.102:3333/games') // alterar o ip para o do seu computador
    .then(response => response.json())
    .then(data => {setGames(data)})
  },[])


  return (
    <Background>
    <SafeAreaView style={styles.header}>
        <TouchableOpacity
          onPress={handleGoBack}
          style={styles.header}
        >
          <Entypo
            name="chevron-thin-left"
            color={THEME.COLORS.CAPTION_300}
            size={20}
          />
        </TouchableOpacity>
      </SafeAreaView>

    <SafeAreaView style={styles.container}>
       

      <Image 
      source={logoImg}
      style={styles.logo}
      />
      <Heading
      title="Encontre seu duo!"
      subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={games}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
        <GameCard
            data={item}
            onPress={() => handleOpenGame(item)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />

      
    </SafeAreaView>
    </Background>
  );
}