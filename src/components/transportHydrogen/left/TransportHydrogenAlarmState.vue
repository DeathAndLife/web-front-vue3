<template>
    <element-border animation="top" class="alarm-border margin-top-20" :height="230">
        <p class="p-component">报警状态</p>
        <div v-show="getterAlarmDataByTransport.length > 0">
            <el-scrollbar height="180px" :always="false" ref="srcTransport">
                <div ref="scrContentBoxTransport" @mouseover="pauseScr()" @mouseout="startScroll()">
                    <el-timeline>
                        <el-timeline-item
                            v-for="item in getterAlarmDataByTransport"
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
        <div v-show="getterAlarmDataByTransport.length <= 0">
            <p class="t-green p-component">无</p>
        </div>
    </element-border>
</template>

<script>
import {mapGetters} from "vuex";
import {alarmHandler} from "@/assets/js/alarmHandler";

export default {
    name: "TransportHydrogenAlarmState",
    data() {
        return {
            timeoutId: null,
            interVal: null,
            step: 0,
            maxHeight: 0,
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
                this.maxHeight = (this.$refs.scrContentBoxTransport.offsetHeight - 170);
                this.interVal = setInterval(() => {
                    if (this.step >= this.maxHeight) {
                        this.step = 0;
                    }
                    this.$refs.srcTransport.setScrollTop(this.step += 1)
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
        ...mapGetters(["getterAlarmDataByTransport"]),
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
