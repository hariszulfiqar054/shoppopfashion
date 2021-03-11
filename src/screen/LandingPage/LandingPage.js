// import React, { useState } from "react";
// import { View, Image, FlatList, Text, TouchableOpacity } from "react-native";
// import { Actions } from "react-native-router-flux";
// import { IconAsset, Strings, UiColor } from "../../theme";
// import { HeaderWithTitle } from "../../components/AppHeader";
// import styles from "./styles";

// const Items = [
//   {
//     image1: require("../../assets/icons/fashion.jpg"),
//     name: "TURQUOISE",
//     image2: require("../../assets/icons/starrating.png"),
//     price: "$110"
//   },
//   {
//     image1: require("../../assets/icons/fashion.jpg"),
//     name: "EMERALD",
//     image2: require("../../assets/icons/starrating.png"),
//     price: "$100"
//   },
//   {
//     image1: require("../../assets/icons/fashion.jpg"),
//     name: "SUN FLOWER",
//     image2: require("../../assets/icons/starrating.png"),
//     price: "$90"
//   },
//   {
//     image1: require("../../assets/icons/fashion.jpg"),
//     name: "ALIZARIN",
//     image2: require("../../assets/icons/starrating.png"),
//     price: "$110"
//   }
// ];

// const LandingPage = () => {
//   return (
//     <View style={styles.container}>
//       {HeaderWithTitle("", Strings.SIGN_UP)}
//       <View
//         style={{
//           flex: 1,
//           alignItems: "center",
//           justifyContent: "center"
//         }}
//       >
//         <TouchableOpacity style={styles.touchableView}>
//           <Image
//             source={require("../../assets/icons/google-plus.png")}
//             style={{ width: 30, height: 30, tintColor: "#fff" }}
//           />
//           <Text style={styles.textStyle}>Log In with Google</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={[styles.touchableView, { marginTop: 40 }]}>
//           <Image
//             source={require("../../assets/icons/facebook.png")}
//             style={{ width: 30, height: 30, tintColor: "#fff" }}
//           />
//           <Text style={styles.textStyle}>Log In with Facebook</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={() => Actions.SignUp()}
//           style={[styles.touchableView, { marginTop: 40 }]}
//         >
//           <Image
//             source={require("../../assets/icons/email.png")}
//             style={{ width: 25, height: 25, tintColor: "#fff" }}
//           />
//           <Text style={styles.textStyle}>Log In with Email</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };
// export default LandingPage;
