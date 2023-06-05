import { StyleSheet } from "react-native";
import { colors } from "../../Utils/Colors";
export const style = StyleSheet.create({
  conatiner: { marginBottom: 20 },
  label: {
    marginBottom: 8,
    color: colors.blue,
    fontSize: 14,
    fontWeight: "500",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: { paddingHorizontal: 16, paddingVertical: 20 },
  eye: {
    width: 24,
    height: 24,
    marginHorizontal: 16,
  },
});
