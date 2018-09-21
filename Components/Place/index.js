import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'

import Collapsible from '../Collapsible.js'

import Timewatch from '../Timewatch'
import Edittext from '../Timewatch/edittext.js'
import Submit from '../Timewatch/submit.js'

// # Static ()
import CameraView from '../Camera'

export default class Place extends Component {

    constructor (props) {
        super(props)

        this.state = {
 
            imagepath: 'data:image/png;base64,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', 

            region: {
                latitude: 0.00, // # Default latitude

                longitude: 0.00, // # Default Longitude

                // # ...
                latitudeDelta:  0.00922*1.5,
                longitudeDelta: 0.00421*1.5,
            },

            text: '',
        }
    }

    getLocation = (region) => {
        console.log('imagepathgps', region)
        this.setState({region: region})
    }

    fabAction = () => {
        this.props.navigation.navigate('CameraScreen', {callbacks: this.callbacks})
    }

    callbacks = (opts) => {
        this.setState({imagepath: opts.uri})
    }

    afterSubmit = () => {
        console.log('imagepathssn', '1234')
        this.props.navigation.goBack(null, { transition: 'horizontal' })
    }

    render() {
        return (
            <Collapsible containers={this}>

                <View style={{
                    flex: 1,
                    // flexDirection: 'column',
                    // justifyContent: 'center',
                    // alignItems: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                    {/* <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{height: 100, backgroundColor: 'steelblue'}} /> */}
                

                    {/* <View style={{flex:1, alignItems: 'center', justifyContent: 'center',}}> */}
                    <Image
                        style={{width: 150, height: 150,  alignSelf: 'center', marginTop: 2,}}
                        source={{uri: this.state.imagepath}}
                        resizeMode="stretch" />
                
                    <Edittext text={this.state.text}  />

                    {/* <Timewatch /> */}

                    <Submit datas={this.state} callbacks={this.afterSubmit.bind(this)} />

                </View>
            </Collapsible>
        )
    }
}



