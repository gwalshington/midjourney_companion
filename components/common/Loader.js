import * as React from 'react';
import { View, Image, Dimensions, Text } from 'react-native';

export default function Loader() {
  const width = Dimensions.get('window').width*.9
  return (
    <View style={{ backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={require('../../assets/animations/loader.gif')}
        style={{width: width, height: width, marginTop: -50}}
      />
    </View>
  );
}
