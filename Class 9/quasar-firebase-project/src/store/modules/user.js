

// state
const state = {
  usersInfo: [
    // { id: '1', fullName: 'sk', email: 'blabla@g.com', 
    //   msg: [
    //     { id: 'a', text:'txt' },
    //     { id: 'b', text: 'bbbb' }
    //   ]
    // }, 
    // { id: '2', name: 'sk', email: 'blabla@g.com', 
    //   msg: [
    //     { id: '2a', text:'2a txt' },
    //     { id: '2b', text: '2b bbbb' }
    //   ]
    // }
  ],

  userAuth: {
  
  }
}

const mutations = {
  clearDBMutation (state, value ) {
    state.usersInfo = value
  },
  addUserMutation (state, value) {
    state.usersInfo.push(value)
  },
  storeUser(state, value){
  
    state.userAuth = value

  }
  
}

// actions
const actions = {
  clearDB ({commit }, value) {
    console.log('context')
    commit('clearDBMutation', [])
  },

  userAdd ({commit}, payload) {
    let newUser = {
      name: payload.name,
      email: payload.email,
      password: payload.password,
    }
    commit('addUserMutation', newUser)
  },

  updateUser () {

  },

  deleteUser () {
    
  },

  // msg and arry pass index
  addMessage ({commit}, payload) {
    let payload2 = "kisu pari na"
    let two = {
      valueOne : "Ashish",
      msg : "rafi"
    }
    console.log("jani na" + one)
    console.log(two)
    console.log(payload2.msg)
    //   let newMessage = {
    //     usersInfo : payload.index, // first bhul ..... 
    //     msg: payload.msg,
    // }
    // console.log('action')
    // console.log(payload)
    // console.log(newMessage)
    // commit('addMessageMutation', newMessage)
  },

  deleteMessage ({commit}, payload) {
    commit('deleteMessage', payload)
  },

  deleteUser () {
    
  },
  // storing authenticated user info
  storeAuthenticateUser ({commit}, payload ){
      commit('storeUser', payload)
  }
}

// getters
const getters = {
  getUsers: state => state.usersInfo,
  getAuthUser: state => state.userAuth,
  hasiberDadiGon: state => {
    let allUser = state.usersInfo
    // filtert users by age 
    // only return user those age is above 100

    // array filter 
  }
}


export default {
  namespaced: true,
  mutations,
  state,
  actions,
  getters
}




