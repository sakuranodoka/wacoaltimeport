import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import ToolbarComponent from '../ToolbarComponent.js'

import { Button } from 'react-native-material-ui';

import Timewatch from '../Timewatch'

export default class Attendance extends Component {

    constructor (props) {
        super(props)
    }

    onPlaceSelecting = (e) => {
        this.props.navigation.navigate('PlaceList')
    }

    render() {
        return (
            <ToolbarComponent containers={this} title={'บันทึกเวลาเข้า'}>

                <View style={styles.conflex}>
                    {/* <Text>1234</Text> */}

                    <Button primary text={'เลือกสถานที่ปฏิบัติงาน'} 
                        onPress={() => this.onPlaceSelecting}
                        icon={'expand-more'}
                        style={{container:{backgroundColor: 'transparent', margin: 10 }, text:{color: 'steelblue', fontSize: 16 }, }} />

                    <Timewatch />
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