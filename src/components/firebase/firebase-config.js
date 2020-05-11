import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDbFxFtmBccumYZGBXwhcbFKIYoI-FXeGQ",
    authDomain: "chat-72295.firebaseapp.com",
    databaseURL: "https://chat-72295.firebaseio.com",
    projectId: "chat-72295",
    storageBucket: "chat-72295.appspot.com",
    messagingSenderId: "86385088258",
    appId: "1:86385088258:web:5200f1bb82a399f6d5541b",
    measurementId: "G-VMKDVSJL80"
  };
  
  //Para evitar que se ejecute dos veces el método initializeApp
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.auth();
