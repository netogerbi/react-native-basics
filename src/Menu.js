import React from 'react';
import { createDrawerNavigator } from'react-navigation';

import Simple from './components/Simple';
import OddCouple from './components/OddCouple';
import Inverse, { MegaSena } from './components/Multi';
import Counter from './components/Counter';
import Platforms from "./components/Platforms";
import PropsValidation from "./components/PropsValidation";
import Events from "./components/Events";


//criação do menu
export default createDrawerNavigator({
    Events: {
        screen: Events, // nao precisa de parametro, pode ser somente nome do componente
        navigationOptions: { title: 'Eventos' }
    },
    PropsValidation: {
        screen: () => <PropsValidation label="Year: " year={19} />,
        navigationOptions: { title: 'Validação de Propriedades'}
    },
    Platforms: {
        screen: Platforms,
        navigationOptions: { title: 'Plataformas'}
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