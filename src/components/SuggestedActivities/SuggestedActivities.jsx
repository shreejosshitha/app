import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./SuggestedActivitiesStyles";

const activities = [
  { id: 1, name: "Visit Museums", icon: "🏛️" },
  { id: 2, name: "Beach Day", icon: "🏖️" },
  { id: 3, name: "Local Cuisine Tour", icon: "🍽️" },
  { id: 4, name: "Shopping", icon: "🛍️" },
  { id: 5, name: "Hiking", icon: "🥾" },
];

const SuggestedActivities = ({ selectedActivities, setSelectedActivities }) => {
  const toggleActivity = (activityName) => {
    setSelectedActivities((prevSelected) =>
      prevSelected.includes(activityName)
        ? prevSelected.filter((name) => name !== activityName)
        : [...prevSelected, activityName]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suggested Activities</Text>
      <View style={styles.activitiesContainer}>
        {activities.map((activity) => (
          <TouchableOpacity
            key={activity.id}
            style={[
              styles.activityButton,
              selectedActivities.includes(activity.name) && styles.selectedActivity,
            ]}
            onPress={() => toggleActivity(activity.name)}
          >
            <Text
              style={[
                styles.activityText,
                selectedActivities.includes(activity.name) && styles.selectedText,
              ]}
            >
              {activity.icon} {activity.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SuggestedActivities;
