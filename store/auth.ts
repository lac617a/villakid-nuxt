import axios from 'axios'
import { GetterTree, ActionTree, MutationTree } from 'vuex'

interface IUserProp {
  role?: string
  name?: string
  loggedIn?: boolean
  username?: string | null
}


export const state = (): IUserProp => ({
  loggedIn: false,
  username: null,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  logged: state => state.loggedIn
}

export const mutations: MutationTree<RootState> = {
  LOGGEDIN(state, payload) {
    state.loggedIn = true
    state.username = payload.username || ''
    // router.push("/");
  },
  LOGGEDOUT(state) {
    state.loggedIn = false
    // router.push("/login");
  },
}

export const actions: ActionTree<RootState, RootState> = {
  login({ commit }, payload) {
    const formData = new FormData()
    formData.append('username', payload.name)
    formData.append('password', payload.pwd)

    axios({
      method: 'post',
      url: '/auth/login',
      data: formData,
    })
      .then((response) => {
        commit('LOGGEDIN', { username: response.data.name })
      })
      .catch((error) => {
        commit('loginError', error.response.data || 'GENERAL_ERROR')
      })
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logout({ dispatch, commit }) {
    axios({
      method: 'post',
      url: '/auth/logout',
    })
      .then(() => {
        commit('LOGGEDOUT')
      })
      .catch(() => {
        commit('LOGGEDOUT')
      })
  },
}