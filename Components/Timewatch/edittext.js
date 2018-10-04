
import React, {Component} from 'react';
import {TextInput} from 'react-native';

export default class Edittext extends Component {

    constructor (props) { 
        super(props)
        this.state = { text: '' }
    }

    componentDidMount () {
        this.props.onChangeTextHandler(this.state.text)
    }

    render() {
        return (
            <TextInput
                style={{marginTop: 1, borderWidth: 0,fontSize: 16, }}
                onChangeText={(text) => {
                    this.props.onChangeTextHandler(text)
                    this.setState({text: text})
                }}
                autoCorrect={false}
                multiline={true}
                // numberOfLines={3}
                underlineColorAndroid={'rgba(0, 0, 0, 0)'}
                maxLength={30}
                value={this.state.text}
                textAlign={'center'}
                placeholder={"เขียนคำบรรยายที่นี่ ..."}
            />
        );
    }
}



