// Este servicio maneja el registro, el inicio de sesiónn y cerrar sesión con Firebase.

import { auth } from "../../mercado/firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Esta función permite registrar un usuario con email y contraseña.
export const registrar = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Esta función permite iniciar sesión con el email y con la contraseña.
export const iniciarSesion = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Esta función permite cerrar la sesión.
export const cerrarSesion = () => {
  return signOut(auth);
};
