<template>
    <element-border animation="top" :height="160">
        <p class="p-component">运氢车监控(kg)</p>
        <el-row>
            <el-col :span="6">
                <p class="p-component">本日运氢量</p>
            </el-col>
            <el-col :span="6">
                <p class="font-number p-component">{{dayTransport}}</p>
            </el-col>
            <el-col :span="6">
                <p class="p-component">本日报警次数</p>
            </el-col>
            <el-col :span="6">
                <p class="font-number p-component">{{dayAlarm}}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <p class="p-component">本月运氢量</p>
            </el-col>
            <el-col :span="6">
                <p class="font-number p-component">{{monthTransport}}</p>
            </el-col>
            <el-col :span="6">
                <p class="p-component">本月报警次数</p>
            </el-col>
            <el-col :span="6">
                <p class="font-number p-component">{{monthAlarm}}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <p class="p-component">本年运氢量 </p>
            </el-col>
            <el-col :span="6">
                <p class="font-number p-component">{{yearTransport}}</p>
            </el-col>
            <el-col :span="6">
                <p class="p-component">本年报警次数</p>
            </el-col>
            <el-col :span="6">
                <p class="font-number p-component">{{yearAlarm}}</p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>

import {getCarrierMonitorAboveList} from "@/api/consumer-http";

export default {
    name: "TransportStatistical",
    data() {
        return {
            dayTransport: 0,
            monthTransport: 0,
            yearTransport: 0,
            dayAlarm: 0,
            monthAlarm: 0,
            yearAlarm: 0
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let result = await getCarrierMonitorAboveList();
                let data = result.data;
                this.dayTransport = parseInt(data[0].hyWeight).toFixed(0);
                this.dayAlarm = data[0].alarm;
                this.monthTransport = parseInt(data[1].hyWeight).toFixed(0);
                this.monthAlarm = data[1].alarm;
                this.yearTransport = parseInt(data[2].hyWeight).toFixed(0);
                this.yearAlarm = data[2].alarm;
            } catch (e) {
                this.dayTransport = 0;
                this.dayAlarm = 0;
                this.monthTransport = 0;
                this.monthAlarm = 0;
                this.yearTransport = 0;
                this.yearAlarm = 0;
            }
        }
    }
}
</script>

<style scoped>
</style>
