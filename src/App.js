import React from 'react';
import { View, StyleSheet } from 'react-native';

import Simple from './components/Simple';
import OddCouple from './components/OddCouple';
import Inverse, { MegaSena } from './components/Multi';

// https://github.com/netogerbi/react-native-basics

// export default function() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.f40}>APP!!</Text>
//     </View>
//   )
// }


export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Simple text='Flexível!!!'/>
        <OddCouple num={11} />
        <Inverse text="React Nativo!!!"/>
        <MegaSena numeros={8} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});