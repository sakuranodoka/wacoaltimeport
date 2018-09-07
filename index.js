/** @format */

// export * from './src/index.js';

import {AppRegistry} from 'react-native';
import App from './App';
// import App from './src/index.js';
import {name as appName} from './app.json';

import DrawerMenu from './DrawerMenu';

import { StackNavigator, DrawerNavigator } from 'react-navigation';
import TakePicture from './TakePicture';

import AppCameraTest from './AppCameraTest'

import Tcp from './Tcp'

import Facc from './Facc'

// AppRegistry.registerComponent(appName, () => App);

const stackNavigator = StackNavigator({
    Info: { screen: App },
    // Settings: {screen: SettingsView },
    // Bookmark: {screen: BookmarkView },
    // Calendar: {screen: CalendarView},
    // Client: {screen: ClientView},
    // CameraScreen: {screen: AppCameraTest}, 
    // CameraScreen: {screen: Facc}, 
 }, {
    headerMode: 'none'
 });

 const easyRNRoute = DrawerNavigator({
    Home: {
      screen: App,
    },
    CameraScreen: {
      screen: Facc
    }, 
    Stack: {
      screen: stackNavigator
    }
    }, {
      contentComponent: DrawerMenu,
      contentOptions: {
      // activeTintColor: '#e91e63',
      // style: {
      //   flex: 1,
      //   paddingTop: 15,
      // }
    }
 });

 AppRegistry.registerComponent(appName, () => easyRNRoute);