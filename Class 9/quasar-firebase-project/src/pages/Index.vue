<template>
  <q-page class="flex flex-center">
     <div class="wrapper">
      <div class="row justify-center q-col-gutter-md q-mt-xl q-mb-xl q-px-xl">
        <div class="col-12">
          <div class="box one q-pa-md text-center">
            <span class="text-h4">{{name}}</span><br>
            <img :src="img" alt="avatar" class="avatar">
            <div class="q-mb-sm">
                <q-input v-model="message" label="Write something" />
            </div>
            <div>
                <q-btn outline size="md" color="primary" @click="submit(userId)" icon="person">Submit</q-btn>

            </div>
        </div>
        </div>
        <div class="col-6">
          <div class="box">
              <q-list bordered>
                 <div  v-for="item in userInfo" :key="item.id" clickable v-ripple>
                   <q-item v-for="message in item.msg" :key="message.id">
                     <q-item-section >{{message.text}}</q-item-section>
                     <q-item-section avatar>
                       <q-avatar rounded>
                         <img :src="item.image">
                       </q-avatar>
                     </q-item-section>
                    </q-item>
                   </div>
              </q-list>
          </div>
      </div>


      </div>
    </div>
  </q-page>
</template>


<script>
import {db, dbAuth} from "boot/firebase";
export default {
   name: 'PageIndex',

  data () {
    return {
      name:"Jamal",
      text:"",
      userId : '9EiUNwJZSgwfg0cWvvwa',
      showLogin:false,
      showRegistration:false,
      message:"",
      img:"user1.webp",
      userInfo:[],
      newUser: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  computed: {},

  methods: {
  // Add data
    submit (id){
          db.collection('users/' + id + '/message')
          .add({ 
            text: this.message
          })
          .then((docRef) => {
            this.userInfo = []
            this.getUserFromFireStore();
            this.message = ""
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
       },
    // Read Data
    getUserFromFireStore(){
    db.collection("users").get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              let userData= {};
              userData.id = doc.id
              userData.name = doc.data().name
              userData.image = doc.data().image
              userData.msg = []

              db.collection('users/' + doc.id + '/message').get()
              .then((subCollectionSnapshot) => {
              subCollectionSnapshot.forEach((subDoc) => {
              let msgObject = {};
              msgObject.id = subDoc.id
              msgObject.text = subDoc.data().text
              userData.msg.push(msgObject)
            });
          });
             this.userInfo.push(userData)
          }); 
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
      
    },

    createNewUser () {
      // newUser = this.newUser
      
      // processing
     dbAuth.createUserWithEmailAndPassword(this.newUser.email, this.newUser.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

      // TODO:clear the new User
      //  newuser.email , newUser.name, newUser.pass
    },
    
    login () {
      // TODO: call firebase login function with email & pass
      // https://firebase.google.com/docs/auth/web/start#sign_in_existing_users

    },

    logout () {
      // TODO: call firebase logout function
      // https://firebase.google.com/docs/auth/web/password-auth#next_steps


    }

  },
  
  mounted(){
    this.getUserFromFireStore()

    // TODO: DO SOMETHING AFTER USER SIGN IN OR SIGN OUT
    // https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data
  }

};
</script>