import { StyleSheet } from "react-native";
import { w, h, totalSize } from "../../utils/Dimensions";
import { UiColor, TextColor, TextSize } from "../../theme";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  touchableView: {
    height: 45,
    width: "90%",
    flexDirection: "row",
    backgroundColor: "#E10264",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10,
    paddingHorizontal: 20,
    alignSelf: "center",
    borderRadius: 3
  },
  textStyle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 30
  }
});
