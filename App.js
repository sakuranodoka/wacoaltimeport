/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image } from 'react-native';

import { StackNavigator, NavigationActions } from 'react-navigation';
import { COLOR, ThemeContext, getTheme, Button, Toolbar, Drawer, Avatar, Icon, Card, Divider, ActionButton } from 'react-native-material-ui';

import Container from './Container';

import PropTypes from 'prop-types';

import Asyncs from './Asyncs'

import Map from './Components/Map'

import Interactable from 'react-native-interactable'

import CollapsingHeaderWithScroll from './CollapsingHeaderWithScroll';

import Collapsed from './Collapsed';
import Collapser from './Collapser'

import TakePicture from './TakePicture'

import Facc from './Facc'
import Maininput from './Components/Stamp/maininput'

const uiTheme = {
  palette: {
    primaryColor: COLOR.blue200,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};

export default class App extends Component {
    
    constructor(props, context) {
        super(props, context)

        // console.log('imagepathf', this.props.navigation.getParam('imagepath'))
        // console.log('imagepathf', this.props.navigation.state.params)

        // console.log('imagepathl', Facc.getFacc())
        
        this.state = {
        //   active: 'Today',
          imagepath: Facc.getFacc().path,
        }
    }

    navigate() {
        console.log('imagepathc', '9696')
        this.props.navigation.navigate('DrawerOpen') // open drawer
    }

    nav() {
        this.props.navigation.navigate('CameraScreen', {cb: this.cb})
        // this.props.navigation.navigate('CameraScreen', {cb: this})
    }

    cb(data) {
        console.log('imagepathc', data.uri)
        // this.ps = data.uri
        // this.componentDidMount(data.uri)
        // this.setState({imagepath: data.uri})
    }

    returnData(imagepath) {
        
        this.state.imagepath = imagepath

        // this.props.navigation.dispatch(NavigationActions.back())
        // this.setState({imagepath: imagepath});
    }

    render() {
        this.props.navigation.pop
        return (
            <ThemeContext.Provider value={getTheme(uiTheme)}>

            <Toolbar
                leftElement="menu"
                onLeftElementPress={() => this.navigate()}
                centerElement="Application"
                searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                }}
            />

            <Button onPress={() => { this.props.navigation.navigate('Place') }} text="Click me" />

            {/* <Collapser containers={this} /> */}

            {/* <View>
                <Button text="" style={{ container:{position:'absolute', zIndex: 1, marginTop:2, backgroundColor: 'transparent'}}} icon="menu" onPress={() => this.navigate()} />
                <Map style={{zIndex: 0, elevation: 5,}} />
                <ActionButton icon="camera" style={{container:{backgroundColor:'#73b1d6', width: 48, height: 48, top:43, elevation: 5,}}} onPress={() => this.nav()} /> 
            </View>
            <Divider style={{elevation: 15,height: 5,}} /> */}

            {/* <Image
                style={{width: 150, height: 150,  alignSelf: 'center', marginTop: 3, }}
                source={{uri: this.state.imagepath}}
                resizeMode="stretch"
            />

            <Maininput /> */}
            
            {/* <Icon name="menu" style={{ zIndex: 1, margin: 2}} onPress={() => this.navigate()} /> */}

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

            

            {/* <Asyncs/> */}

            {/* <Collapsed /> */}

            {/* <TakePicture /> */}

            {/* <Button primary text="Take Photo" onPress={() => this.nav()} /> */}

            {/* <View>
                <Text>Hello world!</Text>
                <Divider/>
            </View> */}
                
            </ThemeContext.Provider>
        );
    }
}