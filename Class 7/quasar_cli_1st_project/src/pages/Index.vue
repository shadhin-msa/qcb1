<template>
  <q-page class="flex flex-center">
  <div class="wrapper">
            <div class="row justify-center q-col-gutter-md q-mt-xl q-mb-xl q-px-xl">
                <div class="col-4">
                   <div class="box one q-pa-md text-center">
                       <span class="text-h4">Sachin</span><br>
                       <img src="user1.webp" alt="avatar" class="avatar">
                       <div class="q-mb-sm">
                           <q-input v-model="sachinmsg" label="Write something" />
                       </div>
                       <div>
                           <q-btn outline size="md" color="primary" @click=" submitsachinmsg" icon="person">Submit</q-btn>
                       </div>
                   </div>
                </div>
                <div class="col-4">
                    <div class="box one q-pa-md text-center">
                        <span class="text-h4">Rahul</span><br>
                        <img src="user2.webp" alt="avatar" class="avatar">
                        <div class="q-mb-sm">
                            <q-input v-model="rahulmsg" label="Write something" />
                        </div>
                        <div>
                            <q-btn outline size="md" color="primary" @click="submitrahulmsg" icon="person">Submit</q-btn>
                        </div>
                    </div>
                 </div>
                 <div class="col-4">
                    <div class="box one q-pa-md text-center">
                        <span class="text-h4">Gavaskar</span><br>
                        <img src="user3.jpg" alt="avatar" class="avatar">
                        <div class="q-mb-sm">
                            <q-input v-model="gavaskarmsg" label="Write something" />
                        </div>
                        <div>
                            <q-btn outline size="md" color="primary" @click="submitgavaskarmsg" icon="person">Submit</q-btn>
                        </div>
                    </div>
                 </div>

                 <div class="col-6">
                     <div class="box">
                         <q-list bordered>
                            <q-item v-for="item in objectarray" :key="item.message" clickable v-ripple>
                                <q-item-section>{{item.message}}</q-item-section>
                                <q-item-section avatar>
                                  <q-avatar rounded>
                                    <img :src="item.img">
                                  </q-avatar>
                                </q-item-section>
                              </q-item>
                         </q-list>
                     </div>
                 </div>
            </div>
        </div>
    <!-- <div class="Zaman">
      <span class="text-h2">Abdullah Al Rafi</span>
    </div> -->
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data: function () {
          return {
            sachinmsg: "",
            rahulmsg:"",
            gavaskarmsg:"",

            img1:"user1.webp",
            img2:"user2.webp",
            img3:"user3.jpg",

           
            objectarray:[
              
              

            ]
           
          }
        },
        methods: {
          submit(message, img){
            let object={message, img}
            this.objectarray.push(object)
          },
          submitsachinmsg(){
            this.submit(this.sachinmsg, this.img1)
            this.sachinmsg = ""
          },
          submitrahulmsg(){
            this.submit(this.rahulmsg, this.img2)
            this.rahulmsg = ""
          },
          submitgavaskarmsg(){
            this.submit(this.gavaskarmsg, this.img3)
            this.gavaskarmsg = ""
          }
        },
        // ...etc
}
</script>
<style lang="stylus">
 .wrapper{
            max-width: 1200px;
            margin: 0 auto;
        }
        .box.one{
            border: 1px solid black;
            max-height: 300px;
        }
        .avatar{
            vertical-align: middle;
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }
</style>
