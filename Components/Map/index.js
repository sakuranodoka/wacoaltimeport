/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Dimensions, StyleSheet, PermissionsAndroid} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default class Map extends Component {

    constructor (props) {
        super(props)

        this.state = {
            isMapReady: false,
            region: this.props.region, 
        }
    }

    async requestPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'อนุญาติให้ใช้งานระบบ GPS',
                    'message': 'ยินยอมให้ Application ใช้ตำแหน่งที่ตั้งข้อมูล '
                }
            )

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the camera")
            } else {
                console.log("Camera permission denied")
            }
        } catch (err) {
            console.warn(err)
        }
    }

    onMapLayout = () => {
        this.setState({ isMapReady: true })
    }

    componentDidMount() {

        // this.requestPermission()

        // console.log("positionx", "ready")

        // navigator.geolocation.getCurrentPosition(
        //     (position) => {
        //         console.log("positionx", "ready")
        //         this.setState({
        //             region: {
        //                 latitude: position.coords.latitude,
        //                 longitude: position.coords.longitude,
        //                 latitudeDelta:  0.00922*1.5,
        //                 longitudeDelta: 0.00421*1.5,
        //             },
        //             error: null,
        //         });
        //     },
        //     (error) => this.setState({ error: error.message }),
        //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        // );
        
        // navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);

        // navigator.geolocation.getCurrentPosition(this.success, this.error);

        // navigator.geolocation.getCurrentPosition(
        //     (position) => {
        //         console.log("positionx", position)
        //     //   this.setState({
        //     //     latitude: position.coords.latitude,
        //     //     longitude: position.coords.longitude,
        //     //     error: null,
        //     //   });
        //     },
        //     (error) => this.setState({ error: error.message }),
        //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        // );

        // let geoOptions = {
        //     enableHighAccuracy: true,
        //     distanceFilter: 3,
        //     timeout: 20000,
        //     maximumAge: 4000,
        //     accuracy: 1,
        // };

        this.watchID = navigator.geolocation.watchPosition(
            (position) => {
                console.log("positionx", position)
            
                let region = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    // latitudeDelta: 0.02, 
                    // longitudeDelta: 0.02, 
                    latitudeDelta:  0.00922*1.5,
                    longitudeDelta: 0.00421*1.5
                }

                this.onRegionChange(region)
            }, 
            (error) => {
                console.error('imagepathlrtltk', error)
            }, 
            // {enableHighAccuracy: true, timeout: 4000,}
            {timeout: 4000, accuracy: 1, maximumAge: 20000, distanceFilter: 3,}
        )
    }

    onRegionChange(region) {
        // console.log("imagepath", "position has changed")
        this.setState({region: region})

        this.props.onLocationChanged(region)
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID)
    }

    render() {
        return (
            <MapView
                style={styles.map}
                region={this.state.region}
                onLayout={this.onMapLayout}
                loadingEnabled={true} 
                zoomLevel={18}
                rotateEnabled={false}
                // followUserLocation={true}
                // onRegionChange={this.onRegionChange.bind(this)}
            >
                <Marker
                    coordinate={this.state.region}
                    title={"hello"}
                    description="This is description." />
                
            </MapView>
        );
    }
}

const styles = StyleSheet.create({
    map: {
        height: 220,
        width: 370,
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
})