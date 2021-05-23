import Vue from 'vue'
import Vuex from 'vuex'
import {AXIOS} from './axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      user: {},

      profile: {
          FIO: '',
          position: '',
          qualification: '',
          professionalDevelopment: [],
          awards: [],
      },

      avatar: '',
  },
  mutations: {
      set_avatar(state , url) {
          state.avatar = url;
      }
  },
  actions: {
  },
  modules: {
  }
})
