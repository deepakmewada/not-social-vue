export default {
    state: {
        user: {}
      },
      getters:{
        getUser(state){
          return state.user;
        }
      },
      mutations: {
        setUser(state) {
    
        },
        setUser(state, payload) {
          state.user = payload.user;
        }
      },
      actions: {
        setUser({ commit }, user) {
          commit("setUser",user);
        }
      }
}