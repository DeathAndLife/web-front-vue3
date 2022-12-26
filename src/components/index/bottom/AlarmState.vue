<template>
    <element-border class="alarm-border" :height="230">
        <p class="p-component">报警状态</p>
        <div v-show="getterAlarmDataStateList.length > 0">
            <el-scrollbar height="180px" :always="false" ref="scr">
                <div ref="scrContentBox" @mouseover="pauseScr()" @mouseout="startScroll()">
                    <el-timeline>
                        <el-timeline-item
                            v-for="item in getterAlarmDataStateList"
                            :key="item.id"
                            color="white"
                            :timestamp="$util.dateFormat(item.id)">
                            <el-alert
                                @close="alertCloseHandler(item.id)"
                                class="alarm"
                                :title=item.level
                                type="error"
                                :description=item.message>
                            </el-alert>
                        </el-timeline-item>
                    </el-timeline>
                </div>
            </el-scrollbar>
        </div>
        <div v-show="getterAlarmDataStateList.length <= 0">
            <p class="t-green p-component">无</p>
        </div>
    </element-border>
</template>

<script>
import {mapGetters} from "vuex";
import {alarmHandler} from "@/assets/js/alarmHandler";

export default {
    name: "AlarmState",
    data() {
        return {
            timeoutId: null,
            interVal: null,
            step: 0,
            maxHeight: 0,
            alarmList: [
                {
                    id: 0,
                    level: "故障等级:一级",
                    message: "类型:阈值报警 目标:10003-2000172",
                },
                {
                    id: 1,
                    level: "故障等级:二级",
                    message: "类型:阈值报警 目标:10003-2000172",
                },
                {
                    id: 2,
                    level: "故障等级:三级",
                    message: "类型:阈值报警 目标:10003-2000172",
                },
                {
                    id: 3,
                    level: "故障等级:四级",
                    message: "类型:阈值报警 目标:10003-2000172",
                }
            ]
        }
    },
    mounted() {
        this.startScroll();
    },
    methods: {
        alertCloseHandler(alarmId) {
            alarmHandler(alarmId);
        },
        startScroll() {
            this.timeoutId = setTimeout(() => {
                this.maxHeight = (this.$refs.scrContentBox.offsetHeight - 170);
                this.interVal = setInterval(() => {
                    if (this.step >= this.maxHeight) {
                        this.step = 0;
                    }
                    this.$refs.scr.setScrollTop(this.step += 1)
                }, 50)
            }, 1000)
        },
        pauseScr() {
            this.clearInterval();
        },
        clearInterval() {
            clearInterval(this.interVal);
            clearTimeout(this.timeoutId)
        }
    },
    computed: {
        ...mapGetters(["getterAlarmDataStateList"]),
    },
    unmounted() {
        this.clearInterval();
    }
}
</script>

<style scoped>
.alarm {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    margin-bottom: 5px;
    width: 90%;
    position: relative;
    margin-left: 5%;
}
</style>
