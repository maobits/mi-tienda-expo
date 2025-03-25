// Importamos las funciones necesarias de React para crear el contexto y el hook
import React, { createContext, useContext, ReactNode } from "react";

// Definimos una interfaz que describe la estructura del tema
interface Theme {
  colors: {
    primary: string; // Color principal de la app (ej: botones, encabezados)
    secondary: string; // Color secundario o de acento
    surface: string; // Fondo de tarjetas, inputs, etc.
    background: string; // Fondo general de toda la app
    text: string; // Color del texto principal
    muted: string; // Texto secundario o deshabilitado
    white: string; // Blanco puro
    black: string; // Negro puro
    success: string; // Verde para mensajes de éxito
    danger: string; // Rojo para errores
    warning: string; // Amarillo para advertencias
    info: string; // Azul claro para información
    border: string; // Color para bordes sutiles
    placeholder: string; // Color de los textos de placeholder
  };
  fonts: {
    main: string; // Fuente base del contenido
    heading: string; // Fuente para títulos o encabezados
  };
  fontSizes: {
    xs: number; // Tamaño extra pequeño
    sm: number; // Tamaño pequeño
    md: number; // Tamaño mediano
    lg: number; // Tamaño grande
    xl: number; // Tamaño extra grande
  };
}

// Creamos una constante con los valores por defecto del tema
const defaultTheme: Theme = {
  colors: {
    primary: "#3B82F6", // Azul moderno (Material)
    secondary: "#F59E0B", // Naranja vibrante
    surface: "#F9FAFB", // Fondo claro y limpio para tarjetas
    background: "#FFFFFF", // Fondo general claro
    text: "#1F2937", // Texto oscuro elegante
    muted: "#6B7280", // Texto gris neutro
    white: "#FFFFFF", // Blanco puro
    black: "#000000", // Negro puro
    success: "#10B981", // Verde esmeralda (éxito)
    danger: "#EF4444", // Rojo moderno (error)
    warning: "#FBBF24", // Amarillo suave (advertencia)
    info: "#0EA5E9", // Azul cielo (información)
    border: "#E5E7EB", // Borde sutil gris claro
    placeholder: "#9CA3AF", // Placeholder gris moderno
  },

  fonts: {
    main: "Inter-Regular", // Fuente principal de contenido
    heading: "Raleway-Bold", // Fuente destacada para títulos
  },
  fontSizes: {
    xs: 10, // Extra pequeño
    sm: 12, // Pequeño
    md: 16, // Mediano
    lg: 20, // Grande
    xl: 24, // Extra grande
  },
};

// Creamos el contexto del tema con los valores por defecto
const ThemeContext = createContext<Theme>(defaultTheme);

// Creamos el proveedor del tema que envuelve la app
export const ThemeProvider = ({ children }: { children: ReactNode }) => (
  // Proporcionamos el valor del tema a través del contexto
  <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>
);

// Hook personalizado que facilita el acceso al contexto del tema
export const useTheme = () => useContext(ThemeContext);
