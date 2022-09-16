import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Router from './Router'
import * as Font from 'expo-font';
import Loader from './components/common/Loader'
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { Provider, connect } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';



class App extends React.Component {

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
      'Rubik-Medium': require('./assets/fonts/Rubik-Medium.ttf'),
    });
    await this.setState({
      loaded: true
    })
  }
  render() {
    if(!this.state.loaded) {
      return <Loader />
    }
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <View style={{flex:1, backgroundColor: 'white', fontFamily: 'Rubik-Regular'}}>
          <StatusBar hidden={true}/>
          <Provider store={store}>
            <Router />
          </Provider>
      </View>
    );
  }
}


export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
