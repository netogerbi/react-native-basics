import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class Counter extends Component {

    state = {
        num: this.props.initialNumber,

    }

    constructor(props) {
        super(props);

        // pode-se inicializar o estado no constutor
        // this.state = {/* ... */}

        // utilizando o bind no construtor pode-se chamar a função como abaixo 'oneMore(){}'
        // desta forma se vincula o objeto do tipo Couter à função oneMore
        // caso nao se utilize o bind, pode-se chamar a função da seguinte forma: 'onPress={() => this.oneMore()}'
        this.oneMore = this.oneMore.bind(this); // 'this' representa uma instancia de contador
    }

    oneMore() { // criando a função tradicional, o this se refere a quem chamou a função, no caso o 'onPress', o que resulta em erro! para isso utiliza-se o bind acima
        this.setState({ number: this.state.num ++ });
    }

    // usando arrow function, o escopo da função é a instancia atual
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