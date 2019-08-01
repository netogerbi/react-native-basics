import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class Counter extends Component {

    state = {
        num: this.props.initialNumber,

    }

    oneMore = () => {this.setState({ number: this.state.num ++ });}

    clear = () => this.setState({ num: 0 });

    render() {
        return (
            <View>
                <Text style={{fontSize: 40}}>Contador: {this.state.num}</Text>

                <TouchableHighlight onPress={this.oneMore} onLongPress={this.clear}>
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}