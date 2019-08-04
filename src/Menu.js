import React from 'react';
import { createDrawerNavigator } from'react-navigation';

import Simple from './components/Simple';
import OddCouple from './components/OddCouple';
import Inverse, { MegaSena } from './components/Multi';
import Counter from './components/Counter';
import Platforms from "./components/Platforms";
import PropsValidation from "./components/PropsValidation";

//criação do menu
export default createDrawerNavigator({
    PropsValidation: {
        screen: () => <PropsValidation label="Year: " year={19} />
    },
    Platforms: {
        screen: Platforms
    },
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