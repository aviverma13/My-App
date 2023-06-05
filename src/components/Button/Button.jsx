import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { style } from "./style";

const Button = ({ title, onPress, styles }) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.6}
        style={[style.container, styles]}
        onPress={onPress}
      >
        <Text style={style.title}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default React.memo(Button);
