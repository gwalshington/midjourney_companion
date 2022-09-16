import * as React from 'react';
import { View, Image, Dimensions, Text, Modal, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function CommonModal(props) {
  const width = Dimensions.get('window').width*.95
  const color = props.color ? props.color :  '#4361EE'
  return (
    <Modal
      animationType="slide"
      transparent={true}
      style={{justifyContent: 'center', alignSelf: 'center'}}
      visible={props.visible}
    >
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255,255,255,.95)',
            padding: 20,}}>
          <View style={{
              borderColor: color,
              borderWidth: 3,
              borderRadius: 10,
              backgroundColor: 'white',
              padding: 10,
              width: '100%',}}>
              <TouchableOpacity onPress={() => props.toggleModal()}>
                <FontAwesome name="close" size={25} style={{ color: props.color ? props.color :  '#4361EE' }} />
              </TouchableOpacity>
            {props.children}
          </View>
        </View>
      </Modal>
  );
}
