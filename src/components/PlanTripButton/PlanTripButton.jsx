import React, { useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import TravelSavedModal from "../Plan/Plan";
import styles from "./PlanTripButtonStyles";

const PlanTripButton = ({ destination, travelDate, plan, resetTrip }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePlanTrip = () => {
    if (!destination || !travelDate || plan.length === 0) {
      return alert("Please select a destination, date, and activities before planning.");
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setModalVisible(true);
    }, 2000);
  };

  return (
    <View>
      <TouchableOpacity 
        style={styles.planButton} 
        onPress={handlePlanTrip} 
        disabled={loading}
      >
        {loading ? <ActivityIndicator size="small" color="#fff" /> : <Text style={styles.planButtonText}>Plan My Trip</Text>}
      </TouchableOpacity>

      <Text style={styles.Text}>Your dream vacation is just a click away</Text>

      <TravelSavedModal 
        visible={modalVisible} 
        onClose={() => {
          setModalVisible(false);
          resetTrip();
        }}
        destination={destination} 
        date={travelDate} 
        activities={plan}
      />
    </View>
  );
};

export default PlanTripButton;
