import { Plugin } from '@nuxt/types'
import TpUtils from '~/libs/tpUtils.ts'

// 实现到vue中
declare module 'vue/types/vue' {
    interface Vue {
        $tpUtils: TpUtils
    }
}

// 实现到nuxt中
declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $tpUtils: TpUtils
    }
}

// 实现到vuex中
declare module 'vuex/types/index' {
    interface Store<S> {
        $tpUtils: TpUtils
    }
}

const tpUtils: Plugin = (context, inject) => {
    inject('tpUtils', new TpUtils())
}

export default tpUtils

/*
 * 使用方法
 * 1、在上下文context中使用，context.app.$tpUtils.someFunctionName();
 * 2、在vue全局中使用，this.$tpUtils.someFunctionName();
 * */
