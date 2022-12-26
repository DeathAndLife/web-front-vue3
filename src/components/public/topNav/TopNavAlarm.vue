<template>
    <div :class="alarmShow() === true ? 'box' : ''">
        <transition name="el-zoom-in-top" :appear=true>
            <div class="alarm-information-box" v-if="alarmShow()">
                <el-row class="title-border-aqua">
                    <el-col :span="16" :offset="4">
                        <p class="nav-p">故障报警信息</p>
                    </el-col>
                    <el-col :span="4">
                        <el-image
                            @click="minWindowHandler()"
                            style="height: 60px;width: 200px;"
                            :src="minWindow"
                            :fit="fit">
                        </el-image>
                    </el-col>
                </el-row>
                <el-row v-if="alarmData.isNull === 1 || alarmData.data.length === 0">
                    <el-col>
                        <p class="p-component font-number">无报警信息</p>
                    </el-col>
                </el-row>
                <div v-else style="overflow:auto;height: 650px;" v-infinite-scroll="alarmDataShowHandler"
                     infinite-scroll-distance="10">
                    <transition-group name="el-fade-in-linear" :appear=true>
                        <div v-for="item in alarmDataShow" :key="item.id">
                            <el-row class="alarm-information-list-border-bottom">
                                <el-col :span="6">
                                    <p class="p-component">故障等级</p>
                                </el-col>
                                <el-col :span="18">
                                    <p class="p-component">{{ item.level }}</p>
                                </el-col>
                            </el-row>
                            <el-row class="alarm-information-list-border-bottom">
                                <el-col :span="6">
                                    <p class="p-component">故障代码</p>
                                </el-col>
                                <el-col :span="18">
                                    <p class="p-component">{{ item.code }}</p>
                                </el-col>
                            </el-row>
                            <el-row class="alarm-information-list-border-bottom">
                                <el-col :span="6">
                                    <p class="p-component">故障消息</p>
                                </el-col>
                                <el-col :span="18">
                                    <p class="p-component">{{ item.message }}</p>
                                </el-col>
                            </el-row>
                            <el-row class="alarm-information-list-border-bottom">
                                <el-col :span="6">
                                    <p class="p-component">故障目标</p>
                                </el-col>
                                <el-col :span="18">
                                    <p class="p-component">{{ item.target }}</p>
                                </el-col>
                            </el-row>
                            <el-row class="alarm-information-list-border-bottom">
                                <el-col :span="6">
                                    <p class="p-component">紧急联系</p>
                                </el-col>
                                <el-col :span="18">
                                    <p class="p-component">{{ item.urgent }}</p>
                                </el-col>
                            </el-row>
                            <el-row class="title-border-aqua">
                                <el-col :span="6">
                                    <div class="t-center">
                                        <el-button type="success" @click="handlerAlarm(item.id)">预警信息已传达</el-button>
                                    </div>
                                </el-col>
                                <el-col :span="18">
                                    <div class="t-center">
                                        <el-button type="warning">报告上传</el-button>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </transition-group>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import {mapActions, mapState, mapMutations} from "vuex";
import {JSONData} from "@/api/websocket-util";
import minWindow from "@/assets/svg/min-window.svg"
import {alarmHandler} from "@/assets/js/alarmHandler";

export default {
    name: "TopNavAlarm",
    data() {
        return {
            fit: "scale-down",
            minWindow: minWindow,
            alarmData: {
                data: [],
                isNull: 0,
            },
            alarmDataShow: [],
            alarmDataShowSlice: 5
        }
    },
    mounted() {
        this.wsHandler();
    },
    computed: {
        ...mapState(["stateTopNavData"]),
    },
    methods: {
        ...mapActions(["actionsAlarmData"]),
        ...mapMutations(["mutationTopNavDataAlarmVisible"]),
        async handlerAlarm(alarmId) {
            alarmHandler(alarmId);
        },
        alarmShow() {
            return this.stateTopNavData.alarmVisible;
        },
        wsHandler() {
            const that = this;
            that.stateTopNavData.ws.onmessage = (data) => {
                let result = JSONData(data);
                if (result.isNull !== 1) {
                    that.alarmData = result;
                }
            }
        },
        alarmDataShowHandler() {
            this.alarmDataShowSlice += 2;
            this.alarmDataShow = this.alarmData.data.slice(0, this.alarmDataShowSlice);
        },
        minWindowHandler() {
            this.mutationTopNavDataAlarmVisible();
        }
    },
    watch: {
        alarmData: {
            async handler(newVal) {
                this.actionsAlarmData(newVal);
                this.alarmDataShow = this.alarmData.data.slice(0, this.alarmDataShowSlice);
            },
            immediate: true,
            deep: true
        }
    }
}
</script>

<style>
.customClass {
    background-color: black;
}
</style>
<style scoped>
.nav-p {
    font-size: 22px;
    line-height: 60px;
    text-align: center;
}

.p-component {
    font-size: 18px;
    height: auto;
    line-height: 80px;
    text-align: center;
    word-break: break-all;
}

.box {
    position: absolute;
    width: 1920px;
    height: 1080px;
    margin-left: -960px;
    left: 50%;
    top: -10px;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9000;
    border-radius: 10px;
}

.alarm-information-box {
    position: absolute;
    width: 1000px;
    height: 600px;
    margin-left: -500px;
    left: 50%;
    top: 150px;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10000;
    border-radius: 10px;
    box-shadow: 0 0 10px aqua;
}

.alarm-information-list-border-bottom {
    border-bottom: 1px solid white;
    background: rgba(0, 0, 0, 0.8);
}

::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.3);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.9);
    -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(62, 142, 163, 0.4);
}
</style>
