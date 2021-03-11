import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { IconAsset, Strings, UiColor } from "../../theme";
import { styles } from "./styles";
import { Actions } from "react-native-router-flux";

export const HeaderView = (onMenuClicked, leftIcon, title, onPerformSearch) => {
  return (
    <View style={styles.headerView}>
      <TouchableOpacity onPress={onMenuClicked}>
        <Image
          source={leftIcon}
          style={styles.icon_menu}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={{ position: "absolute", left: 0, right: 0 }}>
        <Text style={styles.header_title}>{title}</Text>
      </View>
      <View style={styles.right_items}>
        <TouchableOpacity onPress={onPerformSearch}>
          <Image
            source={IconAsset.ic_card}
            style={styles.icon_card}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export const HeaderWithTitle = (onGoBack, title, customStyle = {}) => {
  return (
    <View style={[styles.headerView, customStyle]}>
      <View style={{ position: "absolute", left: 0, right: 0 }}>
        <Text style={styles.header_title}>{title}</Text>
      </View>
    </View>
  );
};
export const HeaderWithGoBack = (onGoBack, title, customStyle = {}) => {
  return (
    <View style={[styles.headerView, customStyle]}>
      <TouchableOpacity onPress={() => Actions.pop()}>
        <Image
          source={IconAsset.ic_left}
          style={styles.icon_menu}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={{ position: "absolute", left: 0, right: 0 }}>
        <Text style={styles.header_title}>{title}</Text>
      </View>
    </View>
  );
};

export const HeaderWithGoBackAndOption = (onGoBack, title, onDownloadPDF) => {
  return (
    <View style={styles.headerView}>
      <TouchableOpacity onPress={() => Actions.drawerOpen()}>
        <Image
          source={IconAsset.ic_menu}
          style={styles.icon_menu}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={{ position: "absolute", left: 0, right: 0 }}>
        <Text style={styles.header_title}>{title}</Text>
      </View>

      <View style={styles.right_items}>
        <TouchableOpacity onPress={() => Actions.Notification()}>
          <Image
            source={IconAsset.ic_bell}
            style={styles.icon_list_type}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.Cart()}>
          <Image
            source={IconAsset.ic_cart}
            style={styles.icon_list_type}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
