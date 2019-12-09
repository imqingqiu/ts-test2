<template>
    <div class="main-container">
        <header class="apply-header">
            <div class="nav">
                <nuxt-link class="dataCloud-logo" to="/"></nuxt-link>
                <span class="title">数据科学云</span>
            </div>
        </header>
        <div class="main-content">
            <nuxt class="main-body" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class ApplyPage extends Vue {}
</script>
<style lang="less"></style>
<style lang="less" scoped>
.apply-header {
    background: @color-black;
    height: 56px;
    padding-left: 16px;
    line-height: 56px;

    .title {
        color: @color-FFF;
        font-size: @fs14;
    }
}
</style>
