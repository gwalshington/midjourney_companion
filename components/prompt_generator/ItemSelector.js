import React, { useState } from 'react';
import { Dimensions, View, Text, TouchableOpacity, TextInput, FlatList, Image, Modal } from 'react-native';
import CommonModal from '../common/CommonModal'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose'

export default function ItemSelector(props) {
  // Declare a new state variable, which we'll call "count"
  const [modalOpen, setModalOpen] = useState(false);
  const width = Dimensions.get('window').width * .35
  const maxHeight = Dimensions.get('window').height*.8

  function setItem(key, value) {
    props.selectItem(key, value)
    setModalOpen(false)
  }

  function showItemButtons() {
    if(props.selectedValues.length === 0) {
      return (
        <View>
          <TouchableOpacity
            onPress={() => setModalOpen(true)}
            style={{
              backgroundColor: props.halfColor,
              borderColor: props.color,
              borderWidth: 2,
              padding: 5,
              borderRadius: 30,
              paddingHorizontal: 15, marginRight: 10
            }}>
            <Text style={{fontFamily: 'Rubik-Medium'}}>{props.title}</Text>
          </TouchableOpacity>
        </View>
      )
    }

    return props.selectedValues.map((item, i) => {
      return(
        <View
          key={i}
          style={{marginTop: 5, display: 'flex', flexDirection: 'row', alignItems: "center", marginRight: 10}}>
          <TouchableOpacity onPress={() => setModalOpen(true)} style={{backgroundColor: props.color, padding: 5, borderRadius: 30, paddingHorizontal: 15}}>
            <Text><Text style={{fontFamily: 'Rubik-Medium'}}>{props.title}:</Text> {item}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> props.removeItem(props.keyName, i)}>
            <FontAwesomeIcon icon={ faClose } color={ '#EF476F' } size={16} />
          </TouchableOpacity>
        </View>
      )
    })

  }

  return (
    <View>
      <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      {showItemButtons()}
      </View>
      {modalOpen &&
        <CommonModal toggleModal={() => setModalOpen(false)}>
        <Text style={{fontFamily: 'Rubik-Bold', color: '#073B4C', fontSize: 20, textAlign: 'center'}}>{props.title}</Text>
        <FlatList
          data={props.items}
          renderItem={({item, i}) => (
            <View key={i} style={{maxHeight: maxHeight}}>
              <Text style={{fontFamily: 'Rubik-Medium', color: '#073B4C', fontSize: 16}}>{item[0]}</Text>
                  <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <FlatList
                      style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                      }}
                      contentContainerStyle={{display: 'flex', flexDirection : "row", alignItems: 'space-between'}}
                      data={Object.entries(item[1])}
                      renderItem={({item}) => (
                        <TouchableOpacity style={{padding: width*.08}} onPress={() => setItem(props.keyName, item[0])}>
                          <Image
                            resizeMode={'cover'}
                            style={{width: width, height: width}}
                            source={{uri: item[1].image}}/>
                          <Text style={{textAlign: 'center'}}>{item[0]}</Text>
                        </TouchableOpacity>
                      )}
                    />
                  </View>
            </View>
          )}
        />
        </CommonModal>
    }
    </View>
  );
}
