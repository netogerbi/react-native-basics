import React from 'react';
import { View, StyleSheet } from 'react-native';

import Simple from './components/Simple';
import OddCouple from './components/OddCouple';

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
        <OddCouple num={11}></OddCouple>
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