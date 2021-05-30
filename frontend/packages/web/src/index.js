
import { AppRegistry } from 'react-native';
import {App} from '@wow/common'

AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });