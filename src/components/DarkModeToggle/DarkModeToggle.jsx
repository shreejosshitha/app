import React from "react";
import { View, Text, Switch } from "react-native";
import styles from "./DarkModeToggleStyles";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <View style={[styles.container, darkMode ? styles.darkMode : styles.lightMode]}>
      <Text style={[styles.label, darkMode ? styles.darkText : styles.lightText]}>
        Dark Mode
      </Text>
      <Switch 
        value={darkMode} 
        onValueChange={() => setDarkMode((prevMode) => !prevMode)} 
      />
    </View>
  );
};

export default DarkModeToggle;
