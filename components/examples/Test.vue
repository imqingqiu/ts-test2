<template>
    <div class="Test">
        <p class="title">{{ title }}</p>
        <h2>Children Test message: {{ message }}</h2>
        <button class="btn" @click="handelClickUpdate()">Clildren翻译</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'nuxt-property-decorator'

@Component({
    components: {}
})
export default class TestPage extends Vue {
    /**
     * 简单的写法
     */
    // @Prop() message!: string
    /**
     * 默认写法
     */
    @Prop({
        type: String,
        default: 'Children is Test' // 在组件未接收到父组件的值时，会触发default的值
    })
    message!: string

    /**
     * data数据定义处
     */
    private title?: string = 'This is Text Page'

    private mounted(): void {
        setTimeout(() => {
            this.title = 'This is Text Page After SetTimeout'
        }, 1000)
    }

    @Emit()
    public handelClickUpdate(): void {
        // 函数命名要使用驼峰式，在父组件调用使用中划线分割 eg: 'handel-click-update'
        console.log('this is children Test emit Fun')
    }
}
</script>

<style lang="less" scoped>
.Test {
    margin: 10px 20px;

    .title {
        font-size: 48px;
        color: #5ecc5e;
    }
}
</style>
