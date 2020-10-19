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
import { mapGetters } from 'vuex'

export default {
  name: 'MainLayout',
  data () {
    return {
      loggedin: false,
    }
  },
  computed: {
    // isUserLoggedIn () {
    //   return this.$store.getters['user/isUserLoggedIn']
    // }
    ...mapGetters('user', ['isUserLoggedIn'])
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
  },
  mounted () {
    console.log(this.$store)
    // this.getUserFromFireStore()
    let store = this.$store
    let router = this.$router

    // TODO: DO SOMETHING AFTER USER SIGN IN OR SIGN OUT
    // https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data

    dbAuth.onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        let loggedUser = {}
        loggedUser.email = user.email;
        loggedUser.uid = user.uid

        store.dispatch('user/storeAuthenticateUser', loggedUser)
        router.push('/home')

      } else {
        // User is signed out.
        // ...
        store.dispatch('user/storeAuthenticateUser', null)
        router.push('/login')
      }
    });
  }
}
</script>
