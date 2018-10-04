import React, { Component } from 'react';
import {
  Animated,
  Platform,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  Image, 
} from 'react-native';


import { COLOR, ThemeContext, getTheme, Button, Toolbar, Drawer, Avatar, Icon, Card, Divider, ActionButton } from 'react-native-material-ui';

const uiTheme = {
    palette: {
        primaryColor: COLOR.blue200,
    },
    toolbar: {
        container: {
        height: 50,
        },
    },
}

export default class ToolbarComponent extends Component {

    constructor(props) {
        super(props)
    }

    onBackPressed = () => {
        // console.log('imagepathLLSSD', this.props.containers.props.navigation)

        console.log('imagepathendedsd', this.props.navigation)

        if (typeof this.props.containers.props.screenProps === 'undefined') {
            this.props.containers.props.navigation.goBack(null)
        } else {
            this.props.containers.props.screenProps.goBack(null)
        }

        // this.props.navigation.goBack(null)

        // if (this.props.containers.props.navigation !== null)
        //     this.props.containers.props.navigation.goBack(null)
        // else this.props.containers.props.screenProps.goBack(null)
    }

    render() {
    
        return (
            <ThemeContext.Provider value={getTheme(uiTheme)}>

                <Toolbar
                    leftElement="arrow-back"
                    // onLeftElementPress={() => { this.props.containers.props.navigation.navigate('DrawerOpen')} }
                    onLeftElementPress={() => this.onBackPressed() }
                    centerElement={this.props.title ? this.props.title : 'Application'}
                    searchable={{
                        autoFocus: true,
                        placeholder: 'Search',
                    }}
                />

                {this.props.children}

            </ThemeContext.Provider>
        )
    }
}