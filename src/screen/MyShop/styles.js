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
  },
  mainView: {
    marginTop: 5,
    minHeight: 120,
    width: "95%",
    alignSelf: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
    flexDirection: "row",
    padding: 10
  },
  fashionImage: {
    height: 102,
    width: 80,
    borderRadius: 2
  },
  buynowTextView: {
    width: 130,
    height: 35,
    borderRadius: 3,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center"
  },
  buynowText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});
