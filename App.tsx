import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { StatusBar } from 'react-native';

import { Background } from './src/components/background';

export default function App() {
  return (
    <Background>
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
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
