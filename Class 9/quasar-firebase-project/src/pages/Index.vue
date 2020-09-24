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
                <q-btn outline size="md" color="primary" @click="submit('Nx3m1Gv1YDmvXMg5Bfz3')" icon="person">Submit</q-btn>

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
      
    }     
    },
    mounted(){
      this.getUserFromFireStore()
    }
};
</script>