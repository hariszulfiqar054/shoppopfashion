import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';
import Hotspotcard from '../../components/hotspotcard';
import {HeaderWithGoBackAndOption} from '../../components/AppHeader';
import {addWishList} from '../../services/wishlist';

const HotSpotDetail = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [showSocial, setShowSocial] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://spflaunchpad.com/affiliate/api/search/stores/?search=${props?.data}`,
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
    <SafeAreaView style={{flex: 1}}>
      {HeaderWithGoBackAndOption('', props?.data)}

      <FlatList
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-around'}}
        data={data}
        renderItem={({item}) => (
          <Hotspotcard
            onPressAdd={async () => await addWishList(item?.id)}
            img={item?.image_link}
            price={item?.price}
            onPressShare={() => {
              if (showSocial == item?.id) {
                setShowSocial(null);
              } else setShowSocial(item?.id);
            }}
            showSocial={item?.id == showSocial}
          />
        )}
        keyExtractor={(item) => item?.id?.toString()}
      />
    </SafeAreaView>
  );
};

export default HotSpotDetail;

const styles = StyleSheet.create({});
