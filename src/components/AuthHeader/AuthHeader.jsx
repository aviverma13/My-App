import React from "react";
import { Pressable, Text, TouchableOpacity, Image, View } from "react-native";
import { style } from "./style";

const AuthHeader = ({ title, onBackPress }) => {
  return (
    <View style={style.container}>
      <Pressable hitSlop={20} onPress={onBackPress}>
        <Image
          style={style.image}
          source={require("../../assets/AuthHeader.png")}
        />
      </Pressable>
      <Text style={style.title}>{title}</Text>
    </View>
  );
};
export default React.memo(AuthHeader);
