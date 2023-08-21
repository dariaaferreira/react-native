import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvqEF4mqX5Bodn-BP_WXvgXqhkgXaebyo",
  authDomain: "react-native-395916.firebaseapp.com",
  databaseURL: "https://react-native-395916-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-native-395916",
  storageBucket: "react-native-395916.appspot.com",
  messagingSenderId: "970404697384",
  appId: "1:970404697384:web:85510dd52788c8b0c02c1d",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
export const storage = getStorage(app);