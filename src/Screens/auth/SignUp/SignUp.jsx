import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import AuthHeader from "../../../components/AuthHeader/AuthHeader";
import { style } from "./style";
import Input from "../../../components/Input/Input";
import CheckBox from "../../../components/checkBox/CheckBox";
import Button from "../../../components/Button/Button";
import Seperator from "../../../components/Seperator/Seperator";
import GoogleAuth from "../../../components/GoogleAuth/GoogleAuth";

const SignUp = () => {
  const [checked, setChecked] = useState(false);
  const SignInFunction = () => {
    console.warn("Sign IN Clicked");
  };
  return (
    <ScrollView style={style.container}>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder="Abhishek Verma" />
      <Input label="Email" placeholder="abhishek@gmail.com" />
      <Input label="Password" placeholder="********" isPassword />

      <View style={style.agreeRow}>
        <CheckBox checked={checked} onCheck={setChecked} />
        <Text style={style.agreeText}>
          I agree with <Text style={style.agreeTextBold}>Terms</Text> &{" "}
          <Text style={style.agreeTextBold}>Privacy</Text>
        </Text>
      </View>

      <Button styles={style.button} title="Sign Up" />
      <Seperator text="Or sign up with" />
      <GoogleAuth />

      <Text style={style.footerText}>
        Already have an account?
        <Text onPress={SignInFunction} style={style.footerLink}>
          &nbsp;Sign In
        </Text>
      </Text>
    </ScrollView>
  );
};

export default React.memo(SignUp);
