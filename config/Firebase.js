import * as firebase from "firebase";
import { FIREBASE_API_KEY } from "@env";

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "react-native-for-designers.firebaseapp.com",
  databaseURL: "https://react-native-for-designers.firebaseio.com",
  projectId: "project-id",
  storageBucket: "react-native-for-designers.appspot.com",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
