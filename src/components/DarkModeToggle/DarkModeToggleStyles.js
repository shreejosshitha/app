import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    alignSelf: "flex-end", 
    marginRight: 10, 
  },
  label: {
    fontSize: 18,
    color: "#fff",
    marginRight: 10,
    fontWeight: "bold",
  },
  lightText: {
    color: "#000",
  },
  darkText: {
    color: "#fff",
  },
});
