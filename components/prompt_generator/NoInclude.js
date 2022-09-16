import * as React from 'react';
import { Dimensions, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose'

const NoInclude = (props) => {
  function showItems() {
    return props.noInclude.map((item, index) => {
      return(
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
          <View
            style={{
              backgroundColor: '#EF476F',
              width: Dimensions.get('window').width*.8,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 30
            }}>
            <Text style={{color: 'white'}}>{item}</Text>
          </View>
          <TouchableOpacity onPress={()=> props.removeNoInclude(index)}>
            <FontAwesomeIcon icon={ faClose } color={ '#EF476F' } size={20} />
          </TouchableOpacity>
        </View>
      )
    })
  }
  return (
    <View>
      <Text style={{color: '#EF476F', fontFamily: 'Rubik-Regular', marginBottom: 5, marginTop: 10}}>Don't include</Text>
      {showItems()}
      <View style={{
        borderColor: '#EF476F',
        borderWidth: 2,
        borderRadius: 30,
        paddingHorizontal: 10,
        paddingBottom: 5,
        color: '#EF476F',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
      <TextInput
        style={{
          color: '#EF476F',
          width: Dimensions.get('window').width*.7
        }}
        value={props.text}
        multiline
        placeholderTextColor="rgba(239, 71, 111, 0.5)"
        placeholder="type a word *not* to include..."
        onChangeText={text => props.onChangeText(text)}
        />
        <TouchableOpacity onPress={props.addNoInclude} style={{marginTop: 5}}>
          <FontAwesomeIcon icon={ faPlus } color={ '#EF476F' } size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default NoInclude
