  var firebaseConfig = {
        apiKey: "AIzaSyB9KHz0nxh_WN-3Lph5UAw663goBNZ1HXw",
        authDomain: "test-project-21e3f.firebaseapp.com",
        databaseURL: "https://test-project-21e3f.firebaseio.com",
        projectId: "test-project-21e3f",
        storageBucket: "test-project-21e3f.appspot.com",
        messagingSenderId: "198125223792",
        appId: "1:198125223792:web:66e68fbf258810a97a59b5"
         }
  
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      var db = firebase.firestore()

        let storedata = [];//store data form database

    db.collection("users").get()
    .then((querySnapshot) => {querySnapshot.forEach((doc) => {

      db.collection('users/' + doc.id + '/message').get().then((subCollectionSnapshot) => {
        subCollectionSnapshot.forEach((subDoc) => {
          console.log(subDoc.data());
        });
    });

  

      let userData = {};
               //assigned value iusersObjectArraynto userdata
                userData.id = doc.id
                userData.name =  doc.data().name
                userData.imgURL = '';
              // console.log(`${doc.id} => ${doc.data()}`);
  
                //  get the profile Image Url 
                firebase.storage().ref('users/' + doc.id + '/profile.png' ).getDownloadURL().then(img =>{
                  //assigned value into userdata
                  userData.imgURL = img;
                })
              
                // assigned userData object into an global array 
                 storedata.push(userData)

          });
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });

       // Add data
      // db.collection("users").add({
      //   first: "Ada",
      //   last: "Lovelace",
      //   born: 1815
      // })
      // .then(function(docRef) {
      //     // console.log("Document written with ID: ", docRef.id);
      //      console.log("Document written with ID: ", docRef);
      // })
      // .catch(function(error) {
      //     console.error("Error adding document: ", error);
      // });

      // Read Data