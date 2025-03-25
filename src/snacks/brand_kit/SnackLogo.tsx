// Importamos React
import React from "react";

// Importamos componentes necesarios de React Native
import { Image, StyleSheet, View, ImageStyle } from "react-native";

// Definimos la interfaz para las props que acepta el componente
interface SnackLogoProps {
  size?: number; // Tamaño opcional del logo (ancho y alto)
  style?: ImageStyle; // Estilos adicionales opcionales para la imagen
}

// Componente funcional que recibe props y muestra un logo
export default function SnackLogo({ size = 100, style }: SnackLogoProps) {
  return (
    // Contenedor del logo centrado
    <View style={styles.container}>
      {/* Imagen del logo importada desde la carpeta de assets */}
      <Image
        source={require("../../../assets/brand_kit/logo.png")} // Ruta del logo
        style={[{ width: size, height: size, resizeMode: "contain" }, style]} // Tamaño + estilos adicionales
      />
    </View>
  );
}

// Estilos para el contenedor
const styles = StyleSheet.create({
  container: {
    alignItems: "center", // Centrado horizontal
    justifyContent: "center", // Centrado vertical
  },
});
