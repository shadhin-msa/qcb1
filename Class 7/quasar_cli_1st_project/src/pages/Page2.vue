<template>
  <div>
    <div class="text-h1">
      2nd page
    </div>
    <div>
      <menuItemList></menuItemList>
    </div>
  </div>
</template>

<script>

import menuItemList from 'components/MenuItemList.vue'

export default {
  name: 'page2',
  components: {
    menuItemList
  }
}
</script>

<style lang="stylus" scoped>

</style>