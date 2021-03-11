import { StyleSheet } from "react-native";
import { w, h, totalSize } from "../../utils/Dimensions";
import { UiColor, TextColor, TextSize } from "../../theme";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: UiColor.WHITE
  },
  container: {
    marginTop: w(18),
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    backgroundColor: UiColor.WHITE,
    borderRadius: w(3),
    width: w(90),
    height: h(8.5),
    marginBottom: w(4),
    flexDirection: "row",
    alignItems: "center",
    borderWidth: w(0.3),
    // borderColor: isFocused ? "#E10264" : "#000",
  },

  inputs: {
    marginLeft: w(2),
    borderLeftWidth: w(0.4),
    // backgroundColor:'red',
    width:w(75),
    
  },
  inputIcon: {
    width: w(8),
    height: h(9),
    marginLeft: w(3),
    justifyContent: "center"
  },
  buttonContainer: {
    height: h(8.5),
    width: w(55),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: w(3)
  },
  haveAccount: {
    marginTop: w (4),
    color: UiColor.BLACK,
    fontSize: TextSize.h4,
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  signupButton: {
    marginTop: w(5),
    backgroundColor: UiColor.PINK
  },
  signUpText: {
    color: UiColor.WHITE,
    fontSize: TextSize.h1,
    fontWeight: "bold"
  }
});
