// console.log('router-auth from boot file')

import {Notify} from "quasar"
export default ({router, store}) => {
  router.beforeEach((to, from, next) => {
    // console.log('router before each from boot file')
    // console.log({'to' : to})
    // console.log({'from' : from})

    let isLoggedIn = store.getters['user/isUserLoggedIn']

    if(to.path === '/home') {
      console.log({'1': [to, isLoggedIn]})
      if (isLoggedIn) {
        console.log({'2': to})
        next ()
      } else {
        
        console.log({'3': [to, isLoggedIn]})
        console.log({'condition true' : to.path})
        Notify.create( {message:'Only Logged in user can access this page'})

        next('/login')
      }
    } else if (to.path === '/login' || to.path === '/registration') {
      if (isLoggedIn) {
        next('/home')
      } else {
        next()
      }
    } else {
      console.log({'condition false' : to.path})
      next()
    }

    

  }
  )
}