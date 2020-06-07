<template>
    <el-form :inline="true" :model="formInline">
        <el-form-item label="器材名称">
            <el-select v-model="formInline.region" placeholder="器材名称">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-input-number v-model="num" @change="" :min="1" :max="10"></el-input-number>
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
