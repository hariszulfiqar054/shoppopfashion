import React, {Component} from 'react';
import {
  Alert,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
  Image,
  TextInput,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {color} from 'react-native-reanimated';
import {UiColor} from './theme';
import {connect} from 'react-redux';
import {onLogout} from './reduxprovider/actions/ActionLogin';

let localArr = [];
let brandArr = [];
let catArr = [];
let Brand = '';

class Expandable_ListView extends Component {
  constructor() {
    super();
    this.state = {
      layout_Height: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.item.expanded) {
      this.setState(() => {
        return {
          layout_Height: null,
        };
      });
    } else {
      this.setState(() => {
        return {
          layout_Height: 0,
        };
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layout_Height !== nextState.layout_Height) {
      return true;
    }
    return false;
  }

  show_Selected_Category = (item) => {
    // Write your code here which you want to execute on sub category selection.
    if (this.props.item.category_Name == 'Latest Spots') {
      Actions.LatestSpot({Store: item.name});
    } else if (this.props.item.category_Name == 'Shop By Category') {
      Actions.Dresses({id: item.id});
    } else {
      Actions.Pro({Brand: item.name});
    }
  };

  render() {
    'this.props.item.category_Name', this.props.item.category_Name;

    return (
      <View style={styles.Panel_Holder}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={this.props.onClickFunction}
          style={styles.category_View}>
          <Text style={styles.category_Text}>
            {this.props.item.category_Name}{' '}
          </Text>
          <Image
            source={{
              uri:
                'https://reactnativecode.com/wp-content/uploads/2019/02/arrow_right_icon.png',
            }}
            style={styles.iconStyle}
          />
        </TouchableOpacity>

        <View style={{height: this.state.layout_Height, overflow: 'hidden'}}>
          {this.props.item.sub_Category.map((item, key) => (
            <TouchableOpacity
              key={key}
              style={styles.sub_Category_Text}
              onPress={this.show_Selected_Category.bind(this, item)}>
              <Text
                style={styles.expandListText}
                // onPress={this.Screens.bind(item , key)}
              >
                {item.name}{' '}
              </Text>

              {/* <View
                style={{ width: "100%", height: 1, backgroundColor: "red" }}
              /> */}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}
let array = [
  {
    expanded: false,
    category_Name: 'Featured Brands',
    sub_Category: brandArr,
  },

  {
    expanded: false,
    category_Name: 'Shop By Category',
    sub_Category: catArr,
  },

  {
    expanded: false,
    category_Name: 'Latest Spots',
    sub_Category: localArr,
  },

  {
    expanded: false,
    category_Name: 'Logout',
    sub_Category: [],
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = {AccordionData: [...array]};
  }

  componentWillMount() {
    ('componentWillMount drawer');
    this.storeList();

    // this.brandList();
  }

  Screens = (item) => {};

  storeList = () => {
    ('brandList');
    localArr = [];
    fetch('http://spotpopfashion.com/api/products/get_terms.php?action=store', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        'storeList res', res;
        if (res.status === true || res.status === 'true') {
          for (let item of res.data) {
            localArr.push({id: item.store_id, name: item.name});
          }
          for (let item1 of array) {
            if (item1.category_Name === 'Latest Spots') {
              item1.sub_Category = localArr;
            }
          }
          this.brandList();
          this.categoryName();
          this.BrandSerch();
        } else {
          ('storeList err');
          // Alert.alert(res.message);
        }
      })
      .catch((e) => {
        'storeList err', e;
      });
  };

  brandList = () => {
    ('brandList');
    brandArr = [];
    fetch('https://spotpopfashion.com/affiliate/api/brands/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        'brandList', res;
        if (res.success === true || res.status === 'true') {
          for (let item of res.data) {
            brandArr.push({name: item});
          }
          brandArr;
          for (let item1 of array) {
            if (item1.category_Name === 'Featured Brands') {
              item1.sub_Category = brandArr;
              'sub-array', item1.sub_Category;
            }
          }
        } else {
          ('res.message');
        }
      })
      .catch((e) => {
        'brandList error', e;
      });
  };

  categoryName = () => {
    ('catlist');
    catArr = [];
    fetch('https://spotpopfashion.com/affiliate/api/categories/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        'catlist', res;
        if (res.success === true || res.status === 'true') {
          for (let item of res.data) {
            catArr.push({name: item.cat_name, id: item.id});
          }
          catArr;
          for (let item1 of array) {
            if (item1.category_Name === 'Shop By Category') {
              item1.sub_Category = catArr;
              'sub-array', item1.sub_Category;
            }
          }
        } else {
          ('res.message');
        }
      })
      .catch((e) => {
        'catList error', e;
      });
  };
  update_Layout = (index, item) => {
    if (index === 3) {
      this.props.logout();
    }

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...this.state.AccordionData];
    array[index]['expanded'] = !array[index]['expanded'];
    this.setState(() => {
      return {
        AccordionData: array,
      };
    });
  };
  BrandSerch = (Brand) => {
    ('BrandSerch');
    fetch(
      `https://spotpopfashion.com/affiliate/api/search/brands/?search=${Brand}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
      .then((res) => res.json())
      .then((res) => {
        'Brand res', res;
        if (res.success == true || res.success == 'true') {
          'Brands Search', res;
          const BrandData = res.data;
          'BrandData', BrandData;
        }

        // else
        // {
        //  Alert.alert('Failed');

        // }
      })
      .catch((e) => {});
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <ScrollView
          contentContainerStyle={{paddingHorizontal: 10, paddingVertical: 5}}>
          {this.state.AccordionData.map((item, key) => (
            <Expandable_ListView
              key={item.category_Name}
              onClickFunction={this.update_Layout.bind(this, key, item)}
              item={item}
              // key =  {item.sub_Category}
              // onClickFunction = {Actions.Pro}
              // item= {item}
              // TouchableOpacity onPress ={Actions.Pro()}
              //  key={item.FeaturedBrands}
              //  onClickFunction={Actions.Pro}
              //  item={item}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    login: state.login,
    sidescreen: state.sidescreen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(onLogout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: '#F5FCFF',
    marginTop: 55,
  },

  iconStyle: {
    width: 30,
    height: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    tintColor: '#fff',
  },

  sub_Category_Text: {
    fontSize: 22,
    color: '#000',
    padding: 10,
  },

  category_Text: {
    textAlign: 'left',
    color: '#fff',
    fontSize: 21,
    padding: 10,
  },

  category_View: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E10264',
  },
  expandListText: {
    fontSize: 17,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: UiColor.GRAY,
    color: UiColor.GRAY,
  },
});
