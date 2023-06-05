import { StyleSheet } from "react-native";
import { colors } from "../../Utils/Colors";

export const style = StyleSheet.create({
  container: {
    marginBottom: 54,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: colors.blue,
    fontSize: 26,
    fontWeight: "500",
    paddingHorizontal: 16,
  },
  image: {
    width: 18,
    height: 18,
  },
});
