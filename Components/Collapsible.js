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

import { NavigationActions } from 'react-navigation'

import { COLOR, ThemeContext, getTheme, Button, Toolbar, Drawer, Avatar, Icon, Card, Divider, ActionButton } from 'react-native-material-ui';

import Map from './Map'

import Loader from './Loader';

// const HEADER_MAX_HEIGHT = 300;
const HEADER_MAX_HEIGHT = 230;
// const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;

const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 140;
// const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 0 : 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class Collapsible extends Component {

    constructor(props) {
        super(props)

        this.state = {
            scrollY: new Animated.Value(
                Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
            ),
            refreshing: false,

            loading: true, 

            // imagepath: Facc.getFacc().path, 

            region: {
                // # Default latitude
                latitude: 13.69,

                // # Default Longitude
                longitude: 100.53,
                latitudeDelta:  0.00922*1.5,
                longitudeDelta: 0.00421*1.5,
            },
        }
    }

    onLocationChanged(region) {
        this.setState({region : region})

        // this.props.containers.getLocation(this.state.region)
        if (typeof this.props.containers.getLocation !== 'undefined') {
            this.props.containers.getLocation(this.state.region)
        }
    }

    maincontent() {

        return (
            <View style={styles.scrollViewContent}>
                {/* <Loader
                    loading={this.state.loading} /> */}

                {this.props.children}
            </View>
        )
    }

    render() {
        const scrollY = Animated.add(
            this.state.scrollY,
            Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
        );
        const headerTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -HEADER_SCROLL_DISTANCE],
            extrapolate: 'clamp',
        });

        const imageOpacity = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp',
        });
        const imageTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 100],
            extrapolate: 'clamp',
        });

        const titleScale = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0.8],
            extrapolate: 'clamp',
        });
        const titleTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 0, -8],
            extrapolate: 'clamp',
        });

        return (
            <View style={styles.fill}>
                <Animated.ScrollView
                    style={styles.fill}
                    scrollEventThrottle={1}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                        { useNativeDriver: true },
                    )}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={() => {
                                this.setState({ refreshing: true });
                                setTimeout(() => this.setState({ refreshing: false }), 1000);
                            }}
                            // Android offset for RefreshControl
                            progressViewOffset={HEADER_MAX_HEIGHT}
                        />
                    }
                    // iOS offset for RefreshControl
                    contentInset={{
                        top: HEADER_MAX_HEIGHT,
                    }}
                    contentOffset={{
                        y: -HEADER_MAX_HEIGHT,
                    }}>
                    {this.maincontent()}
                </Animated.ScrollView>
            
                <Animated.View
                    // pointerEvents="none" (อันนี้คือ อยากให้ Googlemaps เลื่อนได้ไหมละ ?)
                    style={[
                        styles.header,
                        { transform: [{ translateY: headerTranslate }] },
                    ]}>

                    {/* View ตรงนี้คือส่วนของ Google Map เดี๋ยวทำเป็น child แยกไปอีกที */}
                    <View>
                        <Button text="" style={{ container:{position:'absolute', zIndex: 1,width: 60, height: 60, marginTop: -4, backgroundColor: 'transparent'}}} icon="menu" onPress={() => this.props.containers.props.navigation.navigate('DrawerOpen') } />
                        
                        <Map style={{zIndex: 0,}} region={this.state.region} onLocationChanged={this.onLocationChanged.bind(this)} />
                    </View>
                    {/* <Divider style={{container:{elevation: 1,}}} />     */}

                </Animated.View>

                <Animated.View
                    style={[styles.header,]}
                        //   style={[
                        //     styles.bar,
                        //     {
                        //       transform: [
                        //         { scale: titleScale },
                        //         { translateY: titleTranslate },
                        //       ],
                        //     },
                        //   ]}
                    >
                    {/* <Text style={styles.title}>Title</Text> */}
                    <View>
                        <ActionButton icon="camera" style={{container:{backgroundColor:'steelblue', width: 48, height: 48, top:HEADER_MAX_HEIGHT + 34, elevation: 5, zIndex: 3}}} onPress={() => this.props.containers.fabAction()} /> 
                    </View>
                </Animated.View>
            </View>
        )
    }

    // componentDidMount() {
    //     if (typeof this.props.containers.getLocation !== 'undefined') {
    //         this.props.containers.getLocation(this.state.region)
    //     }
    // }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,

    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
    
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  bar: {
    backgroundColor: 'transparent',
    // marginTop: Platform.OS === 'ios' ? 28 : 38,
    height: 32,
    // height: 0,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
    zIndex: 2,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});