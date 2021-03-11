import { StyleSheet } from "react-native";
import { w, h, totalSize } from "../../utils/Dimensions";
import { UiColor, TextColor, TextSize } from "../../theme";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  textInputContainer: {
    justifyContent: "center",
    marginTop: 15,
    padding: 16
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: "#009688",
    backgroundColor: UiColor.WHITE
  },
  imageThumbnail: {
    alignItems: "center",
    height: h(18),
    width: w(32),
    marginLeft: w(4),
    borderRadius: w(100),
    marginTop: w(5)
  },
  itemText: {
    color: "#000",
    textAlign: "center"
  }
});
