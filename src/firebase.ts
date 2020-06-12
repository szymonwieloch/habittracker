import firebase from "firebase";

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyD6CrcZspeEfN0TWM0Zo0y-cHZvZUM1NQw",
  authDomain: "habit-tracker-aadfe.firebaseapp.com",
  databaseURL: "https://habit-tracker-aadfe.firebaseio.com",
  projectId: "habit-tracker-aadfe",
  storageBucket: "habit-tracker-aadfe.appspot.com",
  messagingSenderId: "361711579896",
  appId: "1:361711579896:web:01d357ec92538083a6010d",
  measurementId: "G-JP842G92TS",
};

export const app = firebase.initializeApp(FIREBASE_CONFIG);

export const auth = app.auth();

export const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};
