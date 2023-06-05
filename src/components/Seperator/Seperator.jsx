import React from "react";
import { View, Text } from "react-native";
import { style } from "./style";

const Seperator = ({ text }) => {
  return (
    <View style={style.container}>
      <View style={style.line} />
      <Text style={style.text}>{text}</Text>
      <View style={style.line} />
    </View>
  );
};

export default React.memo(Seperator);
