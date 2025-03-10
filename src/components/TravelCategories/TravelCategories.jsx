import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import styles from "./TravelCategoriesStyles"

const travelCategories = [
  {
    title: "Popular Destinations",
    items: ["Bali", "Santorini", "Maldives", "Venice"],
  },
  {
    title: "Adventure Trips",
    items: ["Hiking in Alps", "Safari in Kenya", "Diving in Great Barrier Reef"],
  },
  {
    title: "Cultural Experiences",
    items: ["Kyoto Temples", "Marrakech Medina", "Angkor Wat"],
  },
];

const TravelCategories = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Explore Trip Types</Text>
      {travelCategories.map((category, index) => (
        <View key={index} style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>{category.title}</Text>
          {category.items.map((item, itemIndex) => (
            <Text key={itemIndex} style={styles.itemText}>{item}</Text>
          ))}
        </View>
      ))}
      </View>
    
  );
};


export default TravelCategories;