import { Plugin } from '@nuxt/types'
import Validata from '~/libs/regexp.ts'

// 实现到vue中
declare module 'vue/types/vue' {
    interface Vue {
        $regExp: Validata
    }
}

// 实现到nuxt中
declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $regExp: Validata
    }
}

// 实现到vuex中
declare module 'vuex/types/index' {
    interface Store<S> {
        $regExp: Validata
    }
}

const regExp: Plugin = (context, inject) => {
    inject('regExp', new Validata())
}

export default regExp
