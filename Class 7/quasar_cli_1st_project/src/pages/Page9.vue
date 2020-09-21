<template>
    <q-page> 

    

    <div class="row q-mb-xl q-pl-xl q-pr-xl">
      <div class="col-12">
        <div class="box text-center">
          <div class="text-h3">HEADER</div>
          <div class="text-subtitle1">(fierst thing you want users to see)</div>
        </div>
      </div>
    </div>
    <div class="row q-px-xl q-mb-xl">
      <div class="col-12 ">
        <div class="row box body text-center items-center ">
          <div class="col-12">
            <div class="text-h3">Body</div>
            <div class="text-subtitle1">(follwed by the content)</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="row q-mb-xl q-pl-xl q-pr-xl">
      <div class="col-12">
        <div class="box text-center">
          <div class="text-h3">Footer</div>
          <div class="text-subtitle1">(typically less important staff)</div>
        </div>
      </div>
    </div>

    </q-page>
</template>
<script>
export default {
    name:"page9"
}
</script>
<style lang="stylus" scoped>
      .box {
        border:  1px solid black;
        min-height: 100px;
      }

      .body {
        height: 400px;
      }
</style>