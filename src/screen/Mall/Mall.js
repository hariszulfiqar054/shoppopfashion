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
import {IconAsset, Strings, UiColor} from '../../theme';
import {HeaderWithGoBackAndOption} from '../../components/AppHeader';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import {mallSearch} from '../../reduxprovider/actions/Actionsmall';
import {useSelector, useDispatch} from 'react-redux';
import {mallSearchtwo} from '../../reduxprovider/actions/Actionsmall2';
import {w, h, totalSize} from '../../utils/Dimensions';
import axios from 'axios';
import Hotspotcard from '../../components/hotspotcard';
import {addWishList} from '../../services/wishlist';

const Items = [
  {
    image1: require('../../assets/icons/fashion.jpg'),
  },
  {
    image1: require('../../assets/icons/banner6.jpg'),
  },
  {
    image1: require('../../assets/icons/fashion3.jpg'),
  },
  {
    image1: require('../../assets/icons/fashion.jpg'),
  },
  {
    image1: require('../../assets/icons/banner6.jpg'),
  },
  {
    image1: require('../../assets/icons/fashion3.jpg'),
  },
];

const Mall = () => {
  const dispatch = useDispatch();
  const MallSearch = useSelector((state) => ('getmalllist', state));

  const MallData = useSelector((state) => state.mallSerch.mallSearch);

  const MallsData = useSelector((state) => state.mallSerch.mallSearch);
  const MallData2 = useSelector((state) => state.mallSearch2.mallSearch2);

  const [filterdata, setFilterData] = useState([]);
  const [filterLoader, setFilterLoader] = useState(false);
  const [filterTxt, setFilterTxt] = useState('');
  const [selectedFilterData, setSelectedFilterData] = useState(null);
  useEffect(() => {
    mallsSearch();
    mallsSearch2();
  }, []);

  const mallsSearch = async () => {
    let Key = 'row_one';
    dispatch(mallSearch(Key));
  };

  const mallsSearch2 = async () => {
    let Key2 = 'row_two';
    dispatch(mallSearchtwo(Key2));
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
  return (
    <SafeAreaView style={styles.container}>
      {HeaderWithGoBackAndOption('', Strings.MALL)}

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
        <ScrollView style={{marginBottom: 2}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', alignSelf: 'center'}}>
            ROW - 1
          </Text>
          <FlatList
            data={MallData.data}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            style={{marginBottom: 5}}
            renderItem={({item}) => (
              <View style={styles.imageView}>
                <TouchableOpacity style={{width: w(49)}}>
                  <Image
                    source={{
                      uri:
                        'https://spflaunchpad.com/pinterest/images/' +
                        item.image,
                    }}
                    style={styles.image1}
                  />
                </TouchableOpacity>
              </View>
            )}
          />

          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            Row - 2
          </Text>
          <FlatList
            key={'#'}
            data={MallData2.data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginBottom: 5}}
            renderItem={({item}) => (
              <View style={styles.imageView}>
                <TouchableOpacity style={{width: w(49)}}>
                  <Image
                    source={{
                      uri:
                        'https://spflaunchpad.com/pinterest/images/' +
                        item.image,
                    }}
                    style={styles.image1}
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Mall;
