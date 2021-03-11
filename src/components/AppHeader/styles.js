import { StyleSheet } from "react-native";
import { w, h, totalSize } from "../../utils/Dimensions";
import { UiColor, TextColor, TextSize } from "../../theme";

export const styles = StyleSheet.create({
  headerView: {
    // height: h(10),
    height: 56,
    width: w(100),
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: UiColor.PINK
  },
  collapsibleHeaderView: {
    height: 56,
    width: w(100),
    alignItems: "center",
    flexDirection: "row"
  },
  header_title: {
    fontSize: TextSize.h1,
    marginLeft: 10,
    alignSelf: "center",
    // fontFamily: "Roboto",
    fontWeight: "500",
    color: TextColor.WHITE
  },
  header_title_icon: {
    height: 45,
    alignSelf: "center"
  },
  icon_menu: {
    tintColor: UiColor.WHITE,
    width: w(7),
    height: w(7),
    marginLeft: w(3)
  },
  right_items: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    flexDirection: "row",
    alignItems: "center"
  },

  icon_plus_type: {
    width: w(7),
    height: w(7),
    alignSelf: "center",
    marginRight: w(3)
  },

  icon_card: {
    width: w(7),
    height: w(7),
    alignSelf: "center",
    marginRight: w(3)
  },
  icon_list_type: {
    width: w(7),
    height: w(7),
    alignSelf: "center",
    marginRight: w(3),
    tintColor: "white"
  }
});
