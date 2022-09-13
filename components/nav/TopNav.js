import * as React from 'react';
import { Dimensions, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBurger } from '@fortawesome/free-solid-svg-icons/faBurger'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft'


function TopNav(props) {
  return (
    <View
      style={{
        height: 70,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'space-between',
        position: 'absolute',
        width: Dimensions.get('window').width,
        top: 0,
        justifyContent: 'space-between',
        padding: 20
      }}>
        <View>
          {props.back &&
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <FontAwesomeIcon icon={ faChevronLeft } color={ '#4361EE' } size={22} />
                <FontAwesomeIcon icon={ faChevronLeft } color={ '#4361EE' } size={22} style={{marginLeft: -13}} />
              </View>
            </TouchableOpacity>
          }
        </View>
        <View>
          {props.burger &&
            <TouchableOpacity onPress={() => props.navigation.navigate('SettingContainer')}>
              <FontAwesomeIcon icon={ faBurger } color={ '#4361EE' } size={22} />
            </TouchableOpacity>
          }
        </View>
    </View>
  );
}

export default TopNav
