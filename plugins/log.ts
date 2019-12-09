import { Plugin } from '@nuxt/types'
import baseConfig from '~/static/config/index'

declare module 'vue/types/vue' {
    interface Vue {
        $log
    }
}

declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $log
    }
}

declare module 'vuex/types/index' {
    interface Store<S> {
        $log
    }
}

const myPlugin: Plugin = (context, inject) => {
    inject('log', baseConfig.IS_OPEN_LOG ? console.log : function() {})
}

export default myPlugin
