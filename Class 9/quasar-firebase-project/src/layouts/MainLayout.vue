<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
           <span class="q-subtitle-1 q-pl-md">
               KolpoKar Dev Chat
          </span>
        </q-toolbar-title>

      <q-tabs align="right">
        <q-route-tab to="/home" label="Home" />
        <q-route-tab to="/login" label="Log-in" />
        <q-route-tab to="/registration" label="Sign-Up" />
        <q-route-tab to="/home" label="LogOut" @click="logout"/>
      </q-tabs>
      
  
      </q-toolbar>
    </q-header>

 

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import {dbAuth} from "boot/firebase";

export default {
  name: 'MainLayout',
  data () {
    return {
      
    }
  },
  methods: {
    logout(){
      dbAuth.signOut().then(function() {
            // Sign-out successful.
              this.$router.push('registration')
          }).catch(function(error) {
            // An error happened.
          });
    }
  }
}
</script>
