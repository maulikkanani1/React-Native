import React from "react";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "react-native-elements";

import configureStore from "./src/store/configureStore";
import Navigation from "./src/navigation";

const theme = {
  colors: {
    primary: "#0F0D47",
  },
};

export default function App() {
  return (
    <Provider store={configureStore}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar style="light" />
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
}
