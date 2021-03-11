import { StyleSheet } from "react-native";
import { w, h, totalSize } from "../../utils/Dimensions";
import { UiColor, TextColor, TextSize } from "../../theme";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: UiColor.WHITE
  },
  container: {
    flex: 1,
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
    borderWidth: w(0.3)

    // borderColor:UiColor.BLACK
  },

  inputs: {
    marginLeft: w(2),
    borderLeftWidth: w(0.4)
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
  fogotButton: {
    marginTop: w(5),
    backgroundColor: UiColor.PINK
  },
  signUpText: {
    color: UiColor.WHITE,
    fontSize: TextSize.h1,
    fontWeight: "bold"
  }
});
