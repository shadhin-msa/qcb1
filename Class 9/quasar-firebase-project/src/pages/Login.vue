<template>
  <div align="center">
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
        <q-input class="q-mb-md" color="secondary" outlined v-model="loginData.email" label="User email">
          <template v-slot:append>
            <q-icon name="how_to_reg" color />
          </template>
        </q-input>

        <q-input class="q-mb-md" color="secondary" outlined v-model="loginData.password" label="Password">
          <template v-slot:append>
            <q-icon name="vpn_key" color />
          </template>
        </q-input>

        <div class="row justify-end">
          <q-btn color="secondary" icon-right="login" @click="loginUser()" label="Submit" />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { dbAuth } from "boot/firebase";
export default {
  name: 'Login',
  data () {
    return {

      loginData: {
        email: "",
        password: ""
      }

    }
  },
  methods: {
    loginUser () {
      // processing
      dbAuth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password)
        .then(result => {
          this.loginData.email = ""
          this.loginData.password = ""

          this.$router.push('home')


        })
        .catch(function (error) {
          console.error("Error: ", error);
        });
      // TODO:clear the new User
      //  newuser.email , newUser.name, newUser.pass
    },

  }
}
</script>



<style lang="stylus" scoped></style>

