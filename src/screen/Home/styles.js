import { StyleSheet } from "react-native";
import { w, h, totalSize } from "../../utils/Dimensions";
import { UiColor, TextColor, TextSize } from "../../theme";

export default StyleSheet.create({
  container: {
    flex: 1
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
  hotspotTitle: {
    fontSize: TextSize.h2,
    marginLeft: w(2.2),
    fontWeight: "bold",
    marginTop: w(4),
    color: "#000"
  },
  imageThumbnail: {
    alignItems: "center",
    height: h(35),
    width: w(97),
    marginRight:w(2),
    // marginLeft: w(2),
    marginTop: w(2),
    borderTopLeftRadius:6
  },
  imageThumbnail2: {
    alignItems: "center",
    height: h(45),
    width: w(46),
    marginLeft: w(2),
    marginTop: w(2)
  },
  imageThumbnail3:{
    alignItems: "center",
    height: h(45),
    width: w(46),
    marginLeft: w(2),
    marginTop: w(2),
    borderTopRightRadius:6,
    borderBottomRightRadius:6
  },
  itemText: {
    color: UiColor.BLACK,
    textAlign: "center",
    marginLeft: w(1),
    marginTop: w(2),
    fontWeight: "bold",
    fontSize: 13
  },
  skuItemText: {
    color: UiColor.BLACK,
    textAlign: "center",
    marginLeft: w(1),
    marginTop: w(1.5),
    marginBottom: w(2),
    fontWeight: "bold",
    fontSize: 13
  },
  activeDotStyle: {
    width: 5,
    height: 5,
    backgroundColor: "yellow"
  },
  dotStyle: {
    width: 5,
    height: 5
  },
  bannerStyle: {
    width: "100%",
    height: "100%"
  }
});
