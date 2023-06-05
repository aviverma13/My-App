import React from "react";
import { Image, View, Text, Pressable } from "react-native";
import { style } from "./Style";
import Button from "../../../components/Button/Button";

const Splash = () => {
  const handleChange = () => {
    console.warn("Clicked");
  };
  return (
    <View style={style.container}>
      <Image
        resizeMode="contain"
        style={style.Image}
        source={require("../../../assets/Splash_img.png")}
      />
      <View style={style.TextContainer}>
        <Text style={style.title}>You’ll Find </Text>
        <Text style={[style.title, style.innerTitle]}>All you need </Text>
        <Text style={style.title}> Here!</Text>
      </View>
      <Button title="SignUp" onPress={handleChange} />

      <Pressable hitSlop={20}>
        <Text style={style.footer}>SignIn</Text>
      </Pressable>
    </View>
  );
};

export default React.memo(Splash);
