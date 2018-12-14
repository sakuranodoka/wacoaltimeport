import React, {Component} from 'react'
import {View, Text, StyleSheet, RefreshControl, ActivityIndicator} from 'react-native'
import ToolbarComponent from '../ToolbarComponent.js'

import Timeline from 'react-native-timeline-listview'

import axios from 'axios'
import qs from 'qs'

export default class Timelines extends Component {

    constructor (props) {
        super(props)

        // this.k = 1

        // this.data = [
        //     {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
        //     {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
        //     {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
        //     {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
        //     {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
        // ]

        this.state = {
            isRefreshing: false,      
            waiting: true,
            // data: this.data
            data: null,
        }

        this.onEndReached = this.onEndReached.bind(this)
        this.renderFooter = this.renderFooter.bind(this)
        this.onRefresh = this.onRefresh.bind(this)

    }

    onRefresh() {
        // this.data = [
        //     {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
        //     {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
        //     {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
        // ]

        console.log('imagepatheefs', 'onrefresh timelines')

        // this.setState({data: this.data})
    }
    
    onEndReached() {
        //fetch next data
    }
    
    renderFooter() {
        //show loading indicator
        if (this.state.waiting) {
            return <ActivityIndicator />;
        } else {
            return <Text>~</Text>;
        }
    }

    componentDidMount() {
        if (this.state.data === null)
            this.getData()
        else { 

            //# index of prequencys
            i = 0

            //# ลูบแรก จน.วัน ในเดือน
            this.state.data.map((daytimes, index) => {
                console.log('imagepathEFES', daytimes)
                // this.state.timelines.push(
                //     //<PostComponent key={index} />

                    
                // )
            })
        }
    }

    getData = async () => {

        await axios.post("http://devshopinfo.wacoal.co.th/timeport/api/v1/timelines", 
            qs.stringify({
                user: '92642', 
            }),
        )
        .then(res => {
            console.log('imagepathllCCFFs', res.data)

            this.setState({
                waiting: false, 
                data : res.data, 
            })
        })

        .catch((error) => {
            console.error('imagepathllCCFFswr', error)
        })
    }

    render() {
        // let containers = null
        // containers = [
        //     <Text key={0} style={{alignSelf: 'center', }}>Hello Timeline</Text>, 
        // ]
        return (
            <ToolbarComponent containers={this} title={this.state && this.state.title}>

                { this.state.timelines }

                {/* <View style={styles.conflex}> */}
                    {/* <Timeline 
                        key={0}
                        style={styles.list}
                        data={this.state.data}
                        circleSize={20}
                        circleColor='rgb(45,156,219)'
                        lineColor='rgb(45,156,219)'
                        timeContainerStyle={{minWidth:52, marginTop: -5}}
                        timeStyle={{textAlign: 'center', backgroundColor:'transparent', color:'rgb(45,156,219)', padding:5, borderRadius:13}}
                        descriptionStyle={{color:'gray'}}
                        options={{
                            style:{paddingTop:5},
                            refreshControl: (
                                <RefreshControl
                                    refreshing={this.state.isRefreshing}
                                    onRefresh={this.onRefresh}
                                />
                            ),
                            renderFooter: this.renderFooter,
                            onEndReached: this.onEndReached
                        }}
                    /> */}
                {/* </View> */}
            </ToolbarComponent>
        )
    }
}

const styles = StyleSheet.create({
    conflex: {
        flex: 1,
        padding: 12,
        paddingTop: 20,
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'stretch',
    }, 
    list: {
        flex: 1,
        padding: 12,
        paddingTop:20,
        marginTop:20,
    },
})

