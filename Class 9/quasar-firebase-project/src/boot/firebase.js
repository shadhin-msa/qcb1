import * as firebase from "firebase/app";
import "firebase/firestore";


  var firebaseConfig = {

    apiKey: "AIzaSyB9KHz0nxh_WN-3Lph5UAw663goBNZ1HXw",
    authDomain: "test-project-21e3f.firebaseapp.com",
    databaseURL: "https://test-project-21e3f.firebaseio.com",
    projectId: "test-project-21e3f",
    storageBucket: "test-project-21e3f.appspot.com",
    messagingSenderId: "198125223792",
    appId: "1:198125223792:web:66e68fbf258810a97a59b5"
  };
  // Initialize Firebase
  let firebaseApp =  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore();

  export { db, firebase };

