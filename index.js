
/**
 * @format
 */
import { registerRootComponent } from "expo";
import {AppRegistry , Platform , StatusBar} from 'react-native';
import App from './App';
import {name as appName} from './app.json';



StatusBar.setBarStyle("light-content");
if (Platform.OS === "android") {
  StatusBar.setBackgroundColor("rgba(0,0,0,0)");
  StatusBar.setTranslucent(true);
}


if (Platform.OS == "android") {
    registerRootComponent(App);
  } else {
    AppRegistry.registerComponent(appName, () => App);
  }