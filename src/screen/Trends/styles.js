import { StyleSheet } from "react-native";
import { w, h, totalSize } from "../../utils/Dimensions";
import { UiColor, TextColor, TextSize } from "../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  inputIcon: {
    width: w(6),
    height: h(5.5),
    marginLeft: w(2),
    justifyContent: "center",
  },
  inputField: {
    height: h(6),
    width: w(65),
    marginLeft: w(2),
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
    alignSelf: "center",
  },
  // mainView:{
  //     minHeight:150,
  //     backgroundColor:'green',
  //     width:w(97),
  //     alignSelf:'center',
  //     marginTop:20,
  //     padding:10

  // }
  imageView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 5,
  },
  imageVieww: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  image1: {
    height: h(32),
    width: w(38),
    borderTopLeftRadius: 14,
    alignSelf: "center",
    marginLeft: w(8),
    marginBottom: h(1.5),
  },
  btnWrapper: {
    backgroundColor: UiColor.PINK,
    borderRadius: 100,
    marginVertical: h("2"),
    // minWidth: 120,
    // justifyContent: "center",
    // alignItems: "center",
    minWidth: w('40'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: UiColor.WHITE,
    padding: w("2"),
    paddingHorizontal: w("10"),
  },
});
