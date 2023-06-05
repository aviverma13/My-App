import React, { useState } from "react";
import { Text, ScrollView } from "react-native";
import AuthHeader from "../../../components/AuthHeader/AuthHeader";
import { style } from "./style";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import Seperator from "../../../components/Seperator/Seperator";
import GoogleAuth from "../../../components/GoogleAuth/GoogleAuth";

const SignIn = () => {
  const SignUpFunction = () => {
    console.warn("SignUp Clicked");
  };
  return (
    <ScrollView style={style.container}>
      <AuthHeader title="Sign In" />
      <Input label="Email" placeholder="abhishek@gmail.com" />
      <Input label="Password" placeholder="********" isPassword />

      <Button styles={style.button} title="Sign In" />
      <Seperator text="Or Sign In with" />
      <GoogleAuth />

      <Text style={style.footerText}>
        Don’t have an account?
        <Text onPress={SignUpFunction} style={style.footerLink}>
          &nbsp;Sign Up
        </Text>
      </Text>
    </ScrollView>
  );
};

export default React.memo(SignIn);
