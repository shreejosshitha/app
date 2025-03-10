import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    position: "relative",
  },
  bannerImage: {
    width: "100%",
    height: 180,
  },
  overlay: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000", 
  },
  subtitle: {
    fontSize: 18,
    color: "#000", 
  },
});
