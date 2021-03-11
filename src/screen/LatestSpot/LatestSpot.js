import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
  Animated,
  Linking,
  ImageBackground,
  Alert,
  ActivityIndicator,
} from 'react-native';

import {IconAsset, Strings, UiColor} from '../../theme';
import {HeaderWithGoBackAndOption} from '../../components/AppHeader';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import {Storesearch} from '../../reduxprovider/actions/ActionStoreSerch';
import {useSelector, useDispatch} from 'react-redux';
import wishlistShow from '../../reduxprovider/reducers/ReducerWishlistshow';
import {WishList} from '../../reduxprovider/actions/ActionWishList';
import {AsyncStorage} from 'react-native';
import share from 'react-native-share';
import axios from 'axios';

const LatestSpot = ({navigation, ...props}) => {
  dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://spotpopfashion.com/affiliate/api/search/stores',
      );

      if (response.data) {
        setData(response?.data?.data?.data);
      }
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  };
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {HeaderWithGoBackAndOption('', Strings.LATESTSPOT)}
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
            onChangeText={(text) => StoresearchApiFunc(text)}
          />
        </View>
      </View>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-around'}}
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => Actions.push('HotSpotDetail', {data: item?.store})}>
            <View style={styles.btnWrapper}>
              <Text style={styles.txt}>{item?.store}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item?.id?.toString()}
      />
    </SafeAreaView>
  );
};

export default LatestSpot;
