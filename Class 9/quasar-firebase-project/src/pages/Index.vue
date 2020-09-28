<template>
  <q-page class="flex flex-center">
    
    
    
    
    
    
    
     <div class="wrapper">
      <div class="row justify-center q-col-gutter-md q-mt-xl q-mb-xl q-px-xl">

  <!-- Login Form  -->
              <q-card style="width:400px">
                <!-- close icon section -->
          
                <q-card-section class="row q-pb-none">
                  <q-space />
                  <q-btn icon="close" flat round dense v-close-popup />
                </q-card-section>
          
                <!-- login user logo section -->
          
                <q-card-section class="text-center">
                  <q-avatar rounded size="100px" font-size="82px" color="teal" text-color="white" icon="face" />
                </q-card-section>
          
                <!-- User_id and Password input form section -->
          
                <q-card-section>
                  <q-input class="q-mb-md" color="secondary" outlined v-model="text" label="User Id">
                    <template v-slot:append>
                      <q-icon name="how_to_reg" color />
                    </template>
                  </q-input>
          
                  <q-input class="q-mb-md" color="secondary" outlined v-model="text" label="Password">
                    <template v-slot:append>
                      <q-icon name="vpn_key" color />
                    </template>
                  </q-input>
          
                  <div class="row justify-end">
                    <q-btn color="secondary" icon-right="login" label="Submit" />
                  </div>
                </q-card-section>
              </q-card>

              <!-- Registration Form  -->
              <q-card style="width:400px">
                <!-- close icon section -->
          
                <q-card-section class="row q-pb-none">
                  <q-space />
                  <q-btn icon="close" flat round dense v-close-popup />
                </q-card-section>
          
                <!-- login user logo section -->
          
                <q-card-section class="text-center">
                  <q-avatar rounded size="100px" font-size="82px" color="teal" text-color="white" icon="face" />
                </q-card-section>
          
                <!-- User_id and Password input form section -->
          
                <q-card-section>
                  <!-- email element  -->
                  <q-input class="q-mb-md" color="secondary" outlined v-model="newuser.email" label="Enter Your Email">
                    <template v-slot:append>
                      <q-icon name="email" color />
                    </template>
                  </q-input>
                  
                  <!-- name element  -->
                    <q-input class="q-mb-md" color="secondary" outlined v-model="newuser.name" label="Enter Your Name">
                      <template v-slot:append>
                        <q-icon name="how_to_reg" color />
                      </template>
                    </q-input>
                    <!-- Password Element  -->
                  <q-input class="q-mb-md" color="secondary" outlined v-model="newuser.password" label="Set Password">
                    <template v-slot:append>
                      <q-icon name="vpn_key" color />
                    </template>
                  </q-input>
          
                  <div class="row justify-end">
                    <q-btn color="secondary" icon-right="login" @click= "createNewUser" label="Submit" />
                  </div>
                </q-card-section>
              </q-card>






        <div class="col-12">
          <div class="box one q-pa-md text-center">
            <span class="text-h4">{{name}}</span><br>
            <img :src="img" alt="avatar" class="avatar">
            <div class="q-mb-sm">
                <q-input v-model="message" label="Write something" />
            </div>
            <div>
                <q-btn outline size="md" color="primary" @click="submit('JeiHnJCwwpSkae0gaAcv')" icon="person">Submit</q-btn>

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
import {db} from "boot/firebase";
export default {
   name: 'PageIndex',

  data () {
    return {
      name:"Jamal",
            message:"",
            img:"user1.webp",
            userInfo:[],
            newuser: {
              name: "",
              email: "",
              password: ""

            }

    };
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
      
    } ,
    createNewUser(){


          dbAuth.createUserWithEmailAndPassword(this.newuser.email, this.newuser.name).catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // ...
    });

    }    
    },
    

    mounted(){
      this.getUserFromFireStore()
    }
};
</script>