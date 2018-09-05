/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import Container from '../../Container';

export default class Map extends Component {

    constructor (props) {
        super(props)
        this.state = {
            isMapReady: false,
            region: {
                latitude: 13.69,
                longitude: 100.53,
                latitudeDelta: 0.02,
                longitudeDelta: 0.02
            }
        }
    }

    onMapLayout = () => {
        this.setState({ isMapReady: true });
    }

    render() {
        return (
            
                <MapView
                    style={styles.map}
                    region={this.state.region}
                    onLayout={this.onMapLayout}
                    loadingEnabled={true} 
                    zoomLevel={18}
                >

                    <Marker
                        coordinate={this.state.region}
                        title={"hello"}
                        description="This is description."
                        />

                </MapView>
            
        );
    }
}

const width = Dimensions.get('window').width
const height = 200

const styles = StyleSheet.create({
    map: {
        height: 280,
        width: 370,
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
})


