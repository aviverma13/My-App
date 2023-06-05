import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    padding: 24,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  Image: { width: "100%", height: 200 },
  title: { fontSize: 40, fontWeight: "bold", textAlign: "center" },
  innerTitle: { textDecorationLine: "underline", color: "#FCA34D" },
  footer: {
    color: "#4F63AC",
    textAlign: "center",
    fontSize: 16,
    marginTop: 30,
  },

  TextContainer: { marginVertical: 54 },
});
