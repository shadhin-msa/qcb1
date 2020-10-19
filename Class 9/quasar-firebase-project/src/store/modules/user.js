import {uid} from 'quasar'

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
  clearDBMutation(state, value) {
    state.usersInfo = value;
  },

  addUserMutation(state, value) {
    state.usersInfo.push(value);
  },

  addMessageMutation(state, obj) {
    state.usersInfo[obj.index].msg.push(obj.newMessage)
  },
  storeUser(state, value){
  
    state.userAuth = value

  }
};

// actions
const actions = {
  clearDB({ commit }, value) {
    console.log("context");
    commit("clearDBMutation", []);
  },

  userAdd({ commit }, payload) {
    let newUser = {
      name: payload.name,
      email: payload.email,
      password: payload.password
    };
    commit("addUserMutation", newUser);
  },

  updateUser() {},

  deleteUser() {},

  // msg and arry pass index
  addMessage({ commit, state }, payload) {

    console.log('user.js > actions > addMessage')
    console.log(payload)
    let userId = payload.userId
    let newMessageId = uid()
    let newMessage = { id: newMessageId, text: payload.message }
    let index = state.usersInfo.findIndex(item => item.id === userId)
    let obj = { index, newMessage }
    console.log({ 'new message obj': obj })
    commit('addMessageMutation', obj)
  },

  deleteMessage({ commit }, payload) {
    commit("deleteMessage", payload);
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
    let allUser = state.usersInfo;
    // filtert users by age
    // only return user those age is above 100

    // array filter
  }
};

export default {
  namespaced: true,
  mutations,
  state,
  actions,
  getters
};
