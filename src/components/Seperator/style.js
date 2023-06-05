import { StyleSheet } from "react-native";
import { colors } from "../../Utils/Colors";

export const style = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center", marginVertical: 20 },
  line: { height: 1, flex: 1, backgroundColor: colors.lightGrey },
  text: { color: colors.blue, marginHorizontal: 8 },
});
