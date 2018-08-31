/** @format */

// export * from './src/index.js';

import {AppRegistry} from 'react-native';
import App from './App';
// import App from './src/index.js';
import {name as appName} from './app.json';

import DrawerMenu from './DrawerMenu';

import { StackNavigator, DrawerNavigator } from 'react-navigation';

// AppRegistry.registerComponent(appName, () => App);

const stackNavigator = StackNavigator({
    Info: { screen: App },
    // Settings: {screen: SettingsView },
    // Bookmark: {screen: BookmarkView },
    // Calendar: {screen: CalendarView},
    // Client: {screen: ClientView},
 }, {
    headerMode: 'none'
 });

 const easyRNRoute = DrawerNavigator({
    Home: {
      screen: App,
    },
    Stack: {
      screen: stackNavigator
    }
    }, {
      contentComponent: DrawerMenu,
      contentOptions: {
      activeTintColor: '#e91e63',
      style: {
        flex: 1,
        paddingTop: 15,
      }
    }
 });

 AppRegistry.registerComponent(appName, () => easyRNRoute);