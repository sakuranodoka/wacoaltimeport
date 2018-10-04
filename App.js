import React, {Component} from 'react'
import { View } from 'react-native'

import { COLOR, ThemeContext, getTheme, Toolbar, Button } from 'react-native-material-ui'

import Authen from './Components/Authen'

const uiTheme = {
  palette: {
    primaryColor: COLOR.blue200,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};

export default class App extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {}
    }

    navigate() {
        this.props.navigation.navigate('DrawerOpen') // open drawer
    }

    nav() {
        this.props.navigation.navigate('CameraScreen', {cb: this.cb})
    }

    cb(data) {
    }

    returnData(imagepath) {
        this.state.imagepath = imagepath
    }

    render() {
        this.props.navigation.pop
        return (
            <ThemeContext.Provider value={getTheme(uiTheme)}>

                <Toolbar
                    leftElement="menu"
                    onLeftElementPress={() => this.navigate()}
                    centerElement="Application"
                    searchable={{
                        autoFocus: true,
                        placeholder: 'Search',
                    }}
                />

                <View style={{flex:1, justifyContent: 'center', alignContent: 'center', }}>
                    <Authen />
                </View>
                    
                <Button onPress={() => { this.props.navigation.navigate('AttendanceStack', { title : 'check-out'}) }} text="Click me" />

            {/* <Collapser containers={this} /> */}

            {/* <View>
                <Button text="" style={{ container:{position:'absolute', zIndex: 1, marginTop:2, backgroundColor: 'transparent'}}} icon="menu" onPress={() => this.navigate()} />
                <Map style={{zIndex: 0, elevation: 5,}} />
                <ActionButton icon="camera" style={{container:{backgroundColor:'#73b1d6', width: 48, height: 48, top:43, elevation: 5,}}} onPress={() => this.nav()} /> 
            </View>
            <Divider style={{elevation: 15,height: 5,}} /> */}

            {/* <Image
                style={{width: 150, height: 150,  alignSelf: 'center', marginTop: 3, }}
                source={{uri: this.state.imagepath}}
                resizeMode="stretch"
            />

            <Maininput /> */}
            
            {/* <Icon name="menu" style={{ zIndex: 1, margin: 2}} onPress={() => this.navigate()} /> */}

            {/* <Interactable.View
                verticalOnly={true}
                snapPoints={[{y: 0}, {y: 200}]}
                onSnap={this.onDrawerSnap}> */}

                {/* <Map style={{flex:1, height: 400, width: 400}} />

                <View style={{flex:2,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#F5FCFF',}}>
                                        <Text style={{
                        fontSize: 20,
                        textAlign: 'center',
                        margin: 10,
                    }}>Welcome to React Native!</Text>
                                        <Text style={{
                        textAlign: 'center',
                        color: '#333333',
                        marginBottom: 5,
                    }}>To get started, edit App.js</Text>
                                        <Text style={{
                        textAlign: 'center',
                        color: '#333333',
                        marginBottom: 5,
                    }}>To get started, edit App.js</Text>
                </View> */}

            {/* </Interactable.View> */}
                
            {/* <Toolbar
                leftElement="menu"
                onLeftElementPress={() => this.navigate()}
                centerElement="Sleepier"
                searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                }}
            /> */}

            {/* <CollapsingHeaderWithScroll /> */}

            

            {/* <Asyncs/> */}

            {/* <Collapsed /> */}

            {/* <TakePicture /> */}

            {/* <Button primary text="Take Photo" onPress={() => this.nav()} /> */}

            {/* <View>
                <Text>Hello world!</Text>
                <Divider/>
            </View> */}
                
            </ThemeContext.Provider>
        )
    }
}