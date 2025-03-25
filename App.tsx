import React from "react";
import { ThemeProvider } from "./src/estilo/ThemeContext";
import PantallaAutenticacion from "./src/vitrinas/autenticacion/PantallaAutenticacion";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useState } from "react";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const cargarFuentes = async () => {
    await Font.loadAsync({
      Raleway: require("./assets/fonts/Raleway-Bold.ttf"),
      Inter: require("./assets/fonts/Inter-Regular.ttf"),
    });
  };

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={cargarFuentes}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <ThemeProvider>
      <PantallaAutenticacion />
    </ThemeProvider>
  );
}
