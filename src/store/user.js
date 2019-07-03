export default {
    state: {
        user: {name: 'Deepak'},
        isLoggedIn: true
      },
      getters:{
        getUser(state){
          return state.user;
        },
        isLoggedIn(state){
          return state.isLoggedIn;
        }
      },
      mutations: {
        setUser(state, payload) {
          state.user = payload.user;
          state.isLoggedIn = true;
        }
      },
      actions: {
        setUser({ commit }, user) {
          commit("setUser",user);
        }
      }
}