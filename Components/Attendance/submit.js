import React, {Component} from 'react'
import { View, Text } from 'react-native'

import { Button } from 'react-native-material-ui'

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

    async swysf(opts) {
       
        this.setState({ic : "schedule", disabled: true, color: 'gray', text: 'กรุณารอสักครู่ ...'})

        await axios.post("http://devshopinfo.wacoal.co.th/timeport/api/create/attendance/", 
                qs.stringify({
                    location: opts.location, 
                    action: opts.action, 
                }),
            ).then((response) => {

                this.setState(this.defaults.state)

            })
            .catch((error) => {
                console.error(error)
            })
        
    }

    // componentDidMount() { this.props.navigation.goBack(null) }

    render() {
        return (

            <Button primary text={this.state.text} 
                onPress={() => this.swysf({location : this.props.location, action : this.props.action})}
                icon={this.state.ic}
                disabled={this.state.disabled}
                style={{container:{backgroundColor: 'transparent', margin: 5 }, text:{color: this.state.color, }, }} />

        )
    }
}



