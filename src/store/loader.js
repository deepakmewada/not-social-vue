export default {
    state: {
        loading: false
    },
    getters: {
        isLoading(state) {
            return state.loading;
        }
    },
    mutations: {
        setLoading(state, setting) {
          state.loading = setting;
        }
    },
    actions: {
        setLoading({ commit }, setting) {
          commit("setLoading", setting);
        }
    }
}