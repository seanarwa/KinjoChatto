/** @format */

import {AppRegistry} from 'react-native';
import Main from './app/views/Main.js';
import TestMain from './app/_TEST_/Main.js';
import {name as appName, debug} from './app.json';


AppRegistry.registerComponent(appName, () => (debug ? TestMain : Main));
