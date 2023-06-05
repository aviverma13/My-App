import { StyleSheet } from "react-native";
import { colors } from "../../Utils/Colors";

export const style = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGrey,
    borderRadius: 14,
    width: "40%",
    alignSelf: "center",
    padding: 16,
    justifyContent: "center",
    marginBottom: 50,

    alignItems: "center",
  },
  image: {
    width: 30,
    height: 30,
  },
});
