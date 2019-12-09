import { GetterTree, ActionTree, MutationTree, ActionContext } from 'vuex'
import { Context as AppContext } from '@nuxt/types'

export const state = () => ({
    things: [] as string[],
    name: 'Me'
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    name: (state) => state.name
}

export const mutations: MutationTree<RootState> = {
    CHANGE_NAME: (state, newName: string) => (state.name = newName)
}

export const actions: ActionTree<RootState, RootState> = {
    async nuxtServerInit({ commit }, { app, isStatic, $axios }) {
        let people = []

        app.$log(111)

        app.$log('isStatic ===', isStatic)

        // If you serve the site statically with `nuxt generate`, you can't use HTTP requests for local
        people = []

        // await commit('setPeople', people.slice(0, 10))
        await commit('CHANGE_NAME', 'null')
    },
    fetchThings({ commit }) {
        const things = this.$axios.$get('/things')
        console.log(things)
        commit('CHANGE_NAME', 'New name')
    }
}
