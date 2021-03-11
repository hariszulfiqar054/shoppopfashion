import React, { useState, useEffect } from "react";
import { View, Image, Animated, BackHandler, Alert } from "react-native";
import { Actions } from "react-native-router-flux";
import styles from "./styles";
import { useSelector } from "react-redux";

const Splash = ({ navigation }) => {
  ("Splash");
  const userData = useSelector((state) => state?.loginScreen);
  const [user_id, setuser_id] = useState("");
  const [fadeValue] = useState(new Animated.Value(0));
  /*************
   * Animation
   *************/
  startAnimation = () => {
    Animated.timing(fadeValue, {
      toValue: 1,
      duration: 1500,
    }).start();
  };

  useEffect(() => {
    startAnimation();
    try {
      setTimeout(() => {
        if (userData?.isLoggedin) Actions.replace("drawer");
        else Actions.replace("Login");
        // Actions.Login();
        // Actions.LandingPage();
      }, 2000);
    } catch (error) {
      ("error" + error);
    }
  });
  return (
    <View style={styles.container}>
      <Animated.Image
        resizeMode="contain"
        source={require("../../assets/icons/logo.png")}
        style={[styles.splashImg, { opacity: fadeValue }]}
      />
    </View>
  );
};

export default Splash;
