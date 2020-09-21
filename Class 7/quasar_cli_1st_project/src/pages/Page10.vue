<template>
    <q-page> 
div class="wrapper  text-center">
      <!-- header -->
      <div class="row header q-px-xl">
        <div class="col-12">

          <div class="row q-col-gutter-lg">

            <!-- logo -->
            <div class="col-3">
              <div class="box q-my-sm">
                <span class="text-h3">Logo</span>
              </div>
            </div>
            <!-- navigation -->
            <div class="col-9">
              <div class="box q-mt-xl nav">
                <span class="">Navigation</span>
    
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Banner -->

      <div class="row q-px-xl q-mb-lg" >
        <div class="col-12">
          <div class="box banner q-mt-lg">
            <span>Banner</span>
          </div>
        </div>
      </div>

      <!-- Features -->

      <div class="row q-col-gutter-lg q-px-xl q-md-lg q-mb-lg">
        <div class="col-4">
          <div class="box">
            <span>Feature 1</span>
          </div>
        </div>
        <div class="col-4">
          <div class="box">
            <span>Feature 2</span>
          </div>
        </div>
        <div class="col-4">
          <div class="box">
            <span>Feature 3</span>
          </div>
        </div>
      </div>

      <!-- footer -->
      <div class="row">
        <div class="col-12">
          <div class="box">
            <span>Footer</span>
          </div>
        </div>
      </div>

    
    </q-page>
</template>
<script>
export default {
    name: "page10"
}
</script>
<style lang="stylus" scoped>
   .wrapper {
        max-width: 1200px;
        margin: 0 auto;
        border: 1px solid
      }
      .box {
        border: 1px solid;
        min-height: 100px;
      }
      .nav {
        min-height: 50px;
      }

      .header {
        border-bottom: 1px solid
      }

      .banner {
        height: 400px;
      }

</style>