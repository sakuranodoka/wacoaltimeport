import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'

import ToolbarComponent from '../ToolbarComponent.js'

export default class PlaceList extends Component {

    constructor (props) {
        super(props)
    }

    render() {
        return (
            <ToolbarComponent containers={this}>

                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                }}>
                    <Text style={{color: 'steelblue', alignItems:'center'}}>เลือกสถานที่บันทึกเวลา</Text>
                </View>
            </ToolbarComponent>
        )
    }
}



