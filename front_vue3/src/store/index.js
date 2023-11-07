import { createStore } from 'vuex'

import user from "@/store/modules/user"
import manageMenu from '@/store/modules/manageMenu'

export default createStore({
  state:{},
  getters:{},
  mutations:{},
  actions:{},
  modules: 
  {
    user,
    manageMenu,
  }
})
