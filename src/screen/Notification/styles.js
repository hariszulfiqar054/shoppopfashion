import { StyleSheet } from "react-native";
import { w, h, totalSize } from "../../utils/Dimensions";
import { UiColor, TextColor, TextSize } from "../../theme";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  hotspotTitle: {
    fontSize: 23,
    textAlign: "center",
    fontWeight: "500",
    marginTop: 15,
    color: "#000"
  }
});
