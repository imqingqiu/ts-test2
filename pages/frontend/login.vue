<template>
    <div class="login">
        Login Page
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
    components: {}
})
export default class LoginPage extends Vue {
    /**
     * data获取的方式
     */
    private message?: string = ''

    /**
     * mounted 钩子函数
     */
    private mounted(): void {
        this.message = 'Hello， 中国'
    }

    /**
     * computer计算属性获取方式
     */
    get sum() {
        return `Sam say: ${this.message}`
    }

    /**
     * 正常的methods方法
     */
    getter(): void {
        this.message = 'I Love China!'
    }
}
</script>

<style lang="less" scoped></style>
