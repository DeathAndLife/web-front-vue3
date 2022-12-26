<template>
    <element-border :height="80">
        <el-row>
            <el-col :span="4">
                <p class="p-component">当日加氢量</p>
            </el-col>
            <el-col :span="4">
                <p class="p-component">当月加氢量</p>
            </el-col>
            <el-col :span="4">
                <p class="p-component">累计加氢量</p>
            </el-col>
            <el-col :span="4">
                <p class="p-component">今日加氢次数</p>
            </el-col>
            <el-col :span="4">
                <p class="p-component">当前储氢量</p>
            </el-col>
            <el-col :span="4">
                <p class="p-component">整体安全等级</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4">
                <p class="p-component t-gold-number">{{ dayFill }} <span>kg</span></p>
            </el-col>
            <el-col :span="4">
                <p class="p-component t-gold-number">{{ monthFill }} <span>kg</span></p>
            </el-col>
            <el-col :span="4">
                <p class="p-component t-gold-number">{{ countFill }} <span>kg</span></p>
            </el-col>
            <el-col :span="4">
                <p class="p-component t-gold-number">{{ dayFills }} <span>次</span></p>
            </el-col>
            <el-col :span="4">
                <p class="p-component t-gold-number">{{ remain }} <span>kg</span></p>
            </el-col>
            <el-col :span="4">
                <p class="p-component t-gold-number">{{ safetyLevel }}</p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
import {getFillAndRemainAndSafetyById} from "@/api/consumer-http";

export default {
    name: "FillHydrogenStationSecondData",
    data() {
        return {
            dayFill: 0,
            monthFill: 0,
            countFill: 0,
            dayFills: 0,
            remain: 0,
            safetyLevel: 0,
            id: this.$route.params.id
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let result = await getFillAndRemainAndSafetyById(this.id);
                let data = result.data;
                this.dayFill = data.day_fill;
                this.monthFill = data.month_fill;
                this.countFill = data.count_fill;
                this.dayFills = data.fills;
                this.remain = data.remain;
                this.safetyLevel = data.safety_level;
            } catch (e) {
                this.dayFill = 0;
                this.monthFill = 0;
                this.countFill = 0;
                this.dayFills = 0;
                this.remain = 0;
                this.safetyLevel = 0;
            }
        }
    }
}
</script>

<style scoped>

</style>
