// Importar las funciones necesarias desde el SDK de Firebase
import { initializeApp } from "firebase/app"; // Inicializa la app Firebase
import { getAnalytics } from "firebase/analytics"; // (Opcional) Herramienta de analíticas
import { getAuth } from "firebase/auth"; // Módulo de autenticación

// 📌 NOTA: Aquí puedes agregar otros SDKs de Firebase según lo necesites
// Documentación oficial: https://firebase.google.com/docs/web/setup#available-libraries

// Configuración de tu proyecto de Firebase
// Estas credenciales las obtienes desde la consola de Firebase en la sección de configuración del proyecto
const firebaseConfig = {
  apiKey: "AIzaSyB2GGyp7VL-T10I7JEa-6EhfTuQfgRkCSw", // Clave pública del proyecto
  authDomain: "maobits-mitienda.firebaseapp.com", // Dominio de autenticación
  projectId: "maobits-mitienda", // ID del proyecto Firebase
  storageBucket: "maobits-mitienda.firebasestorage.app", // Bucket para almacenamiento de archivos
  messagingSenderId: "900836666372", // ID para servicios de mensajería (FCM)
  appId: "1:900836666372:web:65384eafdb95af43a01951", // ID único de la app
  measurementId: "G-255Z9PE4VC", // (Opcional) ID de Google Analytics
};

// Inicializar la app Firebase con la configuración anterior
const app = initializeApp(firebaseConfig);

// Inicializar Analytics (opcional, solo funciona en web)
const analytics = getAnalytics(app);

// Exportar el módulo de autenticación para usarlo en otros archivos
export const auth = getAuth(app);
