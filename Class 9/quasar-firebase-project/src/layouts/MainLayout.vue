<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
           <span class="q-subtitle-1 q-pl-md">
               KolpoKar Dev Chat
          </span>
        </q-toolbar-title>

      
           
         <q-list>
              <q-item clickable to="/login">
                  <q-item-section avatar>
                    <q-item-label>Sing-in</q-item-label>
                  </q-item-section>
              </q-item>
              <q-item clickable to="/registration">
                  <q-item-section avatar>
                    <q-item-label>Sing-up</q-item-label>
                  </q-item-section>
              </q-item>
          </q-list>

      </q-toolbar>
    </q-header>

 

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      
    }
  }
}
</script>
