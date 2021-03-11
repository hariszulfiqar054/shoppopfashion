import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    FlatList,
    SafeAreaView,
    Animated,
    Linking,
    Alert,
} from "react-native";
import Loader from "../../components/Loader";
import { IconAsset, Strings, UiColor } from "../../theme";
import { HeaderWithGoBack } from "../../components/AppHeader";
import styles from "./styles";
import { h } from "../../utils/Dimensions";

export default class StoreDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            detailsList: [],
        }
    }

    componentWillMount() {
        this.storeDetailsList(this.props.storeId);
        // (this.props.storeId);
    }

    storeDetailsList = (id) => {
        fetch(`http://spotpopfashion.com/api/products/store.php?action=product_by_store&store_id=${id}&offset=500&limit=100`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then(res => {
                if (res.status === true || res.status === "true") {
                    ("Store Response",res.data);
                    this.setState({
                        detailsList: res.data
                    })
                }
                else {
                    this.setState({
                        detailsList: []
                    })
                }
                (detailsList);
            })
            .catch((e) => {
                (e);
            });
    }

    goToWebLink = (url) => {
        Linking.openURL(url)
    }

    render() {
        
        return (
            <View style={styles.container}>
                <Loader loading={this.state.loading} />
                {HeaderWithGoBack("", Strings.STOREDETAILS)}
                <ScrollView contentContainerStyle={{}}>

                    <View style={{ minHeight: 150 }}>
                        {
                           
                            this.state.detailsList.length == 0 &&

                            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 5 }}>
                                <Text style={{ fontSize: 19, fontWeight: 'bold' }}>No products found</Text>
                            </View>
                        }
                        <FlatList
                            numColumns={2}
                            data={this.state.detailsList}
                            renderItem={({ item }) => (
                                <View>
                                    <TouchableOpacity onPress={() => this.goToWebLink(item.ProductLink)}>
                                        <Animated.Image
                                            resizeMode="cover"
                                            source={{ uri: item.image }}
                                            style={[styles.imageThumbnail, { opacity: 1 }]}
                                        />
                                    </TouchableOpacity>
                                    <View style={{marginLeft:9}}>
                                        {/* <Image
                                            source={require("../../assets/icons/logo.png")}
                                            style={{
                                                width: 18,
                                                height: 18,
                                                marginTop: 6,
                                                alignSelf: 'center'
                                            }}
                                        /> */}
                                        <Text style={styles.itemText}>{item.sku}</Text>
                                    </View>
                                </View>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                    <View style={{ height: h(15) }} />
                </ScrollView>
            </View>
        );
    }

}