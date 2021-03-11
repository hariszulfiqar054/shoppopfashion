import { StyleSheet } from "react-native";
import { w, h, totalSize } from "../../utils/Dimensions";
import { UiColor, TextColor, TextSize } from "../../theme";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: UiColor.PINK,
    height: 150
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 90
  },
  name: {
    fontSize: 22,
    color: TextColor.BLACK,
    fontWeight: "600"
  },
  body: {
    marginTop: 40
  },
  bodyContent: {
    alignItems: "center",
    padding: 30
  },
  name: {
    fontSize: 28,
    color: "#000",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: TextColor.BLACK,
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: TextColor.BLACK,
    marginTop: 10,
    textAlign: "center"
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: UiColor.PINK
  }
});
