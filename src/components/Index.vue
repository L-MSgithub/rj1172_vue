<template>
    <el-container>
        <el-header>
            <el-row type="flex" justify="space-between">
                <h3>广东海洋大学体育馆管理系统</h3>
                <el-link :underline="false" style="color: white;"><h3>登录</h3></el-link>
            </el-row>
        </el-header>
        <el-container>
            <el-col :span="4">
                <el-menu
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        <el-menu-item index="1-3">选项3</el-menu-item>
                        <el-menu-item index="1-4">选项4</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span slot="title">器材管理</span>
                        </template>
                        <el-menu-item index="4-1">购置新增</el-menu-item>
                        <el-menu-item index="4-2">维护保修</el-menu-item>
                        <el-menu-item index="4-3">报废删除</el-menu-item>
                        <el-menu-item index="4-4">查询</el-menu-item>
                        <el-menu-item index="4-5">租用</el-menu-item>
                        <el-menu-item index="4-6">回收</el-menu-item>
                        <el-menu-item index="4-7">租用消费标准</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "Index",
        data(){
            return{
                activeIndex: '1',
            }
        },
        methods: {
            handleSelect(key, keyPath) {

            },
            handleOpen(key, keyPath) {

            },
            handleClose(key, keyPath) {

            }
        }
    }
</script>

<style>
    .el-header{
        background-color: #545c64;
        border-radius: 5px;
        height: 150px;
    }

    .el-aside{
        background-color: #409EFF;
        border-radius: 5px;
        height: 150px;
    }

    .el-main{
        background-color: aliceblue;
        border-radius: 5px;
        height: 150px;
    }

    .el-row{
        color: white;
    }
</style>
