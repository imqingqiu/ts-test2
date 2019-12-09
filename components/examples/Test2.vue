<template>
    <div>{{ val }}</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
    components: {}
})
export default class Test2Page extends Vue {
    private val: string = ''

    mounted() {
        this.$log('this is Test2Page mounted 222')
        this.val = 'this is Test2Page 222'
    }
}
</script>

<style scoped></style>
