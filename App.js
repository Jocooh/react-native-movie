import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
// import Stacks from "./navigation/Stacks";
// import Tabs from "./navigation/Tabs";
import Root from "./navigation/Root";
import { useColorScheme } from "react-native"; //다크모드

const App = () => {
  // const isDark = useColorScheme() === "dark"; //dark이면 true값을 반환한다.
  const sheme = useColorScheme();
  return (
    <NavigationContainer theme={sheme === "dark" ? DarkTheme : DefaultTheme}>
      <Root></Root>
    </NavigationContainer>
  );
};

export default App;
