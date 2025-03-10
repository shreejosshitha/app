import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./TravelDetailsStyles";

const TravelDetails = ({ setDestination, setTravelDate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel Details</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Destination</Text>
        <TextInput
          style={styles.input}
          placeholder="Where do you want to go?"
          onChangeText={setDestination}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Travel Date</Text>
        <TextInput
          style={styles.input}
          placeholder="MM/DD/YYYY"
          onChangeText={setTravelDate}
        />
      </View>
    </View>
  );
};

export default TravelDetails;
