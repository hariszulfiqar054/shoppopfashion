import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {IconAsset, Strings, UiColor} from '../../theme';
import {HeaderWithGoBackAndOption} from '../../components/AppHeader';
import styles from './styles';
import axios from 'axios';

const Items = [
  {
    image1: require('../../assets/icons/fashion.jpg'),
    name: 'TURQUOISE',
    image2: require('../../assets/icons/starrating.png'),
    price: '$110',
  },
  {
    image1: require('../../assets/icons/fashion.jpg'),
    name: 'EMERALD',
    image2: require('../../assets/icons/starrating.png'),
    price: '$100',
  },
  {
    image1: require('../../assets/icons/fashion.jpg'),
    name: 'SUN FLOWER',
    image2: require('../../assets/icons/starrating.png'),
    price: '$90',
  },
  {
    image1: require('../../assets/icons/fashion.jpg'),
    name: 'ALIZARIN',
    image2: require('../../assets/icons/starrating.png'),
    price: '$110',
  },
];

const MyShop = () => {
  return (
    <SafeAreaView style={styles.container}>
      {HeaderWithGoBackAndOption('', Strings.MYSHOP)}
      <FlatList
        data={Items}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.mainView}>
            <View>
              <Image source={item.image1} style={styles.fashionImage} />
            </View>
            <View style={{flex: 1, paddingHorizontal: 20}}>
              <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
              <Image source={item.image2} style={{height: 20, width: 100}} />
              <Text style={{marginTop: 5}}>{item.price}</Text>
              <View style={{flexDirection: 'row', marginTop: 8}}>
                <TouchableOpacity style={styles.buynowTextView}>
                  <Text style={styles.buynowText}>Buy Now</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/icons/delete.png')}
                    style={{width: 30, height: 30, marginLeft: 15}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
export default MyShop;
