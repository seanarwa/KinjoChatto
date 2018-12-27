/** @format */

import { AppRegistry } from 'react-native';
import App from './App.js';
import { name as appName} from './app.json';

import TestMain from './app/_TEST_/Main.js';


AppRegistry.registerComponent(appName, () => TestMain);
