import React, {useState, useEffect, lazy, Suspense} from 'react';
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
  BackHandler,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Loader from '../../components/Loader';
import {useNetInfo} from '@react-native-community/netinfo';
import {Actions} from 'react-native-router-flux';
import {IconAsset, Strings, UiColor} from '../../theme';
import {HeaderWithGoBackAndOption} from '../../components/AppHeader';
import {TextInputField} from '../../components/TextInput';
import {useSelector, useDispatch} from 'react-redux';
import {Brandserch} from '../../reduxprovider/actions/ActionBrandSerch';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import axios from 'axios';
import {color} from 'react-native-reanimated';
import Hotspotcard from '../../components/hotspotcard';
// const Hotspotcard = lazy(() => import('../../components/hotspotcard'));
import {addWishList} from '../../services/wishlist';

const Home = (navigation) => {
  const BrandData = useSelector((state) => state.BrandSerch.BrandSerch);
  const dispatch = useDispatch();
  const item = [
    {
      name: 'TURQUOISE',
      hotSpot:
        'https://image.freepik.com/free-photo/trendy-female-with-cocktail-shopping-bags_23-2148170087.jpg',
    },
    {
      name: 'EMERALD',
      hotSpot:
        'http://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9',
    },
    {
      name: 'SUN FLOWER',
      hotSpot:
        'https://image.freepik.com/free-photo/successful-business-woman_1328-2303.jpg',
    },
    {
      name: 'CARROT',
      hotSpot:
        'https://image.freepik.com/free-photo/trendy-female-with-cocktail-shopping-bags_23-2148170087.jpg',
    },
  ];

  const [showSocial, setShowSocial] = useState('');
  const [loader, setloader] = useState(false);
  const netInfo = useNetInfo();
  const [filterdata, setFilterData] = useState([]);
  const [filterLoader, setFilterLoader] = useState(false);
  const [filterTxt, setFilterTxt] = useState('');
  const [selectedFilterData, setSelectedFilterData] = useState(null);
  const [search, setsearch] = useState();
  const [storeData, setStoreData] = useState([]);
  const [fadeValue] = useState(new Animated.Value(0));
  const [text, setText] = React.useState('');
  const hasUnsavedChanges = Boolean(text);
  const [Brand, setBrand] = useState('');
  const [uiRender, setUiRender] = useState(false);
  const [brandData, setbrandData] = useState([]);
  const backAction = () => {
    if (navigation.navigation.isFocused()) {
      Alert.alert('Spotpop Fashion!', 'Are you sure you want to exit app ?', [
        {
          text: 'Cancel',
          onPress: () => 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, [backAction]);

  useEffect(() => {
    if (BrandData != undefined && BrandData.data != undefined) {
      setbrandData(BrandData.data);
    }
  }, [BrandData]);

  const onGetFilterData = async (search) => {
    setFilterLoader(true);
    try {
      const response = await axios.get(
        `https://spflaunchpad.com/affiliate/api/search/products/?search=${search}`,
      );
      setFilterData(response?.data?.data?.data);
      console.log(response?.data?.data?.data);
    } catch (error) {
      alert(error.message);
    }
    setFilterLoader(false);
  };

  startAnimation = () => {
    Animated.timing(fadeValue, {
      toValue: 2,
      duration: 500,
    }).start();
  };

  useEffect(() => {
    startAnimation();
    storeProductList();
  }, []);

  const storeProductList = () => {
    fetch('https://spflaunchpad.com/affiliate/api/products', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setStoreData(res.data?.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  let filterData = [];
  filterData = search
    ? item.filter(
        (row) => row.name.toLowerCase().indexOf(search.toLowerCase()) > -1,
      )
    : item;

  const _filter = (text) => {
    setsearch(text);
  };

  const goToWebLink = (url) => {
    Linking.openURL(url);
  };

  const searchApiFunc = (text) => {
    setBrand(text);

    if (text.length === 0) {
      dispatch(Brandserch(text));
    } else if (text.length > 0) {
      dispatch(Brandserch(text));
    }
    setUiRender(!uiRender);
  };


  return (
    <SafeAreaView style={styles.container}>
      <Loader loading={loader} />

      {HeaderWithGoBackAndOption('', Strings.HOME)}
      {netInfo.type == 'none' ? (
        <View
          style={{
            backgroundColor: '#FF0000',
            height: 20,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 12,
              color: '#fff',
              fontWeight: 'bold',
            }}>
            No Internet Connection
          </Text>
        </View>
      ) : null}
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
              } else {
                return;
              }
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
            data={filterdata}
            renderItem={({item}) => (
              <Suspense fallback={<Text>Loading...</Text>}>
                <Hotspotcard
                  onPressAdd={async () => await addWishList(item?.id)}
                  img={item?.image_link}
                  price={item?.price}
                  imgStyle={{alignSelf: 'center'}}
                  onPressShare={() => {
                    if (selectedFilterData == item?.id) {
                      setSelectedFilterData(null);
                    } else {
                      setSelectedFilterData(item?.id);
                    }
                  }}
                  showSocial={item?.id == selectedFilterData}
                />
              </Suspense>
            )}
            keyExtractor={(item) => item?.id}
          />
        )
      ) : (
        <ScrollView
          style={{marginHorizontal: 5, marginBottom: 5}}
          showsVerticalScrollIndicator={false}>
          <View style={{minHeight: 150}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={storeData}
              horizontal={true}
              renderItem={({item}) => (
                <View>
                  <TouchableOpacity
                    onPress={() => Linking.openURL(item.ProductLink)}>
                    <Image
                      resizeMode="cover"
                      source={{
                        uri: item.image_link,
                      }}
                      style={[styles.imageThumbnail]}
                    />
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <Text style={styles.hotspotTitle}>{Strings.FEATURED_STORES}</Text>
          <View style={{minHeight: 150}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={storeData}
              horizontal={true}
              renderItem={({item}) => (
                <View>
                  <TouchableOpacity
                    onPress={() => Linking.openURL(item.ProductLink)}>
                    <Image
                      resizeMode="cover"
                      source={{
                        uri: item.image_link,
                      }}
                      style={[styles.imageThumbnail2]}
                    />
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
            {console.log(storeData[0])}
          </View>
          <Text style={styles.hotspotTitle}>{Strings.HOT_SPOT}</Text>

          <FlatList
            showsHorizontalScrollIndicator={false}
            data={storeData}
            horizontal={true}
            renderItem={({item}) => (
              <Suspense fallback={<Text>Loading...</Text>}>
                <Hotspotcard
                  onPressAdd={async () => await addWishList(item?.id)}
                  img={item?.image_link}
                  price={item?.price}
                  onPressShare={() => {
                    if (showSocial == item?.id) {
                      setShowSocial(null);
                    } else {
                      setShowSocial(item?.id);
                    }
                  }}
                  showSocial={item?.id == showSocial}
                />
              </Suspense>
            )}
            keyExtractor={(item, index) => index.toString()}
          />

          <FlatList
            showsHorizontalScrollIndicator={false}
            data={storeData}
            horizontal={true}
            renderItem={({item}) => (
              <Suspense fallback={<Text>Loading...</Text>}>
                <Hotspotcard
                  onPressAdd={async () => await addWishList(item?.id)}
                  img={item?.image_link}
                  price={item?.price}
                  onPressShare={() => {
                    if (showSocial == item?.id) {
                      setShowSocial(null);
                    } else {
                      setShowSocial(item?.id);
                    }
                  }}
                  showSocial={item?.id == showSocial}
                />
              </Suspense>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          {/*
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={BrandData.data}
          horizontal={true}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
                <Image
                  resizeMode="cover"
                  source={{
                    uri: item.image_link,
                  }}
                  style={[styles.imageThumbnail3]}
                />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        /> */}

          <View />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default React.memo(Home);
