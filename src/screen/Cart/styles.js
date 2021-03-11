import { StyleSheet } from "react-native";
import { w, h, totalSize } from "../../utils/Dimensions";
import { UiColor, TextColor, TextSize } from "../../theme";

export default StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: "#ccc"
  },
  container: {
    justifyContent: "center",
    flex: 1,
    margin: 5
  },
  touchOpacityContainer: {
    flexDirection: "row",
    borderRadius: w(3),
    minHeight: w(24),
    width: w(96),
    backgroundColor: "#fff",
    marginTop: 10,
    alignSelf: "center"
  },
  imageView: {
    width: w(25),
    height: h(15),
    margin: 7,
    borderRadius: 7
  },

  textView: {
    width: "50%",
    padding: 10,
    color: "#000"
  },
  buttonContainer: {
    height: h(7),
    width: w(90),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: w(3),
    alignSelf: "center",
    marginBottom: w(5)
  },
  fogotButton: {
    marginTop: w(5),
    backgroundColor: UiColor.PINK
  },
  signUpText: {
    color: UiColor.WHITE,
    fontSize: TextSize.h1,
    fontWeight: "bold"
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
