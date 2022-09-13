import * as React from 'react';
import { Dimensions, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose'

const Descriptors = (props) => {
  console.log(props.descriptors)
  function showItems() {
    return props.descriptors.map((item, index) => {
      return(
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
          <View
            style={{
              backgroundColor: '#06D6A0',
              width: Dimensions.get('window').width*.8,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 30
            }}>
            <Text style={{color: 'white'}}>{item}</Text>
          </View>
          <TouchableOpacity onPress={()=> props.removeDescriptor(index)}>
            <FontAwesomeIcon icon={ faClose } color={ '#06D6A0' } size={20} />
          </TouchableOpacity>
        </View>
      )
    })
  }
  return (
    <View>
      <Text style={{color: '#06D6A0', fontFamily: 'Rubik-Regular', marginBottom: 5, marginTop: 10}}>Descriptors</Text>
      {showItems()}
      <View style={{
        borderColor: '#06D6A0',
        borderWidth: 2,
        borderRadius: 30,
        paddingHorizontal: 10,
        paddingBottom: 5,
        color: '#06D6A0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
      <TextInput
        style={{
          color: '#06D6A0',
          width: Dimensions.get('window').width*.7
        }}
        value={props.text}
        multiline
        placeholderTextColor="background: rgba(6, 214, 160, 0.7)"
        placeholder="type a descriptor here..."
        onChangeText={text => props.onChangeText(text)}
        />
        <TouchableOpacity onPress={props.addDescriptor} style={{marginTop: 5}}>
          <FontAwesomeIcon icon={ faPlus } color={ '#06D6A0' } size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Descriptors
