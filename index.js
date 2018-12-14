
import {AppRegistry, Animated, Easing} from 'react-native';

import App from './App';

import {name as appName} from './app.json';

import DrawerMenu from './DrawerMenu';

import { StackNavigator, DrawerNavigator } from 'react-navigation';

import React from 'react';

import CameraView from './Components/Camera'

import Place from './Components/Place'

import PlaceList from './Components/Place/list.js'

import Attendance from './Components/Attendance'

import Timelines from './Components/Timelines'

const stackPlace = StackNavigator(
    {
        'Info' : {
            screen: Place
        }, 
        'CameraScreen': {
            screen: CameraView
        }
    }, 
    { 
        headerMode: 'none', 
        initialRouteName: 'Info',
    }, 
)

var AttendenceStack = StackNavigator(
    {
        'Info' : {
            screen: Attendance, 
        }, 
        'PlaceList': {
            screen: PlaceList
        }
    }, 
    { 
        headerMode: 'none', 
        // initialRouteName: 'Info', 
        // navigationOptions: {
        //     gesturesEnabled: false,
        // },
        // transitionConfig: () => animator,
        
    }
)

 const easyRNRoute = DrawerNavigator(
    {
        Home: {
            screen: App,
            // transitionConfig: () => animator,
        },
        // CameraScreen: {
        //     screen: Facc
        // }, 
        // Stack: {
        //     screen: stackNavigator
        // }, 
        'Place' : {
            screen: stackPlace, 
        },
        // 'AttendanceStack' : {
        //     screen: AttendenceStack, 
        // },
        
        'AttendanceStack' : { 
            screen:({navigation}) => <AttendenceStack screenProps={navigation}/> , 
            
        }, 
        'PreAttendanceStack' : { screen: AttendenceStack }, 

        'Timelines' : {
            screen: Timelines,
        },

    }, {
        // initialRouteName: 'Home',
        
        contentComponent: DrawerMenu,
        contentOptions: {
            // transitionConfig: () => animator,
            // activeTintColor: '#e91e63',
            // style: {
            //   flex: 1,
            //   paddingTop: 15,
            // }
        }, 
 })

 const animator = {
    transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps
        const { index } = scene

        const height = layout.initHeight;
        const translateY = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [height, 0, 0],
        })

        const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index],
            outputRange: [0, 1, 1],
        })

        return { opacity, transform: [{ translateY }] }
    },
}

 AppRegistry.registerComponent(appName, () => easyRNRoute);