import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView
} from "react-native";
import { Actions } from "react-native-router-flux";
import { IconAsset, Strings, UiColor } from "../../theme";
import { HeaderWithGoBack } from "../../components/AppHeader";

import styles from "./styles";
const ProductDetails = () => {
  const [ready] = useState(false);
  const [fadeValue] = useState(new Animated.Value(0));
  const [SlideInLeft] = useState(new Animated.Value(0));
  const [slideUpValue] = useState(new Animated.Value(0));
  const [selectedImage, setselectedImage] = useState("");

  const product = {
    name: "Lorem ipsum dolor sit amet ",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    created: "",
    images: [
      "https://bootdey.com/img/Content/avatar/avatar6.png",
      "https://bootdey.com/img/Content/avatar/avatar2.png",
      "https://bootdey.com/img/Content/avatar/avatar3.png"
    ],
    colors: ["#00BFFF", "#FF1493", "#00CED1", "#228B22", "#20B2AA", "#FF4500"]
  };

  startAnimation = () => {
    Animated.timing(SlideInLeft, {
      toValue: 1,
      duration: 1500
    }).start();
  };

  __setImageSelected = image => {
 
    setselectedImage(image);
  };

  __renderImages = () => {
    return (
      <View style={styles.smallImagesContainer}>
        {product.images.map((prop, key) => {
          return (
            <TouchableOpacity
              key={key}
              onPress={() => {
                this.__setImageSelected(prop);
              }}
            >
              <Image style={styles.smallImage} source={{ uri: prop }} />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  __renderColors = () => {
    return (
      <View style={styles.contentColors}>
        {product.colors.map((prop, key) => {
          return (
            <TouchableOpacity
              key={key}
              style={[styles.btnColor, { backgroundColor: prop }]}
            ></TouchableOpacity>
          );
        })}
      </View>
    );
  };

  useEffect(() => {
    startAnimation();
  });

  var mainImage = selectedImage ? selectedImage : product.images[0];
  return (
    <View style={styles.container}>
      {HeaderWithGoBack(Actions.tabbar, Strings.APP_NAME)}

      {/* <Text style={styles.hotspotTitle}>Hot Spot</Text> */}

      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.name}>{product.name}</Text>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.header}>
                <View style={styles.mainImageContainer}>
                  <Image style={styles.mainImage} source={{ uri: mainImage }} />
                </View>
                {this.__renderImages()}
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Colors</Text>
            </View>
            <View style={styles.cardContent}>{this.__renderColors()}</View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Description</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.description}>{product.description}</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardContent}>
              <TouchableOpacity
                style={styles.shareButton}
                onPress={Actions.MyShop}
              >
                <Text style={styles.shareButtonText}>Add To Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default ProductDetails;
