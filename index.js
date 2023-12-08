/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {SocialLogin} from './src/context/SocialLogin';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

AppRegistry.registerComponent(appName, () => {
  initialAppSetup();
  return App;
});

const initialAppSetup = () => {
  SocialLogin.configure();
};
