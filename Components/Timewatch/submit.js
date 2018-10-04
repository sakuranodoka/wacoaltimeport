/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import { View, Text } from 'react-native'

import { Card, Button } from 'react-native-material-ui'

import axios from 'axios'
import qs from 'qs'

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

    // send(opts) {
    send = async (opts) => {
        // console.log('imagepathlll', this.state.region.latitude, this.state.region.longitude)

        // console.log('imagepathtwcsf', JSON.stringify({
        //     lat: opts.latitude,
        //     lng: opts.longitude,
        // }))

        

        const data = {
            lat: opts.latitude, 
            lng: opts.longitude
        }

        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        const response = await fetch('http://devshopinfo.wacoal.co.th/timeport/api/create/location', {
            method: "POST",

            // mode: "same-origin",
            credentials: 'include',
            // headers: myHeaders, 
            // mode: 'cors',
            // cache: 'default',
            
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                // 'Accept' : 'application/json',
                // 'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            // redirect: "follow", // manual, *follow, error
            // referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(data), 
            // data: JSON.stringify(data),
            
            // body: data
            // body: new FormData(data)
        // })
        }).then((res) => res.json())
        .then((res) => res)
            // console.log("imagepathltf", res.json())
            // return res.json()
        // .then((res) => res)
        .catch((err) => {
            console.error(err)
        })

        console.log("imagepathLLL", response)
        // .then((r) => {
        //     // console.log('imagepathltf', r.json())

        //     return r
        //     // dispatch(contactFormSubmitSuccess());
        // })
        // .then(res => console.log(res))
        // .then(response => response.json())
        // .catch(error => console.error('Error:', error))
        // .then(response => console.log('imagepathltf', response));
        // .then(function(data) {
        //     console.log('imagepathltf', data)
        // })
        // .catch((error) => {
        //     console.log('imagepatherror', error)
        //     console.error(error)
        // })
    }

    // swysf = async(opts) => {
    async swysf(opts) {
        // var data = {
        //     "username": 5666,
        //     "password": 1030
        // }

        //  let details = {
        //     'username': 'username',
        //     'password': 'demo'
        // };
    
        // let formBody = [];
        // for (let property in details) {
        //     let encodedKey = encodeURIComponent(property);
        //     let encodedValue = encodeURIComponent(details[property]);
        //     formBody.push(encodedKey + "=" + encodedValue);
        // }
        // formBody = formBody.join("&");

        this.setState({ic : "schedule", disabled: true, color: 'gray', text: 'กรุณารอสักครู่ ...'})

        console.log('imagepathname', opts.name)

        await axios.post("http://devshopinfo.wacoal.co.th/timeport/api/create/location/", 
                qs.stringify({
                    lat: opts.region.latitude, 
                    lng: opts.region.longitude, 
                    name: opts.name,
                }),
            ).then((response) => {
                // Handle the JWT response here
                // console.log('imagepathlls', response)
                // this.setState({ic : "checkmark", disabled: false})
                this.setState(this.defaults.state)

                // parents.props.navigation.goBack(null)
            })
            .catch((error) => {
                console.error(error)
            })
        
        // this.props.p.afterSubmit
        this.props.callbacks()
        
        // this.props.navigation.goBack(null)
        // this.props.navigation.state.params.goBack()
    }

    render() {
        return (
            // <View style={{justifyContent: 'center', flexDirection: 'row', marginTop:25 , alignItems: 'center', flex: 1, }}>
                
            <Button primary text={this.state.text} 
                onPress={() => this.swysf({ region: this.props.datas.region, name: this.props.datas.text})}
                icon={this.state.ic}
                disabled={this.state.disabled}
                // iconSet={'Ionicons'}
                style={{container:{backgroundColor: 'transparent', }, text:{color: this.state.color, }, }} />
                
        )
    }
}



