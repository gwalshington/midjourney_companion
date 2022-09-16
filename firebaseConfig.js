import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage"
import getEnvVars from './environment';

const {
  firebaseApiKey,
  firebaseAuthDomain,
  //firebaseDatabaseURL,
  firebaseProjectId,
  firebaseStorageBucket,
  firebaseMessagingSenderId,
  firebaseAppId
} = getEnvVars();

const config = {
    apiKey: firebaseApiKey,
    authDomain: firebaseAuthDomain,
    //databaseURL: firebaseDatabaseURL,
    projectId: firebaseProjectId,
    storageBucket: firebaseStorageBucket,
    messagingSenderId: firebaseMessagingSenderId,
    appId: firebaseAppId
}

const firebaseApp = initializeApp(config);
initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage)
})
export default { firebaseApp }
