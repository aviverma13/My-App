import React, { useState } from "react";
import { View, TextInput, Text, Pressable, Image } from "react-native";
import { style } from "./style";
const Input = ({ label, placeholder, isPassword }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={style.conatiner}>
      <Text style={style.label}>{label}</Text>
      <View style={style.inputContainer}>
        <TextInput
          style={style.input}
          placeholder={placeholder}
          secureTextEntry={isPassword && isPasswordVisible}
        />
        {isPassword ? (
          <Pressable hitSlop={20} onPress={onEyePress}>
            <Image
              style={style.eye}
              source={
                isPasswordVisible
                  ? require("../../assets/eye_closed.png")
                  : require("../../assets/eye_open.png")
              }
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

export default React.memo(Input);
