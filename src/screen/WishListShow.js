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
  StyleSheet,
  UiColor,
} from 'react-native';
import {w, h, totalSize} from '../utils/Dimensions';
import {useSelector, useDispatch} from 'react-redux';
import {HeaderWithGoBack} from '../components/AppHeader/HeaderView';
import {IconAsset, Strings} from '../theme';
import {AsyncStorage} from 'react-native';
import {DeleteProduct} from '../reduxprovider/actions/ActionDeleteProduct';
import {WishListShow} from '../reduxprovider/actions/ShowWishList';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';

import {IS_LOGGED} from '../reduxprovider/types';
const WishlistShow = ({navigation}) => {
  const dispatch = useDispatch();
  const [title, settitle] = useState('');
  const [price, setprice] = useState('');
  const [image_link, setimage_link] = useState('');
  const [link, setlink] = useState('');
  const [id, setid] = useState('');
  const [uiRender, setUiRender] = useState(false);
  const [product, setproduct] = useState('');
  const [wishListData, setWishListData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getWishList();
  }, []);

  const getWishList = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://spotpopfashion.com/affiliate/api/user/wishlist',
      );

      if (response?.data?.success) {
        setWishListData(response?.data?.success);
      }
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  };

  const wishLIST = useSelector((state) => ('getwishlist', state));
  const getWishlist = useSelector((state) => state.showWishList.showWishList);

  const DeletedItem = useSelector((state) => ('Delete_Product', state));

  const getDeletedRes = useSelector(
    (state) => state.showDeletedProduct.showDeletedProduct,
  );

  useEffect(() => {
    getDtails();
    WishListshow();
  }, []);

  useEffect(() => {
    if (getDeletedRes && getDeletedRes.success === 'Wishlist Deleted') {
      setUiRender(!uiRender);
    }
  }, [getDeletedRes]);

  const getDtails = async () => {
    const title = await AsyncStorage.getItem('title');
    const price = await AsyncStorage.getItem('price');
    const image_link = await AsyncStorage.getItem('image_link');
    const link = await AsyncStorage.getItem('link');

    'title', title;
    'link', link;
    settitle(title);
    setprice(price);
    setimage_link(image_link);
    setlink(link);
  };

  const proDelete = async (item) => {
    const token = await AsyncStorage.getItem('token');
    const id_del = item.id;
    'id_del', id_del;
    dispatch(DeleteProduct('Bearer ' + token, id_del));
    dispatch(WishListShow('Bearer ' + token));
  };

  const WishListshow = async () => {
    const token = await AsyncStorage.getItem('token');
    dispatch(WishListShow('Bearer ' + token));
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
    <SafeAreaView style={styles.container}>
      {HeaderWithGoBack(Actions.tabbar, Strings.MYSHOP)}
      {wishListData.length == 0 && !isLoading ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 5}}>
          <Text style={{fontSize: 19, fontWeight: 'bold'}}>
            No products found
          </Text>
        </View>
      ) : (
        <FlatList
          data={wishListData}
          showsVerticalScrollIndicator={false}
          style={{}}
          renderItem={({item}) => (
            <View style={styles.mainView}>
              <View>
                <Image source={item.image_link} style={styles.fashionImage} />
              </View>

              <View style={{flex: 1, paddingHorizontal: 20}}>
                <Text style={{fontWeight: 'bold'}}>{item.id}</Text>
                <Image source={item.image2} style={{height: 20, width: 100}} />
                <Text style={{marginTop: 5}} />
                <View style={{flexDirection: 'row', marginTop: 8}}>
                  <TouchableOpacity style={styles.buynowTextView}>
                    <Text style={styles.buynowText}>Buy Now</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleDelete(item?.id)}>
                    <Image
                      source={require('../assets/icons/delete.png')}
                      style={{
                        width: 30,
                        height: 30,
                        marginLeft: 15,
                        padding: 1,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};
export default WishlistShow;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  touchOpacityContainer: {
    flexDirection: 'row',
    borderRadius: w(3),
    minHeight: w(24),
    width: w(96),
    backgroundColor: '#fff',
    marginTop: 10,
    alignSelf: 'center',
  },
  imageView: {
    width: w(25),
    height: h(15),
    margin: 7,
    borderRadius: 7,
  },

  textView: {
    width: '50%',
    padding: 10,
    color: '#000',
  },
  buttonContainer: {
    height: h(7),
    width: w(90),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: w(3),
    alignSelf: 'center',
    marginBottom: w(5),
  },
  fogotButton: {
    marginTop: w(5),
    //  backgroundColor: UiColor.PINK
  },
  signUpText: {
    //  color: UiColor.WHITE,
    //  fontSize: TextSize.h1,
    fontWeight: 'bold',
  },
  mainView: {
    marginTop: 5,
    minHeight: 120,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  fashionImage: {
    height: 102,
    width: 80,
    borderRadius: 2,
  },
  buynowTextView: {
    width: 130,
    height: 35,
    borderRadius: 3,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buynowText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
