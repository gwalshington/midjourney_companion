import * as React from 'react';
import { Dimensions, View, Text, TouchableOpacity, TextInput } from 'react-native';


const MainIdea = (props) => {
  return (
    <View>
      <Text style={{color: '#4361EE', fontFamily: 'Rubik-Bold', marginBottom: 5}}>Main Idea</Text>
      <TextInput
        style={{
          borderColor: '#4361EE',
          borderWidth: 2,
          borderRadius: 10,
          padding: 10,
          minHeight: 50,
          color: '#4361EE'
        }}
        placeholderTextColor="background: rgba(67, 97, 238, 0.7);"
        placeholder="type the main prompt for your masterpiece..."
        multiline
        numberOfLines={4}
        onChangeText={text => props.onChangeText(text)}
        />
    </View>
  );
}

export default MainIdea
