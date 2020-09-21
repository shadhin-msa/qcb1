<template>
  <div>
    <div class="text-h1">
      Its Page ONE
        <menu-item-list></menu-item-list>  
    </div>
  
  </div>
</template>

<script>

// step 1: import component file 
// step 2: declare component. 
// step 3: use the component

import menuItemList from "components/MenuItemList.vue"
export default {
  name: 'page1',
  components: {
    menuItemList 
  }
}
</script>

<style lang="stylus" scoped>

</style>