import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
  Linking,
  ImageBackground,
  Alert,
  StyleSheet,
  ViewBase,
  ActivityIndicator,
} from "react-native";
import { w, h, totalSize } from "../utils/Dimensions";
import { Actions } from "react-native-router-flux";
import { AsyncStorage } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { set } from "react-native-reanimated";
import { WishList } from "../reduxprovider/actions/ActionWishList";
import { Pages } from "react-native-pages";
import { HeaderWithGoBackAndOption } from "../components/AppHeader/HeaderView";
import { IconAsset, Strings } from "../theme";
import { Products } from "../reduxprovider/actions/Actionsproducts";
import { ProductsSerch } from "../reduxprovider/actions/ActionProductSerch";
import { UiColor, TextColor, TextSize } from "../theme";
import { unstable_batchedUpdates } from "react-native";
import { Brandserch } from "../reduxprovider/actions/ActionBrandSerch";
import share from "react-native-share";
import { productCat } from "../reduxprovider/actions/ActionsProductbyCat";
const Pro = ({ navigation, ...props }) => {
  dispatch = useDispatch();

  const getProduct1 = useSelector((state) =>
    ("getProductConsole", state)
  );
  const getProductData = useSelector((state) => state.productData.showProduct);

  const getProduct2 = useSelector((state) =>
    ("getProductSearchConsole", state)
  );
  const setStoreData = useSelector((state) => state.ProductSerch.ProductSerch);
  ("setStoreData", setStoreData);
  ("id", setStoreData.id);
  const brandserch = useSelector((state) => ("getbrandlist", state));
  const BrandData = useSelector((state) => state.BrandSerch.BrandSerch);
  ("BrandData", BrandData);

  const [page, setpage] = useState("");
  const [Brand, setBrand] = useState("");
  const [brandData, setbrandData] = useState([]);
  const [uiRender, setUiRender] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  ("props......", props);

  useEffect(() => {
    products();
    Productserch();

    if (props != undefined) {
      ("Inside props", props.Brand);
      dispatch(Brandserch(props.Brand));
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, []);

  useEffect(() => {
    if (BrandData != undefined && BrandData.data != undefined) {
      setbrandData(BrandData.data);
    }
  }, [BrandData]);

  const products = async () => {
    const id = await AsyncStorage.getItem("id");
    dispatch(Products(id));
  };

  const Productserch = async () => {
    const token = await AsyncStorage.getItem("token");
    dispatch(ProductsSerch("Bearer " + token, page));
    ("page show");
  };
  const wishLists = async (item) => {
    const token = await AsyncStorage.getItem("token");
    const product_id = item.id;
    ("item", item);
    ("productid", product_id);
    dispatch(WishList("Bearer " + token, product_id));
  };
  const mycustomShare = async () => {
    const shareOptions = {
      message: "this is test message",
    };
    try {
      const ShareResponse = await share.open(shareOptions);
      (JSON.stringify(ShareResponse));
    } catch (error) {
      ("error", error);
    }
  };

  const searchApiFunc = (text) => {
    setBrand(text);
    ("stateBrandLength", Brand.length);
    if (text.length === 0) {
      dispatch(Brandserch(text));
    } else if (text.length > 0) {
      dispatch(Brandserch(text));
    }
    setUiRender(!uiRender);
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {HeaderWithGoBackAndOption("", Strings.PRODUCTS)}
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
            onChangeText={(text) => searchApiFunc(text)}
            value={Brand}
          />
        </View>
      </View>
      <FlatList
        data={brandData}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        style={{ marginBottom: 5 }}
        renderItem={({ item }) => (
          <View style={styles.flatListView}>
            <View style={{ flexDirection: "column" }}>
              <TouchableOpacity style={{}}>
                <ImageBackground
                  source={{ uri: item.image_link }}
                  style={styles.image1}
                  imageStyle={{ borderTopLeftRadius: 7 }}
                />
              </TouchableOpacity>
              <View style={{ marginLeft: 63, marginBottom: 5 }}>
                <Text style={{ color: "#ff1493", fontSize: 15 }}>
                  {item.price}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => wishLists(item)}>
                  <Image
                    source={require("../assets/icons/plusIcon.png")}
                    style={{ width: 25, height: 25, marginLeft: 15 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
                  <Image
                    source={require("../assets/icons/shopNow.png")}
                    style={{ width: 90, height: 30, marginLeft: 15 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={mycustomShare}>
                  <Image
                    source={require("../assets/icons/shareIcon.png")}
                    style={{ width: 25, height: 25, marginLeft: 15 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default Pro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarInput: {
    flexDirection: "row",
    marginVertical: w(3),
    height: h(6.5),
    width: "95%",
    borderWidth: w(0.4),
    borderColor: UiColor.BLACK,
    borderRadius: 7,
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
  },
  inputIcon: {
    width: w(6),
    height: h(5.5),
    marginLeft: w(2),
    justifyContent: "center",
  },
  inputField: {
    height: h(6),
    width: w(65),
    marginLeft: w(2),
  },
  flatListView: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginVertical: h(4),
    alignSelf: "center",
    width: 208,
  },
  image1: {
    height: h(45),
    width: w(46),
  },
  image2: {
    height: h(30),
    width: w(45),
  },
  imageTitle: {
    alignSelf: "center",
    marginVertical: h(35),
    color: UiColor.PINK,
  },
  line: {
    borderWidth: 1,
    borderColor: UiColor.GRAY,
    marginLeft: 5,
  },
});
