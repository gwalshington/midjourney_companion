import React, { Component } from "react";
import { View, Text, TouchableOpacity } from 'react-native';


class PaymentContainer extends Component {

  constructor(props) {
    super(props);

    this.promptItem = this.promptItem.bind(this)
    this.renderUpgradeReason = this.renderUpgradeReason.bind(this)
  }

  renderUpgradeReason(text) {
    return(
      <View>
        <Text style={{fontFamily: 'Rubik-Light', fontSize: 16}}>{text}</Text>
      </View>
    )
  }

  promptItem(price, frequency) {
    return(
      <TouchableOpacity
        style={{
          width: 130,
          height: 100,
          borderRadius: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 5,
          backgroundColor: 'rgba(114, 9, 183, 1)'
        }}
        onPress={() => this.props.navigation.navigate('PromptGenerator')}>
          {frequency === 'yearly' &&
            <View style={{backgroundColor: 'rgba(239, 71, 111, 1)', padding: 5, borderRadius: 10, marginTop: -25}}><Text style={{color: 'white'}}>what a deal 😍</Text></View>
          }
          <Text style={{fontFamily: 'Rubik-Bold', justifyContent: 'flex-end', marginTop: 5, color: 'white', fontSize: 40}}>{price}</Text>
          <Text style={{fontFamily: 'Rubik-Light', justifyContent: 'flex-end',  color: 'white'}}>{frequency}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={{
        justifyContent: 'space-between',
        borderColor: 'rgba(114, 9, 183, 1)',
        borderRadius: 10,
        borderWidth: 2,
        width: '100%',
        padding: 15
      }}>
        <Text style={{fontFamily: 'Rubik-Bold', fontSize: 18, textAlign: 'center', marginBottom: 20}}>Gogh to the next level</Text>
        <View>
          {this.renderUpgradeReason('Unlimited prompts')}
          {this.renderUpgradeReason('Unlimited features')}
          {this.renderUpgradeReason('Support an indy developer')}
        </View>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
          {this.promptItem('$5', 'monthly')}
          {this.promptItem('$30', 'yearly')}
        </View>
      </View>
    );
  }
}

export default PaymentContainer
