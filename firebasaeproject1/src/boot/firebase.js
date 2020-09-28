import * as firebase from "firebase/app";
import "firebase/firestore";


  var firebaseConfig = {

    apiKey: "AIzaSyD429JAfsxFCcuXuc4pz3ZJLSLEgaYFshI",
    authDomain: "fir-chat-453e9.firebaseapp.com",
    databaseURL: "https://fir-chat-453e9.firebaseio.com",
    projectId: "fir-chat-453e9",
    storageBucket: "fir-chat-453e9.appspot.com",
    messagingSenderId: "869254833780",
    appId: "1:869254833780:web:872ca9a70505e058cd1321",
    measurementId: "G-8YTKGS6C2B"

  };
  // Initialize Firebase
  
  
  let firebaseApp =  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore();

  export { db, firebase };

