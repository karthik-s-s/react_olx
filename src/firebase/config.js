import firebase from "firebase";
import  "firebase/auth";
import 'firebase/firebase'
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCOYAqBzXQKZvvml6nvZQaEuJbwP3U9OgQ",
    authDomain: "olx-clone-7cbd7.firebaseapp.com",
    projectId: "olx-clone-7cbd7",
    storageBucket: "olx-clone-7cbd7.appspot.com",
    messagingSenderId: "669897589618",
    appId: "1:669897589618:web:79ffadbbfbb497e61113eb",
    measurementId: "G-8EQ0838LEC"
  };
  export default  firebase.initializeApp(firebaseConfig)