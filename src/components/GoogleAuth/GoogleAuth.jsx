import React, { useEffect } from "react";
import { Image, TouchableOpacity } from "react-native";
import { style } from "./style";

// import * as WebBrowser from "expo-web-browser";
// import * as Google from "expo-auth-session/providers/google";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useState } from "react";

// WebBrowser.maybeCompleteAuthSession();

const GoogleAuth = () => {
  // const [token, setToken] = useState("");
  // const [userInfo, setUserInfo] = useState(null);
  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   webClientId:
  //     "808226899251-f2orna6sr157g65qgnlbfcjelighgsb8.apps.googleusercontent.com",
  //   androidClientId:
  //     "808226899251-2mrm45qndee6u83qpen9dckhjt61sk58.apps.googleusercontent.com",
  //   // iosClientId:
  //   //   "808226899251-j730vevpgjqq3tdcnif8td0pb43078ak.apps.googleusercontent.com",
  // });
  // useEffect(() => {
  //   handleEffect();
  // }, [response, token]);

  // async function handleEffect() {
  //   const user = await getLocalUser();
  //   console.log("user", user);
  //   if (!user) {
  //     if (response?.type === "success") {
  //       // setToken(response.authentication.accessToken);
  //       getUserInfo(response.authentication.accessToken);
  //     }
  //   } else {
  //     setUserInfo(user);
  //     console.log("loaded locally");
  //   }
  // }

  // const getLocalUser = async () => {
  //   const data = await AsyncStorage.getItem("@user");
  //   if (!data) return null;
  //   return JSON.parse(data);
  // };

  // const getUserInfo = async (token) => {
  //   if (!token) return;
  //   try {
  //     const response = await fetch(
  //       "https://www.googleapis.com/userinfo/v2/me",
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );

  //     const user = await response.json();
  //     await AsyncStorage.setItem("@user", JSON.stringify(user));
  //     setUserInfo(user);
  //   } catch (error) {
  //     // Add your own error handler here
  //   }
  // };

  return (
    <TouchableOpacity
      // onPress={promptAsync}
      activeOpacity={0.6}
      style={style.container}
    >
      <Image style={style.image} source={require("../../assets/google.png")} />
    </TouchableOpacity>
  );
};

export default React.memo(GoogleAuth);
