import firebase from 'firebase/app';

import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCqMjrwtsKgVl0uNRfyr0DxsLnKYr-FDl8",
    authDomain: "artsite-f82ea.firebaseapp.com",
    projectId: "artsite-f82ea",
    storageBucket: "artsite-f82ea.appspot.com",
    messagingSenderId: "1098374552663",
    appId: "1:1098374552663:web:1ed7d86d0629d4d4f79712",
    measurementId: "G-15H6NG1EZ9"
  };
  
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  const firestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { storage, firestore, timestamp };