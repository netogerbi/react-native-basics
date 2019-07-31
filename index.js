/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './src/App'; antes do menu, era apontado para o app
import {name as appName} from './app.json';

import Menu from './src/Menu';

AppRegistry.registerComponent(appName, () => Menu); // aponta inicialmente para menu
