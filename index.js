/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App/App';
import { name as appName } from './app.json';
import { makeServer } from './App/Service/mirage';
makeServer();


AppRegistry.registerComponent(appName, () => App);
