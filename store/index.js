import config from '~/static/config/index'

export const state = () => ({
    user: null,
    name: 'AAA'
})

export const mutations = {
    SET_USER(state, user) {
        state.user = user
    },
    CHANGE_NAME: (state, newName) => (state.name = newName)
}

export const actions = {
    nuxtServerInit(
        {
            commit,
            dispatch
            // getter
        },
        { req, route, app, store }
    ) {
        app.$log(
            '【store index.js 】- Function nuxtServerInit, process ====',
            process.server,
            process.client
        )
        app.$log(
            '【store index.js 】- Function nuxtServerInit, store.state.user====',
            store.state.user
        )
    }
}
