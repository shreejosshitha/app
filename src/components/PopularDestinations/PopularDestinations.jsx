import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import styles from "./PopularDestinationsStyles";

const destinations = [
  { name: "Paris", image: require("../../../assets/paris.jpg") },
  { name: "New York", image: require("../../../assets/newyork.jpg") },
  { name: "Tokyo", image: require("../../../assets/tokyo.jpg") },
  { name: "London", image: require("../../../assets/london.jpg") },
];

const PopularDestinations = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Destinations</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {destinations.map((item, index) => (
          <View key={index} style={styles.destination}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.destinationText}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default PopularDestinations;
