import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  Linking,
  ImageBackground,
  Alert,
} from 'react-native';

import {IconAsset, Strings, UiColor} from '../../theme';
import {HeaderWithGoBackAndOption} from '../../components/AppHeader';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';
import {UserDetail} from '../../reduxprovider/actions/ActionUserDetail';
import {useSelector, useDispatch} from 'react-redux';

const MyShopp = ({navigation}) => {
  dispatch = useDispatch();

  const [name, setName] = useState('');

  const getUserDetail = useSelector((state) => state.userdetail.showUserDetail);

  // ("userDetail", getUserDetail)

  useEffect(() => {
    tokenShow();
    getUserName();
  }, []);

  const tokenShow = async () => {
    const token = await AsyncStorage.getItem('token');
    'Bearer  ' + token;
    dispatch(UserDetail('Bearer ' + token));
  };

  const getUserName = async () => {
    const Name = await AsyncStorage.getItem('name');
    setName(Name);
  };

  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <Text style={styles.shopText}>MYSHOP</Text>

        <View style={styles.searchBarInput}>
          <View>
            <Image
              style={styles.inputIcon}
              source={IconAsset.ic_search}
              resizeMode="contain"
            />
          </View>
          <View>
            <TextInput
              style={styles.inputField}
              underlineColorAndroid="transparent"
              placeholder="Search Here"
              // value={search}
              // onChangeText={_filter}
            />
          </View>
        </View>
        <Image
          style={styles.avatar}
          source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.name}>{name}</Text>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>STORES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={Actions.Dresses}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>DRESSES</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>SKIRTS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>TOPS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => Actions.WishListShow()}>
          <Text style={styles.buttonText}>My Shop</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyShopp;
