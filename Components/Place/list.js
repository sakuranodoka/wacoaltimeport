import React, {Component} from 'react'
import {View, Text, Image, ActivityIndicator, StyleSheet} from 'react-native'

import { Card, Icon } from 'react-native-material-ui';

import ToolbarComponent from '../ToolbarComponent.js'

import axios from 'axios'
import qs from 'qs'

export default class PlaceList extends Component {

    constructor (props) {
        super(props)

        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        this.getapi()
    }

    async getapi() {

        await axios.post("http://devshopinfo.wacoal.co.th/timeport/api/v1/location", 
            {}
            // qs.stringify({
            //     lat: opts.latitude, 
            //     lng: opts.longitude
            // }),
        )
        .then(res => {
            this.setState({
                isLoading: false, 
                dataSource: res.data, 
            })

        })

        .catch((error) => {
            console.error(error)
        })
    }

    render() {

        return (
            <ToolbarComponent containers={this} title={'บันทึกเวลาเข้า'}>

                <View style={styles.conflex}>
                    {
                        typeof this.state.dataSource !== 'undefined' ?
                            this.state.dataSource.map((items, index) => {
                                return ([
                                    <Card key={index} style={{margin: 7}}>
                                        <Text style={{color: 'steelblue', alignItems: 'center', textAlign: 'center', margin: 13, fontSize: 18,}}>{items.name}</Text>
                                    </Card>,
                                ])
                            })
                        : <ActivityIndicator />
                    }

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



