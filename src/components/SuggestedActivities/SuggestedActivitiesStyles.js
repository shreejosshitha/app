
import { StyleSheet } from "react-native";


export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginTop: 27,
    margin: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 25,
    color: "black"
  },
  activitiesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 13,
  },
  activityButton: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  selectedActivity: {
    backgroundColor: "#8000FF",
  },
  activityText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  selectedText: {
    color: "#fff", 
  },
});