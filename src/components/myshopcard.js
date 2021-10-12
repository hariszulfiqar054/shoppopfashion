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
import {w, h} from '../utils/Dimensions';
import {UiColor} from '../theme';
import axios from 'axios';

const Myshopcard = ({handleDelete, item}) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct();
  }, []);
  console.log(item.id);

  const getProduct = async () => {
    try {
      const response = await axios.get(
        'https://spflaunchpad.com/affiliate/api/products/' + item?.product_id,
      );
      setProduct(response?.data?.data);
      console.log(response.data.data);
    } catch (error) {}
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
            'https://spflaunchpad.com/pinterest/' + product?.image_link ||
            'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png',
        }}
        style={[styles.imageThumbnail3]}
      />
      <Text
        style={{
          alignSelf: 'center',
          fontSize: w('5'),
          fontWeight: 'bold',
        }}
      />
    </View>
  );
};

export default Myshopcard;

const styles = StyleSheet.create({
  imageThumbnail3: {
    alignItems: 'center',
    height: h(45),
    width: w(46),
    marginLeft: w(2),
    marginTop: w(2),
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
});
