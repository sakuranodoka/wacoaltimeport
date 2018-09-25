/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {View, StyleSheet, StatusBar} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import { COLOR, Drawer, Avatar, getTheme, Icon, Button, ThemeContext, Toolbar } from 'react-native-material-ui';

import PropTypes from 'prop-types';

import Container from './Container';

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
        accentColor: COLOR.pink500,
      },
    // toolbar: {
    //     container: {
    //         height: 50,
    //         paddingTop: 0,
    //         backgroundColor: '#1cbb9b', 

    //         shadowColor: 'transparent',
    //         shadowOffset: { width: 0, height: 0 },
    //         shadowOpacity: 0,
    //         shadowRadius: 0,
    //         elevation: 0,
    //     },
    // },
    drawerHeaderAccount: {
        container: {
            backgroundColor: '#1cbb9b'
        }, 
        avatarsContainer : {
            opacity: 0,
            height: 0,
            padding: 0,
            margin: 0,
        }
    },
};

export default class DrawerMenu extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            active: 'people',
          };
      }
    
    _setInfoActive() {
        this.setState({ active: 'info' });
    }

    render() {
      return (
        <ThemeContext.Provider value={getTheme(uiTheme)}>
            <Container>
                {/* <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent /> */}
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.navigate('DrawerClose')}
                    centerElement=""
                    style={{
                        container:{height: 50,
                        paddingTop: 0,
                        backgroundColor: '#1cbb9b', 
            
                        shadowColor: 'transparent',
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0,
                        shadowRadius: 0,
                        elevation: 0,
                    }}}
                />
                <View style={styles.container}>
                    <Drawer>
                        <Drawer.Header>
                            {/* <Toolbar
                                leftElement="arrow-back"
                                onLeftElementPress={() => this.props.navigation.navigate('DrawerClose')}
                                centerElement=""
                            /> */}
                            <Drawer.Header.Account 
                                // avatar={<Avatar text="A" />}
                                // avatar={null}
                                
                                avatar={<Avatar icon="person" iconSize={1} size={1} />}

                                // accounts={[
                                //     { avatar: <Avatar text="B" /> },
                                //     { avatar: <Avatar text="C" /> },
                                // ]}
                                footer={{
                                    dense: true,
                                    centerElement: {
                                        primaryText: 'Athikom',
                                        secondaryText: 'atikom.sn@gmail.com',
                                    },
                                    // rightElement: 'arrow-drop-down',
                                }}
                            />
                        </Drawer.Header>
                        <Drawer.Section
                            divider
                            title="Place"
                            items={[
                                { 
                                    icon: 'add', value: 'เพิ่มสถานที่', 
                                    onPress: ((e) => { 
                                        this.props.navigation.navigate('Place')
                                    }) 
                                },
                                // { icon: 'settings', value: 'Settings' },
                            ]}
                            // onPress={(e) => {
                            //     console.log('imagepathFS', 'eeeff') 
                            //     this.props.navigation.navigate('DrawerClose')
                            // }}
                        />
                        <Drawer.Section
                            divider
                            title="Recording"
                            items={[
                                { 
                                    icon: 'bookmark-border', value: 'บันทึกเวลาเข้า', 
                                    onPress: ((e) => { 
                                        this.props.navigation.navigate('AttendanceStack', { action : 'check-in'})
                                    })
                                },
                                // { icon: 'bookmark-border', value: 'บันทึกเวลาเข้า' },
                                { icon: 'today', value: 'บันทึกเวลาออก' },
                                { icon: 'people', value: 'ประวัติการบันทึกเวลา' },
                                // { icon: 'today', value: 'Calendar', active: true },
                                // { icon: 'people', value: 'Clients' },
                            ]}
                        />
                        <Drawer.Section
                            title="Personal"
                            items={[
                                { icon: 'info', value: 'Info' },
                                { icon: 'settings', value: 'Settings' },
                            ]}
                        />
                    </Drawer>
                </View>
            </Container>
        </ThemeContext.Provider>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E91E63',
    },
    header: {
        backgroundColor: '#e91e63',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        },
    instructions: {
        textAlign: 'center',
        color: '#e91e63',
        marginBottom: 5,
    },
    av: {

    }
});
