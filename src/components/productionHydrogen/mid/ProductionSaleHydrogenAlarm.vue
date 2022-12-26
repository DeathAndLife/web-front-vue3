<template>
    <element-border :height="80" class="box">
        <el-row>
            <el-col :span="6">
                <el-row>
                    <el-col>
                        <p class="p-component">当日制氢总量</p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <p class="t-gold-number p-component">{{ dayMake }}<span>kg</span></p>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="6">
                <el-row>
                    <el-col>
                        <p class="p-component">当月制氢总量</p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <p class="t-gold-number p-component">{{ monthMake }}<span>kg</span></p>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="6">
                <el-row>
                    <el-col>
                        <p class="p-component">当月销售总量</p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <p class="t-gold-number p-component">{{ monthSale }}<span>kg</span></p>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="6">
                <el-row>
                    <el-col>
                        <p class="p-component">当前故障报警</p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <p class="t-gold-number p-component">{{ alarm }}</p>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
import {getMakeSaleAlarmStatistical} from "@/api/consumer-http";

export default {
    name: "ProductionSaleHydrogenAlarm",
    data() {
        return {
            dayMake: 0,
            monthMake: 0,
            monthSale: 0,
            alarm: 0,
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let result = await getMakeSaleAlarmStatistical();
                let data = result.data;
                this.dayMake = data.day_make;
                this.monthSale = data.month_sale;
                this.monthMake = data.month_make;
                this.alarm = data.alarm;
            } catch (e) {
                this.dayMake = 0;
                this.monthMake = 0;
                this.monthSale = 0;
                this.alarm = 0;
            }
        }
    }
}
</script>

<style scoped>
p {
    font-size: 18px;
    height: 40px;
    line-height: 40px;
    text-align: center;
}

.box {
    width: 98%;
    margin-left: 1%;
}
</style>
