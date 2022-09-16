import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import PaymentContainer from '../payments/PaymentContainer'
import TopNav from '../nav/TopNav'
import Loader from '../common/Loader'
import {
  presetsFetch,
} from '../../actions/index';
import { connect } from 'react-redux';


class HomeScreen extends Component {

  constructor(props) {
    super(props);

    this.promptItem = this.promptItem.bind(this)
    this.showPresets = this.showPresets.bind(this)
  }

  async componentDidMount() {
    console.log(this.props)
    await this.props.presetsFetch("artists")
    await this.props.presetsFetch("lighting")
    await this.props.presetsFetch("colors")
    await this.props.presetsFetch("camera")
  }

  showPresets() {
    console.log('show presets')
    console.log(this.props.presets)
  }

  promptItem(title, image, color, type) {
    return(
      <TouchableOpacity
        style={{
          backgroundColor: color,
          width: 150,
          height: 150,
          borderRadius: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: 5
        }}
        onPress={() => this.props.navigation.navigate('PromptGenerator', {type: type})}>
          <Image source={image}/>
          <Text style={{fontFamily: 'Rubik-Bold', justifyContent: 'flex-end', marginTop: 5}}>{title}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    // return(
    //   <Loader/>
    // )
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', padding: Dimensions.get('window').width*.07, width: Dimensions.get('window').width }}>
        <TopNav burger={true} navigation={this.props.navigation} />
        <View style={{ marginBottom: 20, width: Dimensions.get('window').width*.85  }}>
          <Text style={{fontFamily: 'Rubik-Bold', fontSize: 18}}>Create a prompt</Text>
          <Text style={{fontFamily: 'Rubik-Light', fontSize: 14, marginTop:10, marginBottom: 20}}>Do you want to start with text or a url of an image?</Text>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            {this.promptItem('write a prompt', require('../../assets/images/write_a_prompt.png'), '#06D6A0', 'text')}
            {this.promptItem('image as prompt', require('../../assets/images/image_as_prompt.png'), '#FFD166', 'image')}
          </View>
        </View>
        {this.showPresets()}
        <View style={{ marginBottom: 20, width: '100%'}}>
          <Text style={{fontFamily: 'Rubik-Bold', fontSize: 18}}>Past prompts</Text>
          <Text style={{fontFamily: 'Rubik-Light', fontSize: 14, marginTop:10, marginBottom: 20}}>Marvel at your past brilliance</Text>
        </View>
        <PaymentContainer />
      </View>
    );
  }
}

mapStateToProps = (state) => {
  return {
    presets: state.presets,
  };
}

export default connect(mapStateToProps, { presetsFetch })(HomeScreen);
