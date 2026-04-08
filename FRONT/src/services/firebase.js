import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

export const googleProvider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyAuskCSIa07S3Vdyf8djuVsBq75Um3zJQU",
  authDomain: "innova-solutions-4db3f.firebaseapp.com",
  projectId: "innova-solutions-4db3f",
  storageBucket: "innova-solutions-4db3f.firebasestorage.app",
  messagingSenderId: "971553657529",
  appId: "1:971553657529:web:7fbd4b9257faf55612c168"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
