import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBZsHITyv2N9eXQyxec7xIf9n3jVM35Xw4",
  authDomain: "facebook-messenger-clone-aa2fc.firebaseapp.com",
  projectId: "facebook-messenger-clone-aa2fc",
  storageBucket: "facebook-messenger-clone-aa2fc.appspot.com",
  messagingSenderId: "950930101302",
  appId: "1:950930101302:web:fbb73a0028e86116f3f497",
  measurementId: "G-LVJV77RJ9Z",
});

const db = firebaseApp.firestore();

export default db;
