<template>
    <el-form :inline="true" :model="formInline">
        <el-form-item label="器材名称">
            <el-select v-model="formInline.region" placeholder="器材名称">
                <el-option label="羽毛球" value="羽毛球"></el-option>
                <el-option label="篮球" value="篮球"></el-option>
                <el-option label="足球" value="足球"></el-option>
                <el-option label="排球" value="排球"></el-option>
            </el-select>
            <el-input-number v-model="num" :min="1" :max="10"></el-input-number>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">添加</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                formInline: {
                    user: '',
                    region: ''
                },
                num: 1
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style scoped>

</style>
