// Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      var firebaseConfig = {
        apiKey: "AIzaSyCapcbxik3Coih2CEbSjHEVk7PfCXIvwiA",
        authDomain: "project-noakhali-with-qcb1.firebaseapp.com",
        databaseURL: "https://project-noakhali-with-qcb1.firebaseio.com",
        projectId: "project-noakhali-with-qcb1",
        storageBucket: "project-noakhali-with-qcb1.appspot.com",
        messagingSenderId: "350577226133",
        appId: "1:350577226133:web:3c51c930a36ea7cd9e069c",
        measurementId: "G-LM679JHLHR"
      };

      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      // console.log(fP)
      // console.log(fP.name)
      var db = firebase.firestore();

      db.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
      })
      // .then(function(docRef) {
      //     console.log("Document written with ID: ", docRef.id);
      // })
      // .catch(function(error) {
      //     console.error("Error adding document: ", error);
      // });
