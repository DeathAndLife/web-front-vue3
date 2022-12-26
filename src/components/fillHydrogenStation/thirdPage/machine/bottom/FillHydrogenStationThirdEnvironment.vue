<template>
    <element-border :height="490">
        <p class="title-border-aqua env-title">环境信息</p>
        <el-row>
            <el-col :span="12">
                <p class="p-left">环境温度</p>
            </el-col>
            <el-col :span="12">
                <p class="p-left t-green">{{ temp }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-left">环境湿度</p>
            </el-col>
            <el-col :span="12">
                <p class="p-left t-green">{{ humidity }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-left">环境压力</p>
            </el-col>
            <el-col :span="12">
                <p class="p-left t-green">{{ pressure }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-left">加氢时长</p>
            </el-col>
            <el-col :span="12">
                <p class="p-left t-green">{{ fillTime }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-left">加注起始压力</p>
            </el-col>
            <el-col :span="12">
                <p class="p-left t-green">{{ startPressure }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-left">加注结束压力</p>
            </el-col>
            <el-col :span="12">
                <p class="p-left t-green">{{ endPressure }}</p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>

import {getFillMachineEnvironmentInformationByIdAndDeviceId} from "@/api/consumer-http";

export default {
    name: "FillHydrogenStationThirdEnvironment",
    data() {
        return {
            temp: 0,
            humidity: 0,
            pressure: 0,
            fillTime: 0,
            startPressure: 0,
            endPressure: 0,
            id: this.$route.params.id
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let result = await getFillMachineEnvironmentInformationByIdAndDeviceId(this.id, 1)
                let data = result.data;
                this.temp = data.temp;
                this.humidity = data.humidity;
                this.pressure = data.pressure;
                this.fillTime = data.fill_time;
                this.startPressure = data.start_pressure;
                this.endPressure = data.end_pressure;
            } catch (e) {
                this.temp = 0;
                this.humidity = 0;
                this.pressure = 0;
                this.fillTime = 0;
                this.startPressure = 0;
                this.endPressure = 0;
            }
        },
    }
}
</script>

<style scoped>
.env-title {
    font-size: 18px;
    height: auto;
    line-height: 100px;
    text-align: center;
    word-break: break-all;
}

.p-left {
    font-size: 18px;
    height: auto;
    line-height: 60px;
    text-align: left;
    word-break: break-all;
    padding-left: 1rem;
    border-bottom: 1px dashed white;
}
</style>
