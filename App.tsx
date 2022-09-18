import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { StatusBar } from 'react-native';

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold, 
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';


import {Routes} from './src/routes';
import { Background } from './src/components/background';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] =useFonts({
    Inter_400Regular,
    Inter_600SemiBold, 
    Inter_700Bold,
    Inter_900Black
  });

  return (
    <Background>
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
      {fontsLoaded? <Routes/>: <Loading/>}
    </Background>
  );
}




interface ButtonProps{
  title: string;
}

function Button(props: ButtonProps)
{
  return (
    <TouchableOpacity>
      <Text style={styles.colorbutton}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorbutton: {
    color: 'red',
  }
});
