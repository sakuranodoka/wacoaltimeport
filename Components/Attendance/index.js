import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import ToolbarComponent from '../ToolbarComponent.js'

import { Button } from 'react-native-material-ui';

import Timewatch from '../Timewatch'
import Submit from './submit.js'

export default class Attendance extends Component {

    constructor (props) {
        super(props)

        this.state = {}

        // if (this.props.screenProps && this.props.screenProps.state && this.props.screenProps.state.params) {
        //     this.props.navigation = this.props.screenProps
        // }

        let textcolor = 'steelblue'

        let action = 1

        // let title = this.props.navigation.state.params.title
        if (this.props.screenProps && this.props.screenProps.state && this.props.screenProps.state.params) {
            switch (this.props.screenProps.state.params.title) {
                
                case this.defaultstate.title.in : 
                    title = 'บันทึกเวลาเข้า'
                    action = 1
                    textcolor = 'steelblue'
                    break
                case this.defaultstate.title.out : 
                    title = 'บันทึกเวลาออก'
                    action = 2
                    textcolor = 'orange'
                    break

                default: 
                    title = 'ไม่ระบุว่าเข้าหรือออก'
                    action = 3
                    textcolor = 'red'
            }
        }

        // this.state.title = title
        this.state = {
            title : title, 
            textcolor: textcolor, 
            action : action, 
        }
    }

    // ควรทำเป็น static
    defaultstate = {
        title : {
            in : 'check-in', 
            out : 'check-out', 
        }
    }

    onPlaceSelecting = (e) => {
        this.props.navigation.navigate('PlaceList', {callbacks: this.callbacks})
    }
    // title
    callbacks = (data) => {
        this.setState({locationData : data})
    }

    render() {
        return (
            <ToolbarComponent containers={this} title={this.state && this.state.title}>

                <View style={styles.conflex}>

                    <View style={{flex:1, alignItems: 'center', justifyContent: 'space-around',}}>
                    
                        <View>
                            <Button primary text={this.state && this.state.locationData ? this.state.locationData.name : 'เลือกสถานที่ปฏิบัติงาน'} 
                                onPress={() => this.onPlaceSelecting()}
                                icon={'expand-more'}
                                style={{container:{backgroundColor: 'transparent', margin: 5 }, text:{fontSize: 18, color:'#808080' }, }} />
                        </View>

                        <View style={{flex:1, alignItems: 'center', justifyContent: 'space-around',}}>
                            <View style={{flex:1, alignItems: 'center', justifyContent: 'center',}}>
                                <Timewatch title={this.state.title} textcolor={this.state.textcolor} style={{margin: 5, marginTop: 5, marginBottom: 5,}} />
                            </View>
                        
                            <Submit location={ this.state && this.state.locationData ? this.state.locationData.id : null} action={this.state.action} style={{margin: 5, marginTop: 5, marginBottom: 5,}} />
                        </View>

                    </View>
                </View>

            </ToolbarComponent>
        )
    }
}

const styles = StyleSheet.create({
    conflex: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    }, 
})