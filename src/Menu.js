import React from 'react';
import { createDrawerNavigator } from'react-navigation';

import Simple from './components/Simple';
import OddCouple from './components/OddCouple';
import Inverse, { MegaSena } from './components/Multi';
import Counter from './components/Counter';

//criação do menu
export default createDrawerNavigator({
    Counter: {
        screen: () => <Counter initialNumber={100} />, // retorna o componente
        navigationOptions: { title: 'Contador'} // titulo no menu
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />, // retorna o componente
        navigationOptions: { title: 'Mega Senha'} // titulo no menu
    },
    Inverse: {
        screen: () => <Inverse text="React Nativo!!!"/>,
        navigationOptions: { title: 'Inverter'}
    },
    OddCouple: {
        screen: () => <OddCouple num={11} />,
        navigationOptions: { title: 'Par ou Ímpar'}
    },
    Simple: {
        screen: () => <Simple text='Flexível!!!'/>,
        navigationOptions: { title: 'Simples'}
    }
}, { drawerWidth: 300 } ); // largura do menu