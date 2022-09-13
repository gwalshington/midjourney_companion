import React, { Component } from "react";
import { View, Text } from 'react-native';
import TopNav from '../nav/TopNav'

class SettingContainer extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <TopNav navigation={this.props.navigation} back={true}/>
        <View style={{marginTop: 100, padding: 25}}>
          <Text style={{fontFamily: 'Rubik-Bold', fontSize: 18, textAlign: 'center'}}>Setting Container</Text>
        </View>
      </View>
    );
  }
}

export default SettingContainer
