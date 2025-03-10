import React from "react";
import { View, Text, Modal, TouchableOpacity, Image } from "react-native";
import styles from "./PlanStyles";

const TravelSavedModal = ({ visible, onClose, destination, date, activities }) => {
  const activityCount = activities ? activities.length : 0;

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Image source={require("../../../assets/success.jpg")} style={styles.successIcon} />
          <Text style={styles.title}>Trip Saved Successfully!</Text>
          <Text style={styles.message}>
            Your trip to <Text style={styles.bold}>{destination}</Text> on <Text style={styles.bold}>{date}</Text> has been saved.
            {"\n"}You have planned <Text style={styles.bold}>{activityCount}</Text> {activityCount === 1 ? "activity" : "activities"}.
          </Text>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Continue</Text> 
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default TravelSavedModal;
