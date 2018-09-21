/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class TimeWatch extends Component {

    getTime() {
        const date = new Date()
        return (date.getFullYear() + '/' + (date.getMonth()+1) + '/' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds())
    }

    getSection() {
        return (
            <Text style={{color: 'steelblue', fontWeight: 'bold'}}>{this.state.section}</Text>
        )
    }

    constructor (props) {
        super(props)
        this.state = { 
            time: this.getTime(), 
            section: 'บันทึกเวลาเข้า',
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: this.getTime() }), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center',}}>
                {this.getSection()}
                <Text>{this.state.time}</Text>
            </View>
        )
    }
}



