<template>
    <q-page> 
         <div class="wrapper">
        <div class="row q-mb-xl q-px-xl">
            <div class="col-12">
                <div class="box text-center">
                    <div class="text-h6">Navigation</div>
                </div>
            </div>
        </div>
        <div class="row q-col-gutter-xl q-mb-xl q-px-xl">
            <div class="col-3">
                <div class="box text-center">
                    <div class="text-h6">Logo</div>
                </div>
            </div>
            <div class="col-9">
                <div class="box text-center tagline">
                    <div class="text-h6">Tagline</div>
                </div>
            </div>

        </div>
        <div class="row q-col-gutter-xl q-mb-xl q-px-xl">
            <div class="col-7">
                <div class="box featured text-center">
                    <div class="text-h6">Featured Case study</div>
                </div>
            </div> 
            <div class="col-5">
                <div class="boxz text-center">
                    <div class="text-h6">Introduction</div>
                </div>
                <div class="row q-col-gutter-md q-mb-xl">
                    <div class="col-12">
                        <span class="text-h6">Clients</span>
                    </div>
                    <div class="col-4">
                        <div class="boxcv"></div>
                    </div>
                    <div class="col-4">
                        <div class="boxcv"></div>
                    </div>
                    <div class="col-4">
                        <div class="boxcv"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row q-col-gutter-md q-px-xl q-mb-xl">
            <div class="col-4">
                <div class="box text-center">
                    <div class="text-h6">Services</div>
                </div>
            </div>
            <div class="col-4">
                <div class="box text-center">
                    <div class="text-h6">Featured Testimonial</div>
                </div>
            </div>
            <div class="col-4">
                <div class="box text-center">
                    <div class="text-h6">Mini</div>
                    <div class="text-h6">Call to action Banner</div>
                </div>
            </div>
        </div>
        <div class="row q-px-xl">
            <div class="col-12">
                <div class="box text-center">
                    <div class="text-h6">Footer</div>
                </div>
            </div>
        </div>


    </div>


    </q-page>
</template>
<script>
export default {
    name:"page11"
}
</script>
<style lang="stylus" scoped>
.wrapper{
            border:2px solid;
            max-width: 1000px;
            margin: 0 auto;
        }
        .box{
            border: 2px solid black;
            min-height: 100px;
            
        }
        .box.text-center.tagline{
            margin-left: 320px;
            
        }
        .box.featured.text-center{
            border: 2px solid black;
            min-height: 400px;
        }
        .boxz{
            border: 2px solid black;
            min-height: 200px;
        }
        .boxcv{
            border: 2px solid black;
            min-height: 100px;
        }

</style>