import React, { Component } from 'react';
import {
  Animated,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity, 
  TouchableHighlight
} from 'react-native';

import { Icon } from 'react-native-material-ui';

import { RNCamera } from 'react-native-camera';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);

export default class TakePicture extends Component {

  takePicture = async () => {
    try {
      const data = await this.camera.takePictureAsync();
      console.log('Path to image: ' + data.uri);
      this.props.navigation.goBack();
    } catch (err) {
      // console.log('err: ', err);
    }
  };

  render() {
    
    return (<View style={styles.container}>
      <RNCamera
        ref={cam => {
          this.camera = cam;
        }}
        style={styles.preview}
      >
        <View>
          <TouchableOpacity style={styles.capture} onPress={this.takePicture}>
            {/* <Icon style={styles.iconCamera}>camera</Icon> */}
            <Text>Take Photo</Text>
          </TouchableOpacity>
        </View>
      </RNCamera>

      {/* <View style={styles.space} /> */}
    </View>);
  }
}

 
    // <View style={styles.container}>
    //         {/* <RNCamera
    //           ref={cam => {
    //             this.camera = cam;
    //           }}
    //           style={styles.preview}
    //         >
    //           <View style={styles.captureContainer}>
    //             <TouchableOpacity 
    //                 style={styles.actionButton}
    //                 onPress={this.takePicture}>
    //                 <Icon style={styles.iconCamera}>camera</Icon>
    //                 <Text>Take Photo</Text>
    //             </TouchableOpacity>
    //           </View>
    //         </RNCamera> */}

    //         <RNCamera
    //           ref={ref => {
    //             this.camera = ref;
    //           }}
    //           style={styles.preview}
              
    //           permissionDialogTitle={'Permission to use camera'}
    //           permissionDialogMessage={'We need your permission to use your camera phone'}
    //         >
    //           {({ camera, status }) => {
    //             if (status !== 'READY') return <PendingView />;
    //             return (
    //               <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
    //                 <TouchableOpacity onPress={this.takePicture}>
    //                   <Text style={{ fontSize: 14 }}> SNAP </Text>
    //                 </TouchableOpacity>
    //               </View>
    //             );
    //           }}
    //         </RNCamera>

    //       </View>

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
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});