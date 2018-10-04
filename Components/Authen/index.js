
import React, {Component} from 'react'
import {TextInput, Text, AsyncStorage} from 'react-native'

import Submit from './submit.js'

import { Button } from 'react-native-material-ui'

import AsyncLocalStorage from '../AsyncLocalStorage.js'

export default class Authen extends Component {

    constructor (props) { 
        super(props)
        this.state = { text: '' }
    }

    removeStorage = () => {
        AsyncLocalStorage.removeItem('user_id').then(res => {
            if (res) { 
                this.setState({
                    requiredToken : true, 
                    text: '', 
                })
            }
        })
    }

    onSignInListener = (status) => {
        // Do something when call back 
        // Check id or some thing 
        
        // Finally set requiredToken = false. It's mean you've already sign in
        this.setState({
            requiredToken: false, 
        })
    }

    componentDidMount () {
        AsyncLocalStorage.getItem('user_id').then(res => {
            if (res === null) {
                this.setState({requiredToken : true})
            } else {
                this.setState({
                    requiredToken : false, 
                    text: res, 
                })
            }
        })
    }

    render() {

        let containers = null

        if (this.state) {
            if (this.state && typeof this.state.requiredToken !== 'undefined' && this.state.requiredToken) {
                // Require Login
                containers = [
                    <Text key={0} style={{alignSelf: 'center', }}>Input employee code</Text>, 
                    <TextInput
                        key={1}
                        
                        style={{marginTop: 6, borderWidth: 0,fontSize: 16, alignSelf: 'center', width: 325,  }}

                        onChangeText={(text) => { this.setState({text: text}) }}
                        autoCorrect={false}
                        multiline={false}

                        underlineColorAndroid={'rgba(0, 0, 0, 0)'}
                        
                        value={this.state.text}
                        textAlign={'center'}
                        placeholder={"ใส่รหัสพนักงานที่นี่"} />, 
                        <Submit key={2} code={this.state.text} onSignInListener={this.onSignInListener} />, 
                ]
            } else if (this.state && typeof this.state.requiredToken !== 'undefined' && !this.state.requiredToken) {
                containers = [
                    // <Text key={0} style={{alignSelf: 'center', fontSize: 16,}}>Input employee code</Text>, 
                    <Text key={4} style={{alignSelf: 'center', fontSize: 16, marginTop: 6, }}>Login as {this.state.text}</Text>, 
                    <Button key={6} icon={'autorenew'} primary text={'Logout'} onPress={() => this.removeStorage()} style={{text:{color: 'red'}}} />,
                ]
            } else {
                containers = []
            }
        }

        return containers
    }
}