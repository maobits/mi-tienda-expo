// Importamos React y el hook useState para manejar estado local
import React, { useState } from "react";

// Importamos componentes base de React Native
import { View, StyleSheet, Alert } from "react-native";

// Importamos componentes de React Native Paper
import { TextInput, Button, Card, Text } from "react-native-paper";

// Función personalizada que realiza la autenticación desde Firebase
import { iniciarSesion } from "../../recetas/autenticacion/auth";

// Hook personalizado para usar el tema global de la app
import { useTheme } from "../../estilo/ThemeContext";

// Componente funcional
export default function SnackAutenticacion() {
  // Estado para el email del usuario
  const [email, setEmail] = useState("");

  // Estado para la contraseña del usuario
  const [password, setPassword] = useState("");

  // Obtenemos colores, fuentes y tamaños desde el tema
  const { colors, fonts, fontSizes } = useTheme(); // 🎨 Tema global

  // Función para validar los campos antes de enviar
  const validarCampos = () => {
    // Si alguno está vacío, mostrar alerta
    if (!email.trim() || !password.trim()) {
      Alert.alert(
        "⚠️ Campos incompletos",
        "Por favor ingresa tu correo y contraseña."
      );
      return false;
    }

    // Validar formato correcto del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert(
        "⚠️ Correo inválido",
        "Ingresa un correo electrónico válido."
      );
      return false;
    }

    return true; // Validación exitosa
  };

  // Función que maneja el proceso de inicio de sesión
  const controladorInicioSesion = async () => {
    if (!validarCampos()) return; // Si no pasa validación, no continúa

    try {
      // Intentar iniciar sesión con Firebase
      await iniciarSesion(email, password);
      Alert.alert("✅ Sesión iniciada correctamente.");
      console.log("Sesión iniciada correctamente.");
    } catch (error: any) {
      // Mostrar errores si falla la autenticación
      Alert.alert("❌ Error", error.message);
      console.log("Error", error.message);
    }
  };

  return (
    // Contenedor general con color de fondo del tema
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Tarjeta que envuelve el formulario */}
      <Card style={styles.card}>
        {/* Título de la tarjeta */}
        <Card.Title
          title="Iniciar Sesión"
          titleStyle={{
            fontFamily: fonts.heading,
            fontSize: fontSizes.lg,
            color: colors.text,
            textAlign: "center",
          }}
        />

        {/* Contenido del formulario */}
        <Card.Content>
          {/* Campo para correo electrónico */}
          <TextInput
            label="Correo electrónico"
            mode="outlined"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={[styles.input, { fontFamily: fonts.main }]}
            outlineColor={colors.border}
            activeOutlineColor={colors.primary}
            theme={{
              colors: { text: colors.text, placeholder: colors.placeholder },
            }}
          />

          {/* Campo para contraseña */}
          <TextInput
            label="Contraseña"
            mode="outlined"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={[styles.input, { fontFamily: fonts.main }]}
            outlineColor={colors.border}
            activeOutlineColor={colors.primary}
            theme={{
              colors: { text: colors.text, placeholder: colors.placeholder },
            }}
          />
        </Card.Content>

        {/* Botón de acción */}
        <Card.Actions style={styles.actions}>
          <Button
            mode="contained"
            onPress={controladorInicioSesion}
            style={[
              styles.button,
              { backgroundColor: colors.primary, alignSelf: "center" },
            ]}
            labelStyle={{
              color: colors.white,
              fontFamily: fonts.heading,
              fontSize: fontSizes.md,
            }}
          >
            Iniciar Sesión
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

// Estilos del componente
const styles = StyleSheet.create({
  container: {
    padding: 20, // Espaciado interno
    alignItems: "center", // Centrar horizontalmente
  },
  card: {
    width: "100%", // Ocupa todo el ancho disponible
    borderRadius: 16, // Bordes redondeados
    elevation: 4, // Sombra (solo en Android)
    paddingVertical: 16, // Espaciado vertical interno
  },
  input: {
    marginBottom: 16, // Espaciado entre inputs
  },
  actions: {
    flexDirection: "column", // Columnas para alinear vertical
    alignItems: "center", // Centrar contenido
    paddingHorizontal: 16,
    marginTop: 8,
  },
  button: {
    borderRadius: 12, // Bordes redondeados del botón
  },
});
