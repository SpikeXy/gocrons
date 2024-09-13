import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)
export default new vuex.Store({
  state: {
    hiddenNavMenu: false
  },
  getters: {
  },
  mutations: {
    hiddenNavMenu (state) {
      state.hiddenNavMenu = true
    },
    showNavMenu (state) {
      state.hiddenNavMenu = false
    }
  }
})
