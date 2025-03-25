// Importamos React
import React from "react";

// Importamos componentes básicos de React Native
import { SafeAreaView, View, StyleSheet, Dimensions } from "react-native";

// Importamos componentes de UI desde react-native-paper
import { Card, Text } from "react-native-paper";

// Importamos el formulario de autenticación
import SnackAutenticacion from "../../snacks/autenticacion/SnackAutenticacion";

// Importamos el logo de la marca
import SnackLogo from "../../snacks/brand_kit/SnackLogo";

// Importamos el hook para acceder al tema global
import { useTheme } from "../../estilo/ThemeContext";

// Importamos el pie de página con el copyright
import SnackCopyright from "../../snacks/brand_kit/SnackCopyright";

// Definimos el componente de la pantalla de autenticación
export default function PantallaAutenticacion() {
  // Extraemos colores, fuentes y tamaños del tema
  const { colors, fonts, fontSizes } = useTheme();

  // Obtenemos el ancho de la pantalla para hacer el diseño responsivo
  const screenWidth = Dimensions.get("window").width;

  return (
    // SafeAreaView asegura que el contenido no se superponga con la barra de estado o el notch
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      {/* Parte superior redondeada con color primario y logo */}
      <View style={[styles.topBackground, { backgroundColor: colors.primary }]}>
        {/* Logo centrado */}
        <SnackLogo size={120} />

        {/* Nombre de la tienda */}
        <Text
          style={{
            marginTop: 8, // Separación con el logo
            fontFamily: fonts.heading, // Fuente para títulos
            fontSize: fontSizes.lg, // Tamaño grande
            color: colors.white, // Color blanco para contraste
            letterSpacing: 1, // Espaciado entre letras
          }}
        >
          MI TIENDA EN LÍNEA
        </Text>
      </View>

      {/* Contenedor del formulario y pie de página */}
      <View style={styles.content}>
        {/* Tarjeta que contiene el formulario de login */}
        <Card
          style={[
            styles.card,
            {
              backgroundColor: "rgba(255,255,255,0.95)", // Fondo blanco translúcido
              width: screenWidth > 500 ? 400 : "90%", // Adaptable al tamaño de pantalla
            },
          ]}
          elevation={4} // Elevación para sombra y profundidad
        >
          {/* Formulario de autenticación */}
          <SnackAutenticacion />
        </Card>

        {/* Pie de página con derechos y enlace */}
        <SnackCopyright company="Maobits" url="https://www.maobits.com" />
      </View>
    </SafeAreaView>
  );
}

// Estilos para la pantalla
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda la pantalla
  },
  topBackground: {
    height: 240, // Altura del fondo superior
    borderBottomLeftRadius: 80, // Borde redondeado inferior izquierdo
    borderBottomRightRadius: 80, // Borde redondeado inferior derecho
    justifyContent: "center", // Centrado vertical
    alignItems: "center", // Centrado horizontal
  },
  content: {
    flex: 1,
    marginTop: -80, // Sube el contenido para que se solape con la curva
    alignItems: "center", // Centrado horizontal
    paddingHorizontal: 20, // Margen lateral
    justifyContent: "center", // Centrado vertical del contenido
  },
  card: {
    padding: 24, // Espaciado interno del formulario
    borderRadius: 20, // Bordes redondeados de la tarjeta
  },
});
