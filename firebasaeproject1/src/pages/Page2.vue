<template>
  <q-page>
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
                <q-btn outline size="md" color="primary" @click="submit('TQMlTjMm6DBqulaO3Hg1')" icon="person">Submit</q-btn>

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
  name: 'page2',
  data: function () {
          return {
            name:"Kamal",
            message:"",
            img:"user2.webp",
            userInfo:[],
          }
        },
      
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
}
</script>

<style lang="stylus" scoped>
  .wrapper{
            max-width: 1200px;
            margin: 0 auto;
        }
        .box.one{
            border: 1px solid black;
            max-height: 300px;
        }
        .avatar{
            vertical-align: middle;
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }
</style>>

