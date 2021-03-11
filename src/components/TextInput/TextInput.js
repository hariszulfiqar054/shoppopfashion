import React from "react";
import { View, TextInput, Text, Image, StyleSheet } from "react-native";
import { IconAsset, Strings, UiColor } from "../../theme";
import { Actions } from "react-native-router-flux";

export const TextInputField = props => {
  ("props_value", props);
  return (
    <View style={{ marginTop: 20, marginLeft: 20 }}>
      <Text style={styles.textStyle}>{props.title}</Text>
      <View style={styles.nameView}>
        <TextInput
          style={styles.textinputContainer1}
          underlineColorAndroid="transparent"
          placeholder="Enter Name"
          placeholderTextColor="#999999"
          autoCapitalize="none"
          onChangeText={props.onPress}
          // value={name}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "#FC3D39",
    fontSize: 14
    // fontFamily: "Coustard-Regular"
  },
  nameView: {
    width: "90%",
    height: 40,
    borderWidth: 1,
    borderColor: "#FC3D39",
    marginTop: 5,
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#fff"
  },
  textinputContainer1: {
    padding: 10,
    fontSize: 14
  }
});
