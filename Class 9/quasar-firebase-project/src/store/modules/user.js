

// state
const state = {
  usersInfo: [
    { id: '1', fullName: 'sk', email: 'blabla@g.com', 
      msg: [
        { id: 'a', text:'txt' },
        { id: 'b', text: 'bbbb' }
      ]
    }, 
    { id: '2', name: 'sk', email: 'blabla@g.com', 
      msg: [
        { id: '2a', text:'2a txt' },
        { id: '2b', text: '2b bbbb' }
      ]
    }
  ]
}

const mutations = {
  clearDBMutation (state, value ) {
    state.usersInfo = value
  },
  addUserMutation (state, value) {
    state.usersInfo.push(value)
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

  addMessage () {

  },

  deleteMessage () {

  },

  deleteUser () {
    
  }
}

// getters
const getters = {
  getUsers: state => state.usersInfo,
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




