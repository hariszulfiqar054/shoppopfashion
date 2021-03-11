import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  TextInput,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Animated, 
  Alert,
} from "react-native";
import { Actions } from "react-native-router-flux";
import { IconAsset, Strings } from "../../theme";
import { HeaderWithTitle } from "../../components/AppHeader";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../reduxprovider/actions/ActionSignup";
import { AsyncStorage } from "react-native";

const SignUp = () => {
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [borderColor, setborderColor] = useState("#000");
  // const [borderColour, setborderColour] = useState("#000");
  const [SlideInDown] = useState(new Animated.Value(0));

  const AddPractiseData = useSelector((state) => state);
  ("AddPractiseData",AddPractiseData);
  const dispatch = useDispatch();

  // const Token = AsyncStorage.getItem('token');
  // ('Token', Token);
  /*************
   * Animation
   *************/
  startAnimation = () => {
    Animated.timing(SlideInDown, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  onBlur = () => {
    setborderColor("#000");
  };
  onFocus = () => {
    setborderColor("#E10264");
  };

  useEffect(() => {
    startAnimation();
  });

  
  // var text = this.state.email;
  // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // if (reg.test(text) === false) {
  //   Alert.alert('Email is not Correct');
  //   return false;
  // }

  signUp = () => {
    if (userName == "" || userName == null) {
      Alert.alert("Please enter username");
    } else if (email == "" || email == null) {
      Alert.alert("Please enter email");
    } else if (email !== "" || email !== null) {
      var text = email;
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(text) === false) {
          Alert.alert('Email is not Correct');
          return false;
        } else if (password == "" || password == null){
          Alert.alert("Please enter password");
        } else if (confirmPassword == "" || confirmPassword == null) {
              Alert.alert("Please enter confirm password");
        } else if (password != confirmPassword) {
                Alert.alert("Password doesn't match...");
        } else {
          ("inside else");
          const token = AsyncStorage.getItem("token");
          dispatch(signup(userName, email, password, confirmPassword,token));
        //  Alert.alert("Your account Registered successfully");
        // Actions.Login();
        }
    }
  };

  // signUp = () => {
  //   if (userName == "" || userName == null) {
  //     Alert.alert("Please enter username");
  //   } else if (email == "" || email == null) {
  //     Alert.alert("Please enter email");
  //   } 
  //   var text = email
  //   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // if (reg.test(text) === false) {
  //   Alert.alert('Email is not Correct');
  //   return false;
  // }
  // else if (password == "" || password == null) {
  //     Alert.alert("Please enter password");
  //   } else if (confirmPassword == "" || confirmPassword == null) {
  //     Alert.alert("Please enter confirm password");
  //   } else if (password != confirmPassword) {
  //     Alert.alert("Password doesn't match...");
    // } else {
    //   ("inside else");
    //   // dispatch(signup(userName, email, password, confirmPassword));
    //   // //Alert.alert("Your account Registered successfully");
    //   // Actions.Login();
    // }
  // };
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
      <View style={styles.mainContainer}>
        {HeaderWithTitle("", Strings.SIGN_UP)}

        <ScrollView>
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
            ]}
          >
            <View style={[styles.inputContainer, { borderColor: borderColor }]}>
              <Image
                style={styles.inputIcon}
                source={IconAsset.ic_user}
                resizeMode="contain"
              />
              {/**********
              UserName
             ***********/}
              <TextInput
                style={styles.inputs}
                onBlur={() => onBlur()}
                onFocus={() => onFocus()}
                placeholder="  User Name"
                keyboardType="email-address"
                autoCapitalize="none"
                underlineColorAndroid="transparent"
                onChangeText={(userName) => setuserName(userName)}
                value={userName}
              />
            </View>

            <View style={[styles.inputContainer, { borderColor: borderColor }]}>
              <Image
                style={styles.inputIcon}
                source={IconAsset.ic_mail}
                resizeMode="contain"
              />
              {/**********
                Email
              ***********/}
              <TextInput
                style={styles.inputs}
                onBlur={() => onBlur()}
                onFocus={() => onFocus()}
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
                placeholder="  Password"
                autoCapitalize="none"
                secureTextEntry={true}
                underlineColorAndroid="transparent"
                onChangeText={(password) => setPassword(password)}
                value={password}
              />
            </View>
            <View style={styles.inputContainer}>
              <Image
                style={styles.inputIcon}
                source={IconAsset.ic_password}
                resizeMode="contain"
              />
              {/**********
              ConfirmPassword
             ***********/}
              <TextInput
                style={styles.inputs}
                placeholder=" Confirm Password"
                autoCapitalize="none"
                secureTextEntry={true}
                underlineColorAndroid="transparent"
                onChangeText={(confirmPassword) =>
                  setConfirmPassword(confirmPassword)
                }
                value={confirmPassword}
              />
            </View>
            {/**********
              SignUpButton
             ***********/}
            <TouchableOpacity
              style={[styles.buttonContainer, styles.signupButton]}
            onPress={() => signUp()}
            >
              <Text style={styles.signUpText}>{Strings.SIGN_UP}</Text>
            </TouchableOpacity>
            <Text
              style={{
                color: "#000",
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 15,
              }}
            >
              OR
            </Text>
            <View style={{ flexDirection: "row", paddingTop: 18 }}>
              <TouchableOpacity
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 60 / 2,
                  backgroundColor: "#3B5893",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../assets/icons/facebook.png")}
                  style={{ width: 30, height: 30, tintColor: "#fff" }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/icons/googleplus.png")}
                  style={{ width: 60, height: 60, marginLeft: 30 }}
                />
              </TouchableOpacity>
            </View>
            {/**********
              HaveAnAccount
             ***********/}
            <TouchableOpacity onPress={Actions.Login}>
              <Text style={styles.haveAccount}>{Strings.HAVE_AN_ACCOUNT}</Text>
            </TouchableOpacity>
          </Animated.View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default SignUp;
