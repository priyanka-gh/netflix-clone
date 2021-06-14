import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC4wFWAoNWuOpdElNX6gHCXANraHSlqtsE",
    authDomain: "netflix-clone-f86d0.firebaseapp.com",
    projectId: "netflix-clone-f86d0",
    storageBucket: "netflix-clone-f86d0.appspot.com",
    messagingSenderId: "767901426238",
    appId: "1:767901426238:web:a6a19b2994524cdbc8a76f",
    measurementId: "G-ZTX7NJ838Z"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;