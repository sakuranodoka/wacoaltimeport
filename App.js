/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Navigator, NativeModules} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import { COLOR, ThemeContext, getTheme, Button, Toolbar, Drawer, Avatar } from 'react-native-material-ui';

import Container from './Container';

import PropTypes from 'prop-types';

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

    static navigationOptions = {
        title: 'Menu',
    };

    navigate() {
        this.props.navigation.navigate('DrawerOpen'); // open drawer
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

// App.propTypes = propTypes;


