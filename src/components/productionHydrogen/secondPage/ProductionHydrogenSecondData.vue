<template>
    <element-border :height="80">
        <el-row>
            <el-col :span="4">
                <p class="p-component">当日产氢量</p>
            </el-col>
            <el-col :span="4">
                <p class="p-component">当月产氢量</p>
            </el-col>
            <el-col :span="4">
                <p class="p-component">累计产氢量</p>
            </el-col>
            <el-col :span="4">
                <p class="p-component">今日运氢次数</p>
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
                <p class="p-component t-gold-number">{{ dayMake }} <span>kg</span></p>
            </el-col>
            <el-col :span="4">
                <p class="p-component t-gold-number">{{ monthMake }} <span>kg</span></p>
            </el-col>
            <el-col :span="4">
                <p class="p-component t-gold-number">{{ countMake }} <span>kg</span></p>
            </el-col>
            <el-col :span="4">
                <p class="p-component t-gold-number">{{ countTransport }} <span>次</span></p>
            </el-col>
            <el-col :span="4">
                <p class="p-component t-gold-number">{{ save }} <span>kg</span></p>
            </el-col>
            <el-col :span="4">
                <p class="p-component t-gold-number">{{ safetyLevel }}</p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
import {getMakeTransportSaveSafetyById} from "@/api/consumer-http";

export default {
    name: "ProductionHydrogenSecondData",
    data() {
        return {
            dayMake: 0,
            monthMake: 0,
            countMake: 0,
            countTransport: 0,
            save: 0,
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
                let result = await getMakeTransportSaveSafetyById(this.id);
                let data = result.data;
                this.safetyLevel = data.safety_level;
                this.dayMake = data.day_make;
                this.monthMake = data.month_make;
                this.countTransport = data.transport_count;
                this.countMake = data.count_make;
                this.save = data.save;
            } catch (e) {
                this.safetyLevel = 0;
                this.dayMake = 0;
                this.monthMake = 0;
                this.countTransport = 0;
                this.countMake = 0;
                this.save = 0;
            }
        }
    }
}
</script>

<style scoped>

</style>
