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
import Hotspotcard from '../../components/hotspotcard';
import {addWishList} from '../../services/wishlist';

const LatestSpot = ({navigation, ...props}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const [filterdata, setFilterData] = useState([]);
  const [filterLoader, setFilterLoader] = useState(false);
  const [filterTxt, setFilterTxt] = useState('');
  const [selectedFilterData, setSelectedFilterData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const onGetFilterData = async (search) => {
    setFilterLoader(true);
    try {
      const response = await axios.get(
        `https://spotpopfashion.com/affiliate/api/search/products/?search=${search}`,
      );
      setFilterData(response?.data?.data?.data);
      console.log(response?.data?.data?.data);
    } catch (error) {
      alert(error.message);
    }
    setFilterLoader(false);
  };

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
            onChangeText={(text) => {
              setFilterTxt(text);
              if (text?.length >= 3) {
                onGetFilterData(text);
              } else return;
            }}
            value={filterTxt}
          />
        </View>
      </View>
      {filterLoader ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={'large'} color={UiColor.PINK} />
        </View>
      ) : filterTxt.length >= 3 ? (
        filterdata?.length == 0 ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>No Data!</Text>
          </View>
        ) : (
          <FlatList
            key={'#'}
            numColumns={1}
            data={filterdata}
            renderItem={({item}) => (
              <Hotspotcard
                onPressAdd={async () => await addWishList(item?.id)}
                img={item?.image_link}
                price={item?.price}
                imgStyle={{alignSelf: 'center'}}
                onPressShare={() => {
                  if (selectedFilterData == item?.id) {
                    setSelectedFilterData(null);
                  } else setSelectedFilterData(item?.id);
                }}
                showSocial={item?.id == selectedFilterData}
              />
            )}
            keyExtractor={(item) => '#' + item?.id}
          />
        )
      ) : (
        <FlatList
          key={'_'}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-around'}}
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                Actions.push('HotSpotDetail', {data: item?.store})
              }>
              <View style={styles.btnWrapper}>
                <Text style={styles.txt}>{item?.store}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => '_' + item?.id?.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default LatestSpot;
