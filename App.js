import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Router from './Router'
import * as Font from 'expo-font';
import Loader from './components/common/Loader'

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      loaded: false,
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Poppins-ExtraBold': require('./assets/fonts/Rubik-ExtraBold.ttf'),
      'Rubik-SemiBold': require('./assets/fonts/Rubik-SemiBold.ttf'),
      'Rubik-Bold': require('./assets/fonts/Rubik-Bold.ttf'),
      'Rubik-Light': require('./assets/fonts/Rubik-Light.ttf'),
      'Rubik-Regular': require('./assets/fonts/Rubik-Regular.ttf'),
    });
    await this.setState({
      loaded: true
    })
  }
  render() {
    if(!this.state.loaded) {
      return <Loader />
    }
    return (
      <View style={{flex:1, backgroundColor: 'white', fontFamily: 'Rubik-Regular'}}>
          <StatusBar hidden={true}/>
          <Router />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
