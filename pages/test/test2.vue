<template>
    <div class="aaa">
        {{ a }}
        <test2 :val="a"></test2>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Test2 from '~/components/examples/Test2.vue'

@Component({
    components: {
        Test2
    }
})
export default class IndexPage extends Vue {
    private a: string = '123'
    mounted() {
        this.$log('this is Index mounted 222')
        this.getUserInfo()
    }

    private async getUserInfo(): Promise<void> {
        this.$log('this.$store.state as RootState ===', this.$store.state.name)
        await this.$store.commit('CHANGE_NAME', 'zhangtingwei')

        // 发送 node 服务接口
        this.$axios
            .post('/api/frontend/getUser')
            .then((result) => {
                this.$log('result ===', result.data)

                this.$log(
                    'this.$store.state as RootState ===',
                    this.$store.state.name
                )
            })
            .catch((err) => {
                this.$log('err ===', err.data)
            })
    }

    public goToTest() {
        this.$router.push({
            path: '/test'
        })
    }
}
</script>

<style lang="less" scoped>
.aaa {
    font-size: @fs14;
}
</style>
