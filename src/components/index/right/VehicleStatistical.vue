<template>
    <element-border animation="top" :height="160">
        <p class="p-component">车辆监控</p>
        <el-row>
            <el-col :span="7">
                <p class="p-component">接入车辆</p>
            </el-col>
            <el-col :span="17">
                <p class="font-number p-right">{{ carCount }} <span>辆</span></p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="7">
                <p class="p-component">在线车辆</p>
            </el-col>
            <el-col :span="17">
                <p class="font-number p-right">{{ carOnline }} <span>辆</span></p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="7">
                <p class="p-component">车辆报警</p>
            </el-col>
            <el-col :span="17">
                <p class="p-right alarm-text">{{ carAlarm }} <span>次</span></p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
import {mapState, mapGetters} from "vuex"
import {getCarCount, getOnlineCarCount} from "@/api/consumer-http";

export default {
    name: "VehicleStatistical",
    data() {
        return {
            carCount: 0,
            carOnline: 0,
            carAlarm: 0
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            let carCount = await getCarCount();
            let carOnlineCount = await getOnlineCarCount();
            this.carCount = carCount.data;
            this.carOnline = carOnlineCount.data;
            this.carAlarm = this.getterAlarmDataByVehicleCount;
        }
    },
    computed: {
        ...mapState(["stateTopNavData"]),
        ...mapGetters(["getterAlarmDataByVehicleCount"]),
    }
}
</script>

<style scoped>
.p-right {
    font-size: 18px;
    height: auto;
    line-height: 40px;
    text-align: right;
    word-break: break-all;
    padding-right: 1rem;
}
</style>
