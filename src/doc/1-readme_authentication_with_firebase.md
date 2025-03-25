# 🚀 App Mi Tienda – Autenticación con Firebase

## ✅ Índice paso a paso

---

### 1. Crear el proyecto base con Expo

**Descripción:** Inicia el proyecto limpio con la plantilla en blanco.

```bash
npx create-expo-app mitienda-auth --template blank
cd mitienda-auth
```

---

### 2. Estructura recomendada del proyecto

**Descripción:** Organiza el proyecto por carpetas lógicas.

- `/assets/brand_kit/` – Logos y recursos gráficos
- `/src/estilo/` – Tema global y estilos
- `/src/snacks/` – Componentes reutilizables
- `/src/recetas/` – Lógica como autenticación
- `/src/pantallas/` – Vistas de pantalla como Login

---

### 3. Instalar las dependencias necesarias

**Descripción:** Agrega los paquetes base para UI, autenticación y vectores.

```bash
npm install react-native-paper firebase react-native-vector-icons
```

---

### 4. Instalar fuentes personalizadas (opcional)

**Descripción:** Para usar fuentes como Inter o Raleway.

```bash
npx expo install expo-font
```

---

### 5. Crear el tema global de la app

**Descripción:** Archivo `ThemeContext.tsx` con colores, fuentes y tamaños.

📁 `src/estilo/ThemeContext.tsx`

---

### 6. Envolver la app con `PaperProvider` y `ThemeProvider`

**Descripción:** Habilita el contexto del tema y Paper en `App.tsx`.

📄 `App.tsx`

---

### 7. Conectar Firebase

**Descripción:** Agrega y configura Firebase.

📁 `src/recetas/autenticacion/firebase.ts`

> Asegúrate de tener el proyecto creado en [https://console.firebase.google.com](https://console.firebase.google.com)

---

### 8. Crear lógica de inicio de sesión

**Descripción:** Función `iniciarSesion` para autenticar con correo/contraseña.

📁 `src/recetas/autenticacion/auth.ts`

---

### 9. Crear pantalla de autenticación

**Descripción:** Vista principal donde se carga el formulario y logo.

📁 `src/pantallas/PantallaAutenticacion.tsx`

---

### 10. Crear componente de formulario login

**Descripción:** Componente que muestra inputs y botón para autenticarse.

📁 `src/snacks/autenticacion/SnackAutenticacion.tsx`

---

### 11. Crear componente del logo de la marca

**Descripción:** Muestra el logo en la pantalla de login.

📁 `src/snacks/brand_kit/SnackLogo.tsx`

---

### 12. Crear componente de copyright

**Descripción:** Pie de página con enlace a tu empresa o sitio.

📁 `src/snacks/brand_kit/SnackCopyright.tsx`

---

### 13. Probar inicio de sesión

**Descripción:** Inicia sesión con un usuario válido desde Firebase Authentication.

- Email: usuario de prueba
- Password: creado desde consola Firebase

---
