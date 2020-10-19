<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <span class="q-subtitle-1 q-pl-md">KolpoKar Dev Chat</span>
        </q-toolbar-title>

        <q-tabs align="right">
          <q-route-tab to="/home" v-if="isUserLoggedIn" label="Home" />
          <q-route-tab to="/login" v-if="!isUserLoggedIn" label="Log-in" />
          <!--  -->
          <q-route-tab to="/registration" v-if="!isUserLoggedIn" label="Sign-Up" />
          <q-route-tab to="/home" v-if="isUserLoggedIn" label="logOut" @click="logout()" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { dbAuth } from "boot/firebase";

import { dbAuth } from "boot/firebase";

export default {
  name: 'MainLayout',
  data () {
    return {
      loggedin: false,
    }
  },
  computed: {
    isUserLoggedIn () {
      let authUser = this.$store.getters['user/getAuthUser']
      // authUser = "rafi" 
      // authUser = {}
      // undefined, null, 0 and false er jonno sob false. ................................
      // otherwise sob true. 
      //  if (!!authUser.uid){
      //    console.log("authUserTrue")
      //  }
      //  else{
      //    console.log("authUserFalse")
      //  }
      return !!authUser.uid
      // if (authUser){}
    }
  },
  methods: {
    logout () {
      console.log("abba")
      let router = this.$router
      dbAuth.signOut().then(function () {

        // Sign-out successful.
        console.log("abbas");
        router.push('login')
      }).catch(function (error) {
        console.log(error)// An error happened. console.lo
      });
    }
  }
}
</script>
