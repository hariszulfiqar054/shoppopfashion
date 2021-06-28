import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import {w, h, totalSize} from '../utils/Dimensions';
import {UiColor, TextColor, TextSize} from '../theme';
import Mcicon from 'react-native-vector-icons/MaterialCommunityIcons';
import Eicon from 'react-native-vector-icons/Entypo';

const Hotspotcard = ({
  img,
  price,
  onPressShare,
  showSocial,
  imgStyle,
  onPressAdd,
}) => {
  console.log('--------->', img);
  return (
    <View style={{marginTop: w('4')}}>
      <TouchableOpacity>
        <FastImage
          resizeMode="cover"
          source={{
            uri: img,
            priority: FastImage.priority.high,
          }}
          style={[styles.imageThumbnail3, imgStyle]}
        />
      </TouchableOpacity>
      <Text style={styles.price}>{price}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity onPress={onPressAdd}>
          <Image
            style={styles.bigIcon}
            source={require('../assets/icons/add.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.bigIcon}
            source={require('../assets/icons/shop.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressShare}>
          <Image
            style={styles.bigIcon}
            source={require('../assets/icons/share.jpg')}
          />
        </TouchableOpacity>
      </View>
      {showSocial ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: w(40),
            alignSelf: 'center',
            marginTop: w(4),
          }}>
          <TouchableOpacity
            style={{backgroundColor: UiColor.PINK, borderRadius: 100}}>
            <Mcicon
              name="facebook"
              color={UiColor.WHITE}
              size={w('6')}
              style={{padding: w(2)}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: UiColor.PINK, borderRadius: 100}}>
            <Eicon
              name="pinterest"
              color={UiColor.WHITE}
              size={w('6')}
              style={{padding: w(2)}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: UiColor.PINK, borderRadius: 100}}>
            <Mcicon
              name="twitter"
              color={UiColor.WHITE}
              size={w('6')}
              style={{padding: w(2)}}
            />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default React.memo(Hotspotcard);

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
  price: {
    color: UiColor.PINK,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 3,
    fontSize: w(5),
  },
  bigIcon: {
    width: w('10'),
    height: w('10'),
    resizeMode: 'contain',
  },
});
