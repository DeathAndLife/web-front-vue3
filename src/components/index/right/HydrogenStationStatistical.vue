<template>
    <element-border animation="top" :height="160">
        <p class="p-component">加氢站监控</p>
        <el-row>
            <el-col :span="8">
                <p class="p-component">本日加氢量</p>
            </el-col>
            <el-col :span="16">
                <p class="font-number p-right">{{ dayAddHydrogen }}<span>kg</span></p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <p class="p-component">本月加氢量</p>
            </el-col>
            <el-col :span="16">
                <p class="font-number p-right">{{ monthAddHydrogen }}<span>kg</span></p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <p class="p-component">本年加氢量</p>
            </el-col>
            <el-col :span="16">
                <p class="font-number p-right">{{ yearAddHydrogen }}<span>kg</span></p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>

import {getFillHydrogenDayMonthYear} from "@/api/consumer-http";

export default {
    name: "HydrogenStationStatistical",
    data() {
        return {
            dayAddHydrogen: 0,
            monthAddHydrogen: 0,
            yearAddHydrogen: 0
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let result = await getFillHydrogenDayMonthYear();
                let data = result.data;
                this.dayAddHydrogen = data.day;
                this.monthAddHydrogen = data.month;
                this.yearAddHydrogen = data.year;
            } catch (e) {
                this.dayAddHydrogen = 0;
                this.monthAddHydrogen = 0;
                this.yearAddHydrogen = 0;
            }
        }
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
