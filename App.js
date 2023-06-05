import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import Splash from "./src/Screens/auth/Splash/Splash";
import SignUp from "./src/Screens/auth/SignUp/SignUp";
import SignIn from "./src/Screens/auth/SignIn/SignIn";

export default function App() {
  return (
    <SafeAreaView>
      {/* <Splash /> */}
      {/* <SignUp /> */}
      <SignIn />
    </SafeAreaView>
  );
}
