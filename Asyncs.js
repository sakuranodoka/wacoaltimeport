import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, PermissionsAndroid } from 'react-native';

export default class Asyncs extends Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  async componentDidMount() {
    return await fetch(`https://facebook.github.io/react-native/movies.json`)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        })

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        {/* {
          this.state.dataSource.map((item) => <Text>{item.title}, {item.releaseYear}</Text>)
        } */}
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}