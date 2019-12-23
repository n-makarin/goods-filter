import myJsonServer from '@/api/my-json-server'

export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET (store, data) {
      store.data = data
    }
  },
  actions: {
    /**
     * Get goods item by id and add it to store
     * @param id {string}
     * @returns Promise<void>
     */
    async get ({ commit }, id) {
      const result = await myJsonServer.get('goods', `/${id}`)
      if (!result) { return }
      commit('SET', result)
    }
  },
  getters: {
    data: (state) => state.data
  },
  modules: {
  }
}
