<template>
<div align="center">
   <q-card style="width:400px" >
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
        <q-input class="q-mb-md" color="secondary" outlined v-model="newUser.email" label="Enter Your Email">
          <template v-slot:append>
            <q-icon name="email" color />
          </template>
        </q-input>
        
        <!-- name element  -->
          <q-input class="q-mb-md" color="secondary" outlined v-model="newUser.name" label="Enter Your Name">
            <template v-slot:append>
              <q-icon name="how_to_reg" color />
            </template>
          </q-input>
          <!-- Password Element  -->
        <q-input class="q-mb-md" color="secondary" outlined v-model="newUser.password" label="Set Password">
          <template v-slot:append>
            <q-icon name="vpn_key" color />
          </template>
        </q-input>

        <div class="row justify-end">
          <q-btn color="secondary"  @click="createNewUser()" label="Submit" />
        </div>
      </q-card-section>
    </q-card>
</div>
</template>

<script>
import { dbAuth} from "boot/firebase";
export default {
  name: 'Registration',
  data () {
    return {
      text:'',
       newUser: {
        name: '',
        email: '',
        password: ''
      }
    
    }
  },
      methods:{
        createNewUser () {
          let userObj = this.newUser
          // this.$store.dispatch('user/userAdd', userObj)
          // processing
          dbAuth.createUserWithEmailAndPassword(this.newUser.email, this.newUser.password)
          .then(result => {
              alert("Account Successfully Create for()");
              console.log(result)
              this.newUser.email = ""
              this.newUser.name = ""
              this.newUser.password = ""

              this.$router.push('home')


            })
            .catch(function(error) {
                console.error("Error: ", error);
            });
            // TODO:clear the new User
            //  newuser.email , newUser.name, newUser.pass
          },
        }
    
     }

</script>



<style lang="stylus" scoped>

</style>

