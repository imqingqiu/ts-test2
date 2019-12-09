<template>
    <div class="container">
        <div>
            <h1 class="title">
                nuxt-ts-test1
            </h1>
            <h2>{{ message }}</h2>
            <h2>{{ sum }}</h2>
            <button @click="getter()">翻译一下</button>
            <test :message="message" @handel-click-update="getter()" />
            <button @click="axiosFun()">测试接口</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Test from '~/components/examples/Test.vue'

@Component({
    layout: 'backstage',
    components: { Test }
})
export default class TestPage extends Vue {
    private message: string = ''
    private listData: Array<string> = []

    get sum() {
        return `Sam say: ${this.message}`
    }

    private asyncData({ $axios, app }) {
        function getTagList() {
            return $axios.get(
                'http://172.16.41.26:3000/mock/17/trumpetCloud/demo1'
            )
        }
        return getTagList().then((res) => {
            // 只打印在了 控制台
            app.$log('listData====', res.data.data.list.length)
            return {
                listData: res.data.data.list
            }
        })
    }

    mounted() {
        // 只打印在了 浏览器
        this.$log('mounted listData====', this.listData)
        this.message = 'Hello， 中国'
    }

    async getter(): Promise<void> {
        this.message = 'I Love China!'
        await this.axiosFun()
    }

    async axiosFun(): Promise<void> {
        await this.$axios
            .get('http://172.16.41.26:3000/mock/17/trumpetCloud/demo1')
            .then((res) => {
                console.log('axiosFun ==', res)
            })
            .catch()
    }
}
</script>

<style lang="less" scoped>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
