/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Navigator, NativeModules} from 'react-native';

import { StackNavigator } from 'react-navigation';
import { COLOR, ThemeContext, getTheme, Button, Toolbar, Drawer, Avatar } from 'react-native-material-ui';

import Container from './Container';

import PropTypes from 'prop-types';

import Map from './Components/Map'

import Interactable from 'react-native-interactable'

import CollapsingHeaderWithScroll from './CollapsingHeaderWithScroll';

import Collapsed from './Collapsed';

import TakePicture from './TakePicture'

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};

export default class App extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
          active: 'Today',
        };
    }

    // static navigationOptions = {
    //     title: 'Menu',
    // };

    navigate() {
        this.props.navigation.navigate('DrawerOpen'); // open drawer
    }

    nav() {
        this.props.navigation.navigate('CameraScreen');
    }

    render() {
        return (
            <ThemeContext.Provider value={getTheme(uiTheme)}>

            <Toolbar
                leftElement="menu"
                onLeftElementPress={() => this.navigate()}
                centerElement="Sleepier"
                searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                }}
            />

            {/* <Interactable.View
                verticalOnly={true}
                snapPoints={[{y: 0}, {y: 200}]}
                onSnap={this.onDrawerSnap}> */}

                {/* <Map style={{flex:1, height: 400, width: 400}} />

                <View style={{flex:2,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#F5FCFF',}}>
                                        <Text style={{
                        fontSize: 20,
                        textAlign: 'center',
                        margin: 10,
                    }}>Welcome to React Native!</Text>
                                        <Text style={{
                        textAlign: 'center',
                        color: '#333333',
                        marginBottom: 5,
                    }}>To get started, edit App.js</Text>
                                        <Text style={{
                        textAlign: 'center',
                        color: '#333333',
                        marginBottom: 5,
                    }}>To get started, edit App.js</Text>
                </View> */}

            {/* </Interactable.View> */}
                
            {/* <Toolbar
                leftElement="menu"
                onLeftElementPress={() => this.navigate()}
                centerElement="Sleepier"
                searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                }}
            /> */}

            {/* <CollapsingHeaderWithScroll /> */}

            <Collapsed />

            {/* <TakePicture /> */}

            <Button primary text="Take Photo" onPress={() => this.nav()} />
                
            </ThemeContext.Provider>
            // <ThemeContext.Provider value={getTheme(uiTheme)}>

            // </ThemeContext.Provider>

            //     <Toolbar
            //         leftElement="menu"
            //         onLeftElementPress={() => this.navigate()}

            //         centerElement="Application"

            //         searchable={{
            //             autoFocus: true,
            //             placeholder: 'Search',
            //         }}
            //         rightElement={{
            //             menu: {
            //                 icon: "more-vert",
            //                 labels: ["item 1", "item 2", "ss"]
            //             }
            //         }}
            //         onRightElementPress={ (label) => { console.log(label) }}
            //         />
            // </ThemeContext.Provider>
        );
    }
}