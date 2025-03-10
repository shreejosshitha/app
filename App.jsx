import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import Banner from "./src/components/Banner/Banner";
import DarkModeToggle from "./src/components/DarkModeToggle/DarkModeToggle";
import PopularDestinations from "./src/components/PopularDestinations/PopularDestinations";
import TravelDetails from "./src/components/TravelDetails/TravelDetails";
import SuggestedActivities from "./src/components/SuggestedActivities/SuggestedActivities";
import TravelCategories from "./src/components/TravelCategories/TravelCategories";
import PlanTripButton from "./src/components/PlanTripButton/PlanTripButton";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [plan, setPlan] = useState([]);

  return (
    <View style={[styles.container, darkMode ? styles.darkBackground : styles.lightBackground]}>
      <ScrollView>
        <Banner darkMode={darkMode} />
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <PopularDestinations darkMode={darkMode} />
        <TravelDetails setDestination={setDestination} setTravelDate={setTravelDate} />
        <SuggestedActivities selectedActivities={plan} setSelectedActivities={setPlan} />
        <TravelCategories />
        <PlanTripButton 
  destination={destination} 
  travelDate={travelDate} 
  plan={plan} 
  resetTrip={() => {
    setDestination("");
    setTravelDate("");
    setPlan([]);
  }} 
/>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  darkBackground: {
    backgroundColor: "#121212",
  },
  lightBackground: {
    backgroundColor: "#ffffff",
  },
});

export default App;
