<template>
    <element-border :height="80" class="box">
        <el-row>
            <el-col :span="6">
                <el-row>
                    <el-col>
                        <p class="p-component">当日加氢总量</p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <p class="t-gold-number p-component">{{ dayFill }}<span>kg</span></p>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="6">
                <el-row>
                    <el-col>
                        <p class="p-component">当月加氢总量</p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <p class="t-gold-number p-component">{{ monthFill }}<span>kg</span></p>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="6">
                <el-row>
                    <el-col>
                        <p class="p-component">当月储氢总量</p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <p class="t-gold-number p-component">{{ monthRemain }}<span>kg</span></p>
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
import {getFillHydrogenDayMonthAndRemainAndAlarm} from "@/api/consumer-http";

export default {
    name: "FillHydrogenAmountSaveAlarm",
    data() {
        return {
            dayFill: 0,
            monthFill: 0,
            monthRemain: 0,
            alarm: 0
        }
    },
    mounted() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let result = await getFillHydrogenDayMonthAndRemainAndAlarm();
                let data = result.data;
                this.dayFill = data.day_fill;
                this.monthFill = data.month_fill;
                this.monthRemain = data.month_remain;
                this.alarm = data.alarm;
            } catch (e) {
                this.dayFill = 0;
                this.monthFill = 0;
                this.monthRemain = 0;
                this.alarm = 0;
            }
        },
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
