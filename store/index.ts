import { GetterTree, MutationTree } from 'vuex'

interface IStateProp {
  isBackdrop?: boolean
}

export const state = (): IStateProp => ({
  isBackdrop: false,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  isBackdrop: (state) => state.isBackdrop,
}

export const mutations: MutationTree<RootState> = {
  SETBACKDROP(state, payload) {
    state.isBackdrop = payload
  },
}
