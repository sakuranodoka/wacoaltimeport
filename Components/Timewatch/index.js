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

    constructor (props) {
        super(props)
        this.state = { 
            time: this.getTime(), 
            section: this.props.title,
        }
    }

    getTime() {
        const date = new Date()
        return (date.getFullYear() + '/' + (date.getMonth()+1) + '/' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds())
    }

    getSection() {
        return (
            <Text key={0} style={{color: this.props.textcolor, fontWeight: 'bold'}}>{this.state.section}</Text>
        )
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: this.getTime() }), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return ([
            this.getSection(), 
            <Text key={1}>{this.state.time}</Text>
        ])
    }
}



