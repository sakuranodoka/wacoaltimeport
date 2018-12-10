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
            x : this.props.region,
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

        // ฟังก์ชัน อัปเดต Location (สำคัญมาก)
        // this.watchID = navigator.geolocation.watchPosition(
        //     (position) => {
        //         console.log("positionx", position)
            
        //         let region = {
        //             latitude: position.coords.latitude,
        //             longitude: position.coords.longitude,
        //             // latitudeDelta: 0.02, 
        //             // longitudeDelta: 0.02, 
        //             // latitudeDelta:  0.00922*1.5,
        //             // longitudeDelta: 0.00421*1.5

        //             latitudeDelta:  0.003,
        //             longitudeDelta: 0.003
        //         }

        //         this.onRegionChange(region)
        //     }, 
        //     (error) => {
        //         console.error('imagepathlrtltk', error)
        //     }, 
        //     {timeout: 4000, accuracy: 1, maximumAge: 20000, distanceFilter: 3,}
        // )

        navigator.geolocation.getCurrentPosition(
            (position) => {

                let region = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    // latitudeDelta: 0.02, 
                    // longitudeDelta: 0.02, 
                    // latitudeDelta:  0.00922*1.5,
                    // longitudeDelta: 0.00421*1.5

                    latitudeDelta:  0.003,
                    longitudeDelta: 0.003
                }

                // this.setState({position});
                this.onRegionChange(region)
            },
            (error) => alert(JSON.stringify(error)),
            {timeout: 4000, accuracy: 1, maximumAge: 20000, distanceFilter: 3,}
        );
    }

    onRegionChange(region) {
        // console.log("imagepathXXY", "position has changed", region)

        this.setState({region: region})

        this.props.onLocationChanged(this.state.region)
    }

    // regRef(region) {
    //     console.log("imagepathXXZ", "position has changed", region)
    // }

    componentWillUnmount() {
        // navigator.geolocation.clearWatch(this.watchID)
    }

    render() {
        return (
            <MapView
                style={styles.map}
                region={this.state.region}
                onLayout={this.onMapLayout}
                loadingEnabled={true} 
                zoomLevel={7}
                rotateEnabled={false}

                // onRegionChange={this.regRef}
                // followUserLocation={true}
                // onRegionChange={this.onRegionChange.bind(this)}
            >
                <Marker 
                    draggable 
                    coordinate={this.state.region}
                    // onDragEnd={(e) => this.setState({ region: e.nativeEvent.coordinate })}
                    onDragEnd={(e) => {
                        let region = e.nativeEvent.coordinate
                        region.latitudeDelta = 0.003
                        region.longitudeDelta = 0.003
                        this.setState({region: region})

                        this.props.onLocationChanged(region)
                    }}
                />

                {/* <Marker
                    coordinate={this.state.region}
                    title={"hello"}
                    description="This is description." /> */}
                
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