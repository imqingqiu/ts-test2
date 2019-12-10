<template>
    <div class="apply">
        <el-form
            :label-position="labelPosition"
            label-width="80px"
            :model="applyForm"
        >
            <el-form-item label="申请人姓名">
                <el-input v-model="applyForm.username"></el-input>
            </el-form-item>
            <el-form-item label="手机号码">
                <el-input v-model="applyForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="公司名称">
                <el-input v-model="applyForm.companyName"></el-input>
            </el-form-item>
            <el-form-item label="职位名称">
                <el-input v-model="applyForm.jobName"></el-input>
            </el-form-item>
            <el-form-item label="公司邮箱">
                <el-input v-model="applyForm.companyEmail"></el-input>
            </el-form-item>
            <el-form-item label="验证码">
                <el-input v-model="applyForm.verifyCode"></el-input>
            </el-form-item>
            <el-form-item label="使用用途">
                <el-input v-model="applyForm.usage"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">申请账号</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
interface ApplyForm {
    username: string
    phone: string
    companyName: string
    jobName: string
    companyEmail: string
    verifyCode: string
    usage: string
}

@Component({
    layout: 'apply',
    components: {}
})
export default class ApplyPage extends Vue {
    private applyForm: ApplyForm = {
        username: '',
        phone: '',
        companyName: '',
        jobName: '',
        companyEmail: '',
        verifyCode: '',
        usage: ''
    }
    private labelPosition: string = 'top'
}
</script>

<style lang="less" scoped>
.apply {
    width: 380px;
    margin: auto;
}
</style>
