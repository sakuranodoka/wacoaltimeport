import React, {Component} from 'react'
import { View, Text, AsyncStorage } from 'react-native'

import { Button } from 'react-native-material-ui'

import axios from 'axios'
import qs from 'qs'

import AsyncLocalStorage from '../AsyncLocalStorage.js'

export default class Submit extends Component {

    defaults = {
        state : {
            ic : "done", 
            disabled: false, 
            color: 'steelblue', 
            text: 'ตกลง'
        }
    }

    constructor(props) {
        super(props)

        this.state = this.defaults.state
    }

    swysf = async(opts) => {
        
        this.setState({ic : "schedule", disabled: true, color: 'gray', text: 'กรุณารอสักครู่ ...'})

        console.log('imagepathname', opts.name)

        await axios.post("http://devshopinfo.wacoal.co.th/timeport/api/create/", 
                qs.stringify({
                    lat: opts.region.latitude, 
                    lng: opts.region.longitude, 
                    name: opts.name,
                }),
            ).then((response) => {
                this.setState(this.defaults.state)
            })
            .catch((error) => {
                console.error(error)
            })
        
        // this.props.callbacks()
    }

    onSignInListener = (code) => {
        AsyncLocalStorage.setItem('user_id', code).then(res => {
            if (res) { this.props.onSignInListener(true) }
        })
    }

    render() {
        return (
            <Button primary text={this.state.text} 
                onPress={() => this.onSignInListener(this.props.code) }
                // onPress={() => {
                //     this.props.onSignInListener(true)
                    // AsyncLocalStorage.setItem('user_id', this.props.code).then(res => {
                    //     if (res) { this.props.onSignInListener(true) }
                    // })
                // }}
                icon={this.state.ic}
                disabled={this.state.disabled}
                style={{container:{backgroundColor: 'transparent', }, text:{color: this.state.color, }, }} />
        )
    }
}



