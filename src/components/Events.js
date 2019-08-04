import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import Pattern from '../styles/Pattern'

export default class Events extends Component {


    state = {
        text: '' // se iniciar com null = componente nao controlado
    }

    chageText = text => {
        this.setState({ text }); // could be { text: text }, but when the attr is the same doesn't need
    }

    render() {
        return (
            <View>
                <Text style={Pattern.fs40}>{this.state.text}</Text>
                <TextInput 
                    value={this.state.text}
                    style={Pattern.input}
                    onChangeText={this.chageText} // sem evento, componente controlado nao funciona
                >
                </TextInput>
            </View>
        )
    }
}