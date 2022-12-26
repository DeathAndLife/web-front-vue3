<template>
    <el-row class="margin-top-10">
        <el-col :span="6">
            <transition name="el-fade-in" :appear=true>
                <el-image
                    style="width: 80%; height: 80%;"
                    :src=logo
                    :fit="fit"></el-image>
            </transition>
        </el-col>
        <el-col :span="2" :offset="1">
            <router-link to="/index">
                <p class="nav-p">全链</p>
            </router-link>
        </el-col>
        <el-col :span="2" class="t-center">
            <router-link to="/production">
                <p class="nav-p">制氢</p>
            </router-link>
        </el-col>
        <el-col :span="2">
            <router-link to="/transport">
                <p class="nav-p">运氢</p>
            </router-link>
        </el-col>
        <el-col :span="2">
            <router-link to="/fill">
                <p class="nav-p">加氢</p>
            </router-link>
        </el-col>
        <el-col :span="2">
            <router-link to="/vehicle">
                <p class="nav-p">燃料电池车</p>
            </router-link>
        </el-col>
        <el-col :span="1" :offset="1">
            <transition name="el-fade-in" :appear=true>
                <el-image
                    @click="goBackHandler()"
                    style="width: 50%; height: 70%;"
                    :src="goBack"
                    :fit="fit">
                </el-image>
            </transition>
        </el-col>
        <el-col :span="1">
            <transition name="el-fade-in" :appear=true>
                <el-image
                    @click="handlerAlarmShow()"
                    style="width: 100%; height: 65%;"
                    :src="svg"
                    :fit="fit">
                </el-image>
            </transition>
        </el-col>
        <el-col :span="4" class="nav-p">
            <p class="date-text">{{ date }}</p>
        </el-col>
        <top-nav-alarm />
        <div class="goBack"></div>
    </el-row>
</template>

<script>
import {mapMutations} from "vuex"
import navAlarm from "@/assets/svg/nav-alarm.svg"
import logo from '@/assets/img/logo/tsinghua.png'
import goBack from "@/assets/svg/goBack.svg"
import TopNavAlarm from "@/components/public/topNav/TopNavAlarm";

export default {
    name: "TopNav",
    components: {TopNavAlarm},
    data() {
        return {
            fit: "scale-down",
            date: "2021年8月21日16时5分32秒",
            svg: navAlarm,
            goBack: goBack,
            logo: logo,
        }
    },
    mounted() {
        this.navDate();
    },
    methods: {
        ...mapMutations(["mutationTopNavDataAlarmVisible"]),
        navDate() {
            this.date = this.$util.navDate();
            setInterval(() => {
                this.date = this.$util.navDate();
            }, 1000);
        },
        handlerAlarmShow() {
            this.mutationTopNavDataAlarmVisible();
        },
        goBackHandler() {
            this.$router.go(-1);
        }
    },
}
</script>

<style scoped>
.nav-p {
    font-size: 22px;
    line-height: 60px;
    text-align: center;
}

.date-text {
    font-size: 22px;
    font-family: "Number", serif;
    color: aqua;
}

.router-link-active {
    display: block;
    border-bottom: 2px solid skyblue;
}
</style>
