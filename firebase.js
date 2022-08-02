// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyC3ypl8ZNuOmdQm-bEKbZQbh1n7mF59okM",
  authDomain: "fir-2ab05.firebaseapp.com",
  projectId: "fir-2ab05",
  storageBucket: "fir-2ab05.appspot.com",
  messagingSenderId: "679530312934",
  appId: "1:679530312934:web:d4ea550aaa9b96fdb37727",
  measurementId: "G-ZB4BZN1KMC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};


