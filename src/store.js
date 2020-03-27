import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: null,
    userToken: null,
    userRole: null
  },
  mutations: {
    defUserId(state, userId){
      state.userId = userId
    },
    defUserRole(state, userRole){
      state.userRole = userRole
    }
  },
  actions: {
    fetchUser ({state, commit}, userCredentials) {
      console.log(state)
      if (!userCredentials.userId){
        commit('defUserRole', null)
      }
      try {
        let db = firebase.firestore();
        var docRef = db.collection("doctors").doc(userCredentials.userId)
        docRef.get().then((doc) =>{
            if (doc.exists) {
              let userData = doc.data()
              commit('defUserRole', JSON.stringify(userData))
            } else {
                commit('defUserRole', null)
            }
        }).catch((error) => {
            console.log(error)
            commit('defUserRole', null)
        });
      } catch(e){
        console.log(e)
        console.log('profile not found')
      }
    },
    fetchLoggedInUserId({state, commit}){
      console.log(state)
      const currentUser = firebase.auth().currentUser
      const currentUserId = currentUser != null ? currentUser.uid : null
      commit('defUserId', currentUserId)
    }
  },
  getters: {
    userId (state){
      return state.userId
    },
    userRole (state){
      return state.userRole
    }
  }
})
