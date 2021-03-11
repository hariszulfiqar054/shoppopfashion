import React, { useState , useEffect} from "react";
import {
  View,
  Image,
  TextInput,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Animated
} from "react-native";
import { Actions } from "react-native-router-flux";
import { IconAsset, Strings, UiColor } from "../../theme";
import  {HeaderWithGoBack } from "../../components/AppHeader";
import styles from "./styles";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [SlideInDown] = useState(new Animated.Value(0));
  /*************
   * Animation
   *************/

  startAnimation = () => {
    Animated.timing(SlideInDown, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true
    }).start();
  };

  useEffect(() => {
    startAnimation();
  });
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
      <View style={styles.mainContainer}>
        {HeaderWithGoBack(Actions.Login, Strings.FORGOT_PASS)}
        <Animated.View
            style={[
              styles.container,
              {
                transform: [
                  {
                    translateY: SlideInDown.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 60]
                    })
                  }
                ]
              }
            ]}
          >
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
          {/**********
              fogotButton
             ***********/}
          <TouchableOpacity
            style={[styles.buttonContainer, styles.fogotButton]}
            onPress={Actions.Login}
          >
            <Text style={styles.signUpText}>{Strings.FORGOT_PASS}</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default ForgotPassword;
