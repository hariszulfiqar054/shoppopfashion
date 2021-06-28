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
  ActivityIndicator,
} from 'react-native';
// import Loader from "../../components/Loader";
// import { useNetInfo } from "@react-native-community/netinfo";
// import { Actions } from "react-native-router-flux";
import {IconAsset, Strings, UiColor} from '../../theme';
import {HeaderWithGoBackAndOption} from '../../components/AppHeader';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
import Hotspotcard from '../../components/hotspotcard';
import {addWishList} from '../../services/wishlist';

// const Items = [
//   {
//     image1: require("../../assets/icons/fashion.jpg"),
//   },
//   {
//     image1: require("../../assets/icons/banner6.jpg"),
//   },
//   {
//     image1: require("../../assets/icons/fashion3.jpg"),
//   },
//   {
//     image1: require("../../assets/icons/fashion.jpg"),
//   },
//   {
//     image1: require("../../assets/icons/banner6.jpg"),
//   },
//   {
//     image1: require("../../assets/icons/fashion3.jpg"),
//   },
// ];
const Trends = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [filterdata, setFilterData] = useState([]);
  const [filterLoader, setFilterLoader] = useState(false);
  const [filterTxt, setFilterTxt] = useState('');
  const [selectedFilterData, setSelectedFilterData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://spflaunchpad.com/affiliate/api/categories',
      );

      if (response.data) {
        setData(response?.data?.data);
      }
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  };

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
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {HeaderWithGoBackAndOption('', 'Category')}

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
            key={'_'}
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
        <FlatList
          key={'#'}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                Actions.push('CategoryDetail', {data: item});
              }}>
              <View style={styles.btnWrapper}>
                <Text style={styles.txt}>{item?.cat_name}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item?.id?.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default Trends;
