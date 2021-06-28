import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Alert,
  Image,
} from 'react-native';
import Eicon from 'react-native-vector-icons/Entypo';
import {w} from '../utils/Dimensions';
import {UiColor} from '../theme';
import axios from 'axios';

const Myshopcard = ({handleDelete, item}) => {
  const [product, setProduct] = useState(null);

  useEffect(()=>{
      getProduct()
  },[])

  const getProduct = async () => {
    try {
      const response = await axios.get(
        'https://spflaunchpad.com/affiliate/api/products/' + item?.id,
      );
      setProduct(response?.data?.data)
    } catch (error) {
      console.log(error.response.data);

    }
  };
  return (
    <View style={{position: 'relative'}}>
      <TouchableNativeFeedback
        onPress={() => {
          Alert.alert(
            'Delete Wishlist',
            'Are you sure you want to delete it ?',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => handleDelete(item?.id),
              },
            ],
            {cancelable: true},
          );
        }}>
        <Eicon
          style={{
            position: 'absolute',
            zIndex: 4444,
            right: '3%',
            top: '5%',
          }}
          size={w(7)}
          color={UiColor.PINK}
          name="circle-with-cross"
        />
      </TouchableNativeFeedback>
      <Image
        source={{
          uri:
            product?.image_link ||
            'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png',
        }}
        style={{width: w(40), height: w(40)}}
      />
      <Text
        style={{
          alignSelf: 'center',
          fontSize: w('5'),
          fontWeight: 'bold',
        }}>
        ID : {item?.id}
      </Text>
    </View>
  );
};

export default Myshopcard;

const styles = StyleSheet.create({});
