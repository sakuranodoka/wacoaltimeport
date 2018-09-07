'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

import { NavigationActions } from 'react-navigation';

const backAction = NavigationActions.back({
  key: 'Home',
});

export default class Facc extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {this.camera = ref;}}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          autoFocus={RNCamera.Constants.AutoFocus.off}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        >
          {/* {({ camera, status }) => {
            if (status !== 'READY') return <PendingView />;
            return ( */}
              <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => this.takePicture(this.camera)} style={styles.capture}>
                  <Text style={{ fontSize: 14, color:'#ffffff' }}> Snap </Text>
                </TouchableOpacity>
              </View>
            {/* );
          }} */}
        </RNCamera>
      </View>
    );
  }

  takePicture = async function(camera) {
    const options = { quality: 0.5, base64: true, skipProcessing : true, fixOrientation : false, width: 400  };
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    console.log('imagedata', data);
    // this.props.navigation.goBack();

    // this.props.navigation.dispatch(backAction);
    this.props.navigation.dispatch(NavigationActions.back());
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    // backgroundColor: '#fff',
    backgroundColor: 'transparent',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});