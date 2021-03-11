import React, {useState, useEffect} from 'react';
import {
  Scene,
  Router,
  Actions,
  Drawer,
  Stack,
  Tabs,
} from 'react-native-router-flux';
import {w, h, totalSize} from '../src/theme/TextSize';
import {UiColor, TextColor, TextSize} from '../src/utils/Dimensions';
import {useSelector} from 'react-redux';
import {connect} from 'react-redux';
import {Dimensions, Image, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Splash from './screen/Splash';
import SignUp from './screen/SignUp';
import Login from './screen/Login';
import ForgotPassword from './screen/ForgotPassword';
import Home from './screen/Home';
import drawerContain from './drawerContain';
import Search from './screen/Search';
import MyShop from './screen/MyShop';
import Mall from './screen/Mall';
import Dresses from './screen/Dresses';
import LatestSpot from './screen/LatestSpot';
import Cart from './screen/Cart';
import Profile from './screen/Profile';
import Trends from './screen/Trends';
import ProductDetails from './screen/ProductDetails';
import LandingPage from './screen/LandingPage';
import Notification from './screen/Notification';
import StoreDetails from './screen/StoreDetails/StoreDetails';
import MyShopp from './screen/MyShopp';
import Pro from './screen/Pro';
import WishListShow from './screen/WishListShow';
import HotSpotDetail from './screen/HotSpotDetail/HotSpotDetail';
import CategoryDetail from './screen/CategoryDetail/CategoryDetail';
import Oicon from 'react-native-vector-icons/Octicons';
import axios from 'axios';

const TabIcon = ({img, focused}) => {
  return (
    <Image source={img} style={{width: 25, height: 25, tintColor: '#E10264'}} />
  );
};

const TabTxt = ({txt, focused}) => <Text>{txt}</Text>;

var width = Dimensions.get('window').width;
const RouterWithRedux = connect()(Router);

const Root = () => {
  const [token, settoken] = useState(null);
  const userLog = useSelector((state) => state?.loginScreen);

  useEffect(() => {
    AsyncStorage.getItem('token').then((token) => {
      settoken(token);
      axios.defaults.headers.Authorization = 'Bearer ' + token;
      // console.log(token);
    });
  });

  return (
    <RouterWithRedux navigationBarStyle={{backgroundColor: '#5dca67'}}>
      <Scene key="root" hideNavBar hideTabBar>
        <Stack key="app">
          <Scene
            component={Splash}
            hideNavBar={true}
            key="Splash"
            title="Splash"
            initial={true}
          />
          <Scene
            component={SignUp}
            hideNavBar={true}
            key="SignUp"
            title="SignUp"
          />
          <Scene
            component={Login}
            hideNavBar={true}
            key="Login"
            title="Login"
            //initial={true}
          />
          <Scene
            component={ForgotPassword}
            hideNavBar={true}
            key="ForgotPassword"
            title="ForgotPassword"
          />
          <Scene
            component={StoreDetails}
            hideNavBar={true}
            key="StoreDetails"
            title="StoreDetails"
          />

          <Scene component={Home} hideNavBar={true} key="Home" title="Home" />

          <Drawer
            hideNavBar
            key="drawer"
            onExit={() => {
              ('Drawer closed');
            }}
            onEnter={() => {
              ('Drawer opened');
            }}
            contentComponent={drawerContain}
            drawerWidth={width - 100}>
            <Tabs
              key="tabbar"
              tabs
              tabBarStyle={{backgroundColor: '#FFFFFF'}}
              activeTintColor="#E10264"
              inactiveTintColor="grey">
              <Scene
                // key="1"

                title="HOME"
                icon={() => (
                  <Oicon name="primitive-dot" size={45} color={'#E10264'} />
                )}
                initial={true}
                // img={require("../src/assets/icons/ic_home.png")}
                img={require('../src/assets/icons/ic_LatestSpot.png')}>
                <Scene
                  component={Home}
                  hideNavBar={true}
                  key="Home"
                  title="Home"
                />
              </Scene>
              <Scene
                title="LATEST SPOT"
                icon={() => (
                  <Oicon name="primitive-dot" size={45} color={'#E10264'} />
                )}
                img={require('../src/assets/icons/ic_LatestSpot.png')}>
                <Scene
                  component={LatestSpot}
                  hideNavBar={true}
                  key="LatestSpot"
                  title="LatestSpot"
                />
                <Scene
                  component={HotSpotDetail}
                  hideNavBar={true}
                  key="HotSpotDetail"
                  title="HotSpotDetail"
                />
              </Scene>

              <Scene
                title="CATEGORY"
                // title="TRENDS"

                icon={() => (
                  <Oicon name="primitive-dot" size={45} color={'#E10264'} />
                )}
                // img={require("../src/assets/icons/ic_heart.png")}
                img={require('../src/assets/icons/ic_LatestSpot.png')}>
                <Scene
                  component={Trends}
                  hideNavBar={true}
                  key="Trends"
                  title="Trends"
                />
                <Scene
                  component={CategoryDetail}
                  hideNavBar={true}
                  key="CategoryDetail"
                  title="CategoryDetail"
                />
              </Scene>

              <Scene
                title="MALL"
                icon={() => (
                  <Oicon name="primitive-dot" size={45} color={'#E10264'} />
                )}
                // img={require("../src/assets/icons/ic_MyShop.png")}
                img={require('../src/assets/icons/ic_LatestSpot.png')}>
                <Scene
                  component={Mall}
                  hideNavBar={true}
                  key="Mall"
                  title="Mall"
                />
                <Scene
                  component={Dresses}
                  hideNavBar={true}
                  key="Dresses"
                  title="Dresses"
                  // initial={true}
                />
              </Scene>

              <Scene
                title="MYSHOP"
                icon={() => (
                  <Oicon name="primitive-dot" size={45} color={'#E10264'} />
                )}
                // img={require("../src/assets/icons/ic_user.png")}
                img={require('../src/assets/icons/ic_LatestSpot.png')}>
                <Scene
                  component={MyShopp}
                  hideNavBar={true}
                  key="MyShopp"
                  title="MyShopp"
                />
                <Scene
                  component={Pro}
                  hideNavBar={true}
                  key="Pro"
                  title="Pro"
                />
              </Scene>
            </Tabs>
          </Drawer>

          <Scene
            component={Cart}
            hideNavBar={true}
            key="Cart"
            title="Cart"
            // initial={true}
          />
          <Scene
            component={ProductDetails}
            hideNavBar={true}
            key="ProductDetails"
            title="ProductDetails"
          />
          <Scene
            component={LandingPage}
            hideNavBar={true}
            key="LandingPage"
            title="LandingPage"
          />
          <Scene
            component={Notification}
            hideNavBar={true}
            key="Notification"
            title="Notification"
          />
          <Scene
            component={Profile}
            hideNavBar={true}
            key="Profile"
            title="Profile"
          />

          <Scene
            component={WishListShow}
            hideNavBar={true}
            key="WishListShow"
            title="WishListShow"
          />
        </Stack>
      </Scene>
    </RouterWithRedux>
  );
};
const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};
export default connect(mapStateToProps)(Root);
console.disableYellowBox = true;
