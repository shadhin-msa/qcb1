<template>
    <q-page> 
        <div class="wrapper">
        <div class="row  q-px-xl q-mt-xl q-mb-xl">
          <div class="col-6">
              <div class="row q-col-gutter-sm">
                  <div class="col">
                      <q-input v-model="first_name" label="First Name"></q-input>
                  </div>
                  <div class="col">
                      <q-input v-model="last_name" label="Last Name"></q-input>
                  </div>
              </div>
          
              <q-input v-model="user_name" label="User Name"></q-input>
              <q-input v-model="email_address" type="email" label="Email Address"></q-input>
              <q-input v-model="mobile"   mask="(###) ### - ####"
              label="Mobile"></q-input>
              <q-input v-model="DOB" type="date" label="DOB"></q-input>
              <q-input v-model="Initial" label="Initial"></q-input>
              <q-input
                  filled
                  v-model="colour"
                  class="my-input"
              >
                  <template v-slot:append>
                  <q-icon name="colorize" class="cursor-pointer">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                      <q-color v-model="colour" />
                      </q-popup-proxy>
                  </q-icon>
                  </template>
            </q-input>
            
              <h4 v-if="sex ==='male'">Hi ! You Are a male</h4>
              <h4 v-else>Hi ! ! You Are a Female</h4>
              <div><b>SEX</b>
              <div class="radio q-col-gutter-md">
                  <q-radio v-model="sex" val="male" label="Male" />
                  <q-radio  v-model="sex" val="female" label="Female" />
              </div>
              </div>
  
              <q-btn outline size="xl" color="primary" @click="submit" icon="person"  >Submit</q-btn>
  
             
          </div>
          <div class="col-6 bg-grey-3">
              <div class=" q-mb-md" >
                  <q-avatar :style="'background-color:' + colour">
                    <q-icon name="person" ></q-icon>
                  </q-avatar>
                  
                
              </div>
  
              <div class="q-mb-md"><b>Full Name:{{total_name}}</b></div>
              <div class="q-mb-md"><b>User Name: {{user_name}}</b></div>
              <div class="q-mb-md"><b>Email: {{email_address}}</b></div>
              <div class="q-mb-md"><b>Mobile: {{mobile}}</b></div>
              <div class="q-mb-md"><b>DOB:{{DOB}}</b></div>
              <div class="q-mb-md"><b>Initial: {{Initial}}</b></div>
              <div class="q-mb-md"><b>Color:{{colour}}</b></div>
              <div><b>Sex:{{sex}}</b></div>
          </div>
      </div>
  
      </div>
    </q-page>
</template>

<script>
export default {
    name:"page5",
    data: function () {
          return {
              first_name:"",
              last_name: "",
              user_name:"",
              email_address:"",
              mobile:"",
              DOB:"",
              Initial:"",
              colour:"",
              male:"",
              female:"",
              sex:""          }
        },
        computed:{
            total_name(){
                return this.first_name + " " + this.last_name
            }
        },
        methods: {
          
            submit(){
              this.first_name="",
              this.last_name="",
              this.user_name="",
              this.email_address="",
              this.mobile="",
              this.DOB="",
              this.Initial="",
              this.colour="",
              this.sex=""


            }

            
            // male(){
            //     this.male="male"
            // }
        },

}
</script>
<style lang="stylus" scoped>
 .wrapper{
        max-width: 1000px;
        margin: 0 auto;
        
      }
</style>