import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {useBackHandler} from '@react-native-community/hooks';

import {
  View,
  Image,
  TextInput,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Animated,
  ToastAndroid,
  BackHandler,
  Alert,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {loginApi} from '../../reduxprovider/actions/ActionLogin';
import {IconAsset, Strings, UiColor} from '../../theme';
import {AsyncStorage} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import {HeaderWithTitle} from '../../components/AppHeader';
import styles from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {loginAPI} from '../../reduxprovider/actions/ActionLogin';

const Login = (navigation) => {
  const AddPractiseData = useSelector((state) => state);
  // const data = useSelector((state) => state?.loginScreen);
  // ("------>", data);
  // ("AddPractiseData", AddPractiseData);
  //("Login navigation", navigation);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [SlideInDown] = useState(new Animated.Value(0));
  const [isLoading, setIsLoading] = useState(false);

  dispatch = useDispatch();

  startAnimation = () => {
    Animated.timing(SlideInDown, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  const backAction = () => {
    ('navigation');
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
    startAnimation();
  });

  const doLogin = () => {
    'doLogin email', email;
    'doLogin password', password;
    if (email == '' || email == null) {
      Alert.alert('Please Enter Email');
    } else if (email !== '' || email !== null) {
      ('else if');
      var text = email;
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(text) === false) {
        Alert.alert('Email is not Correct');
      } else if (password == '' || password == null) {
        Alert.alert('Please Enter Password');
      } else {
        const token = AsyncStorage.getItem('token');
        // ("Tokennnn", token);
        dispatch(loginAPI(email, password, token));
        // Actions.tabbar();
      }
    }
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}} enabled>
      <View style={styles.mainContainer}>
        {HeaderWithTitle('', Strings.SIGN_IN)}
        <Animated.View
          style={[
            styles.container,
            {
              transform: [
                {
                  translateY: SlideInDown.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0],
                  }),
                },
              ],
            },
          ]}>
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputIcon}
              source={IconAsset.ic_user}
              resizeMode="contain"
            />
            {/**********
              Email
              ***********/}
            <TextInput
              style={styles.inputs}
              placeholder="  Email"
              autoCapitalize="none"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              onChangeText={(email) => setEmail(email)}
              value={email}
            />
          </View>

          <View style={styles.inputContainer}>
            <Image
              style={styles.inputIcon}
              source={IconAsset.ic_password}
              resizeMode="contain"
            />
            {/**********
              Password
             ***********/}
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={(password) => setPassword(password)}
              value={password}
            />
          </View>

          {/**********
              SignInButton
             ***********/}
          <TouchableOpacity
            style={[styles.buttonContainer, styles.signupButton]}
            onPress={() => doLogin()}>
            <Text style={styles.signInText}>{Strings.SIGN_IN}</Text>
          </TouchableOpacity>
          {/**********
              FogotText
             ***********/}
          <TouchableOpacity onPress={Actions.ForgotPassword}>
            <Text style={styles.forgotPass}>{Strings.FORGOT_PASS}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={Actions.SignUp}>
            <Text style={styles.forgotPass}>Don't have an account Sign Up</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </KeyboardAvoidingView>
  );
};

// Login.propTypes = {
//   submitForm: PropTypes.func,
//   login: PropTypes.any,
// };

// const mapStateToProps = (state) => {
//   return {
//     login: state.login,
//     sidescreen: state.sidescreen,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     submitForm: (data) => dispatch(loginAPI(data)),
//     HomeScreenApi: (data) => dispatch(sidescreenAPI(data)),
//   };
// };
export default Login;
