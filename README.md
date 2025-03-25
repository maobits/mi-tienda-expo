# 🛍️ Mi Tienda en Línea – Autenticación con React Native + Expo + Firebase

Este proyecto es una app móvil construida con **React Native (Expo)** que implementa un sistema de **inicio de sesión con Firebase Authentication**.

---

## 📱 Tecnologías utilizadas

- [Expo](https://expo.dev/) – Framework para desarrollo móvil con React Native
- [Firebase](https://firebase.google.com/) – Backend como servicio (Auth)
- [React Native Paper](https://callstack.github.io/react-native-paper/) – UI moderna y accesible
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) – Íconos
- Contexto de Tema personalizado (`ThemeContext`)

---

## 🧱 Estructura del proyecto

```
mitienda-auth/
├── assets/                  # Imágenes, logotipos
│   └── brand_kit/
├── src/
│   ├── estilo/              # Tema global con colores y fuentes
│   ├── snacks/              # Componentes reutilizables (Logo, Copyright...)
│   ├── recetas/             # Lógica de negocio (auth con Firebase)
│   └── pantallas/           # Pantallas principales (PantallaAutenticacion)
├── App.tsx                  # Punto de entrada de la app
```

---

## 🚀 Pasos para comenzar

### 1. Crear el proyecto

```bash
npx create-expo-app mitienda-auth --template blank
cd mitienda-auth
```

### 2. Instalar dependencias

```bash
npm install react-native-paper firebase react-native-vector-icons
npx expo install expo-font
```

### 3. Configurar Firebase

- Ve a [https://console.firebase.google.com](https://console.firebase.google.com)
- Crea un nuevo proyecto y copia la configuración web
- Agrega el archivo `firebase.ts` en `src/recetas/autenticacion/`

---

## 🔑 Autenticación

Se utiliza **inicio de sesión por correo y contraseña** mediante Firebase Authentication.

- Validación de campos vacíos y formato de correo
- Alerta de éxito o error
- Tema visual personalizado

---

## 🖼️ Pantalla principal

### `PantallaAutenticacion.tsx`

- Fondo superior curvo con logo y nombre de la tienda
- Tarjeta con formulario de inicio de sesión (`SnackAutenticacion`)
- Pie de página con nombre de la empresa y enlace

---

## 🧠 Personalización del tema

```ts
// src/estilo/ThemeContext.tsx
export const defaultTheme = {
  colors: {
    primary: "#3B82F6",
    secondary: "#F59E0B",
    ...
  },
  fonts: {
    main: "Inter-Regular",
    heading: "Raleway-Bold"
  },
  fontSizes: {
    md: 16,
    lg: 20,
    ...
  }
};
```

---

## 🔗 Créditos

- Desarrollado por: **Mauricio Chara Hurtado**
- Empresa: **Maobits**
- Sitio web: [www.maobits.com](https://www.maobits.com)
- 📱 WhatsApp: [+57 3153774638](https://wa.me/573153774638)
- 📸 Instagram: [@mauriciochara.online](https://instagram.com/mauriciochara.online)

---

## 📌 Próximos módulos sugeridos

- Registro de nuevos usuarios
- Recuperación de contraseña
- Navegación con `react-navigation`
- Contexto de usuario global
- Firebase Firestore para perfiles

---
