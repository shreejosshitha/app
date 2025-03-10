import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./BannerStyles";

const Banner = () => (
  <View style={styles.container}>
    <Image source={require("../../../assets/banner.jpg")} style={styles.bannerImage} />
    <View style={styles.overlay}>
      <Text style={styles.title}>Discover Your Dream Trip</Text>
      <Text style={styles.subtitle}>Adventure awaits you</Text>
    </View>
  </View>
);

export default Banner;
