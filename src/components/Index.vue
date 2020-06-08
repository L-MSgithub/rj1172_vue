<template>
    <div style = "background-color: aliceblue">
        <el-container>
            <el-header>
                <el-row type="flex" justify="space-between">
                    <h3>广东海洋大学体育馆管理系统</h3>
                    <el-link :underline="false" style="color: white;"><h3>登录</h3></el-link>
                </el-row>
            </el-header>
            <el-container>
                <el-col :span="5">
                    <el-menu
                            router
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                        <el-menu-item v-for="item in $router.options.routes[4].children" :index="item.path">
                            <i class="el-icon-document"></i>
                            <span>
                                {{item.name}}
                            </span>
                        </el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>场地管理</span>
                            </template>
                            <el-menu-item v-for="item in $router.options.routes[3].children" :index="item.path">
                                {{item.name}}
                            </el-menu-item>

                        </el-submenu>

                        <el-submenu index="5">
                            <template slot="title">
                                <i class="el-icon-setting"></i>
                                <span slot="title">器材管理</span>
                            </template>
                            <el-menu-item v-for="item in $router.options.routes[2].children" :index="item.path">
                                {{item.name}}
                            </el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-col>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                activeIndex: '1',
            }
        },
        methods: {
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
        border-radius: 5px;
        height: 150px;
    }

    .el-main{
        border-radius: 5px;
        height: 600px;
    }

    .el-row{
        color: white;
    }

    a{
        color: white;
        text-decoration: none;
    }
</style>
