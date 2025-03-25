// Importamos React
import React from "react";

// Importamos componentes y utilidades de React Native
import { View, StyleSheet, Linking } from "react-native";

// Importamos componentes de la librería react-native-paper
import { Text, Icon } from "react-native-paper";

// Importamos el hook useTheme para acceder al tema global de la app
import { useTheme } from "../../estilo/ThemeContext";

// Definimos las propiedades que el componente acepta
interface Props {
  company: string; // Nombre de la empresa
  url: string; // Enlace al sitio web o app
}

// Definimos el componente funcional
export default function SnackCopyright({ company, url }: Props) {
  // Accedemos a los valores del tema (colores, fuentes, tamaños)
  const { colors, fonts, fontSizes } = useTheme();

  // Función para abrir el enlace en el navegador
  const abrirEnlace = async () => {
    const soportado = await Linking.canOpenURL(url); // Verifica si el enlace se puede abrir
    if (soportado) {
      await Linking.openURL(url); // Abre el enlace en el navegador del dispositivo
    } else {
      console.warn("No se puede abrir la URL:", url); // Mensaje de advertencia si falla
    }
  };

  // Estructura visual del componente
  return (
    // Contenedor principal del texto con ícono
    <View style={styles.container}>
      {/* Icono de copyright usando react-native-paper */}
      <Icon source="copyright" size={16} color={colors.muted} />

      {/* Texto con el mensaje: Creado por */}
      <Text
        style={{
          color: colors.muted, // Color gris definido en el tema
          fontSize: fontSizes.sm, // Tamaño de fuente pequeño
          fontFamily: fonts.main, // Fuente principal
          marginLeft: 4, // Espaciado entre ícono y texto
        }}
      >
        Creado por {/* Texto clickeable que abre el enlace */}
        <Text
          onPress={abrirEnlace}
          style={{
            color: colors.primary, // Color principal del tema
            fontFamily: fonts.heading, // Fuente para títulos
            textDecorationLine: "underline", // Subrayado
          }}
        >
          {company} {/* Nombre de la empresa recibido como prop */}
        </Text>
      </Text>
    </View>
  );
}

// Estilos para el contenedor
const styles = StyleSheet.create({
  container: {
    marginTop: 16, // Espaciado superior
    flexDirection: "row", // Elementos en fila
    alignItems: "center", // Centrado vertical
    justifyContent: "center", // Centrado horizontal
  },
});
