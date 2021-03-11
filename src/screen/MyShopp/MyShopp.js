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
  ActivityIndicator,
  FlatList,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';
import Eicon from 'react-native-vector-icons/Entypo';

import {IconAsset, Strings, UiColor} from '../../theme';
import {HeaderWithGoBackAndOption} from '../../components/AppHeader';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';
import {UserDetail} from '../../reduxprovider/actions/ActionUserDetail';
import {useSelector, useDispatch} from 'react-redux';

import axios from 'axios';
import Hotspotcard from '../../components/hotspotcard';
import {addWishList} from '../../services/wishlist';
import {w} from '../../utils/Dimensions';

const MyShopp = ({navigation}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [wishListData, setWishListData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [filterdata, setFilterData] = useState([]);
  const [filterLoader, setFilterLoader] = useState(false);
  const [filterTxt, setFilterTxt] = useState('');
  const [selectedFilterData, setSelectedFilterData] = useState(null);

  const getUserDetail = useSelector((state) => state.userdetail.showUserDetail);

  // ("userDetail", getUserDetail)

  useEffect(() => {
    tokenShow();
    getUserName();
    getWishList();
  }, []);

  const getWishList = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://spotpopfashion.com/affiliate/api/user/wishlist',
      );

      console.log(response?.data?.success);
      if (response?.data?.success) {
        setWishListData(response?.data?.success);
      }
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  };
  const tokenShow = async () => {
    const token = await AsyncStorage.getItem('token');
    'Bearer  ' + token;
    dispatch(UserDetail('Bearer ' + token));
  };

  const getUserName = async () => {
    const Name = await AsyncStorage.getItem('name');
    setName(Name);
  };
  const onGetFilterData = async (search) => {
    setFilterLoader(true);
    try {
      const response = await axios.get(
        `https://spotpopfashion.com/affiliate/api/search/products/?search=${search}`,
      );
      setFilterData(response?.data?.data?.data);
    } catch (error) {
      alert(error.message);
    }
    setFilterLoader(false);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        'https://spotpopfashion.com/affiliate/api/user/wishlist/' + id,
      );
      if (response?.data?.success) {
        const temp = wishListData.filter((data) => data?.id !== id);
        setWishListData([...temp]);
        alert('Delete Successfully');
      } else alert('Error while deleting item');
    } catch (error) {
      alert(error?.message);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          // marginTop: w(20),
          alignItems: 'center',
          flexGrow: 1,
        }}>
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
          <Image
            style={styles.avatar}
            source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
          />
        </View>
        {filterLoader ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: w(25),
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
              key={'_'}
              style={{marginTop: 60}}
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
              keyExtractor={(item) => item?.id}
            />
          )
        ) : (
          <View style={{marginTop: w(25)}}>
            <FlatList
              key={'#'}
              data={wishListData}
              renderItem={({item}) => (
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
                        item?.image_link ||
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
              )}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyShopp;
