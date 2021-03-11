import { StyleSheet } from "react-native";
import { w, h, totalSize } from "../../utils/Dimensions";
import { UiColor, TextColor, TextSize } from "../../theme";

export default StyleSheet.create ({
 container:{
    flex:1,
},
inputIcon: {
    width: w(6),
    height: h(5.5),
    marginLeft: w(2),
    justifyContent: "center"
  },
  inputField: {
    height: h(6),
    width: w(65),
    marginLeft: w(2)
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
    alignSelf: "center"
  },
// mainView:{
//     minHeight:150,
//     backgroundColor:'green',
//     width:w(97),
//     alignSelf:'center',
//     marginTop:20,
//     padding:10

// }
imageView:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:10
},
imageVieww:{
  flexDirection:'row',
  justifyContent:'space-evenly',
  marginBottom:h(0)
},
image1:{
   height:h(21),
   width:w(50),
   //borderTopLeftRadius:12,
   alignSelf:'center',
   marginLeft:w(6)
},

});