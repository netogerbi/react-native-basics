import React from 'react';
import { View, Text } from 'react-native';
import Pattern from '../styles/Pattern';

// function oddOrCouple(num) {
//     if(num % 2 == 0) {
//         return <Text style={Pattern.ex}>Par</Text>
//     } else {
//         return <Text style={Pattern.ex}>Impar</Text>
//     }
// }

/**
 * 
 * @comment esta maneira se mostrou muito mais rápido
 */
function oddOrCouple(num) {
    const v = num % 2 === 0 ? 'Par' : 'Ímpar';
    return <Text style={Pattern.ex}>{v}</Text>
}

export default props =>
    <View>
        {oddOrCouple(props.num)}

        {/* {
            props.num % 2 == 0
            ? <Text style={Pattern.ex}>Par</Text>
            : <Text style={Pattern.ex}>Impar</Text>
        } */}
    </View>