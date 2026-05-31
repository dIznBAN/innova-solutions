import { initializeApp, getApps, getApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth, getAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAuskCSIa07S3Vdyf8djuVsBq75Um3zJQU',
  authDomain: 'innova-solutions-4db3f.firebaseapp.com',
  projectId: 'innova-solutions-4db3f',
  storageBucket: 'innova-solutions-4db3f.firebasestorage.app',
  messagingSenderId: '971553657529',
  appId: '1:971553657529:web:7fbd4b9257faf55612c168',
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch {
  auth = getAuth(app);
}

export { auth };
