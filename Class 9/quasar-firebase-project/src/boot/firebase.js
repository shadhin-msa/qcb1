import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCapcbxik3Coih2CEbSjHEVk7PfCXIvwiA",
  authDomain: "project-noakhali-with-qcb1.firebaseapp.com",
  databaseURL: "https://project-noakhali-with-qcb1.firebaseio.com",
  projectId: "project-noakhali-with-qcb1",
  storageBucket: "project-noakhali-with-qcb1.appspot.com",
  messagingSenderId: "350577226133",
  appId: "1:350577226133:web:3c51c930a36ea7cd9e069c",
  measurementId: "G-LM679JHLHR"
}



// Initialize Firebase
let shadhinDb =  firebase.initializeApp(firebaseConfig);
let db = shadhinDb.firestore();
let dbAuth = shadhinDb.auth()

export { db, dbAuth };

