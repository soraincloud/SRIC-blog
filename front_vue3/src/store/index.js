import { createStore } from 'vuex'

import user from "@/store/modules/user"
import manageMenu from '@/store/modules/manageMenu'
import indexHead from '@/store/modules/indexHead'

export default createStore({
  state:{},
  getters:{},
  mutations:{},
  actions:{},
  modules: 
  {
    user,
    manageMenu,
    indexHead,
  }
})
