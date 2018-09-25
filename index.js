
import {AppRegistry, Animated, Easing} from 'react-native';
import App from './App';

import {name as appName} from './app.json';

import DrawerMenu from './DrawerMenu';

import { StackNavigator, DrawerNavigator } from 'react-navigation';

import CameraView from './Components/Camera'

import Place from './Components/Place'

// const transitionConfig = () => {
//     return {
//         transitionSpec: {
//         duration: 750,
//         easing: Easing.out(Easing.poly(4)),
//         timing: Animated.timing,
//         useNativeDriver: true,
//         },
//         screenInterpolator: sceneProps => {
//             const { position, layout, scene, index, scenes } = sceneProps
//             const toIndex = index
//             const thisSceneIndex = scene.index
//             const height = layout.initHeight
//             const width = layout.initWidth

//             const translateX = position.interpolate({
//             inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
//             outputRange: [width, 0, 0]
//             })

//             // Since we want the card to take the same amount of time
//             // to animate downwards no matter if it's 3rd on the stack
//             // or 53rd, we interpolate over the entire range from 0 - thisSceneIndex
//             const translateY = position.interpolate({
//             inputRange: [0, thisSceneIndex],
//             outputRange: [height, 0]
//             })

//             const slideFromRight = { transform: [{ translateX }] }
//             const slideFromBottom = { transform: [{ translateY }] }

//             const lastSceneIndex = scenes[scenes.length - 1].index

//             // Test whether we're skipping back more than one screen
//             if (lastSceneIndex - toIndex > 1) {
//             // Do not transoform the screen being navigated to
//             if (scene.index === toIndex) return
//             // Hide all screens in between
//             if (scene.index !== lastSceneIndex) return { opacity: 0 }
//             // Slide top screen down
//             return slideFromBottom
//             }

//             return slideFromRight
//         },
//     }
// }

import PlaceList from './Components/Place/list.js'

import Attendance from './Components/Attendance'

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
        // transitionConfig,  
        // initialRouteParams: { transition: 'fade' },
        // transitionConfig: TransitionConfig, 
        // transitionConfig
    }, 
)

var AttendenceStack = StackNavigator(
    {
        'Info' : {
            screen: Attendance
        }, 
        'PlaceList': {
            screen: PlaceList
        }
    }, 
    { 
        headerMode: 'none', 
        initialRouteName: 'Info'
    }
)

 const easyRNRoute = DrawerNavigator(
    {
        Home: {
            screen: App,
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
        'AttendanceStack' : {
            screen: AttendenceStack, 
        },
        // 'PlaceList' : {
        //     screen: PlaceList
        // }
    }, {
        // initialRouteName: 'Home',
        contentComponent: DrawerMenu,
        contentOptions: {
            // activeTintColor: '#e91e63',
            // style: {
            //   flex: 1,
            //   paddingTop: 15,
            // }
        }, 
        
 })

 AppRegistry.registerComponent(appName, () => easyRNRoute);