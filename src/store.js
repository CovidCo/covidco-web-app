import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: null
  },
  mutations: {
    defUserId(state, userId){
      console.log(state)
      state.userId = userId
    }
  },
  actions: {
    fetchUser ({state, commit}, userId) {
      console.log(state)
      console.log(userId)
      commit('defUserId', 1)
    }
  },
  getters: {
    userId (state){
      return state.userId
    }
  }
})
