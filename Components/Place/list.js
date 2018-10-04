import React, {Component} from 'react'
import {View, Text, Image, ActivityIndicator, StyleSheet} from 'react-native'

import { Card, Icon, Divider } from 'react-native-material-ui';

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

    onSelected = (data) => {
        // console.log('imagepathx', id)
        
        this.props.navigation.state.params.callbacks(data)

        this.props.navigation.goBack(null)
    }

    render() {

        return (
            <ToolbarComponent containers={this} title={'เลือกสถานที่'}>

                {/* <View style={styles.conflex}> */}
                    {
                        typeof this.state.dataSource !== 'undefined' ?
                            this.state.dataSource.map((items, index) => {
                                return ([
                                    // <Card key={index} style={{margin: 7}}>
                                    // <Text key={index} onPress={() => this.onSelected(items)} style={{color: 'steelblue', alignItems: 'center', textAlign: 'center', margin: 13, fontSize: 18,}}>{items.name}</Text>, 
                                    // <Icon name={'expand-more'} key={index} />, 

                                    <View key={index} style={{ flexDirection: 'row'}}>
                                        <Text onPress={() => this.onSelected(items)} style={{color: 'steelblue', alignItems: 'center', textAlign: 'center', margin: 13, fontSize: 18,}}>{items.name}</Text>
                                        <Icon name={'expand-more'} style={{width: 50, marginTop: 13}} />
                                        {/* <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} /> */}
                                    </View>,

                                    <Divider key={index} />, 



                                    // </Card>,
                                ])
                            })
                        : <ActivityIndicator size={'large'} style={{margin: 5}} />
                    }

                {/* </View> */}
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



