<template>
    <element-border :height="400">
        <element-border :height="80">
            <el-row>
                <el-col :span="12">
                    <p class="p-component">故障信息:</p>
                </el-col>
                <el-col :span="12">
                    <p class="p-component font-number">{{ alarm }}</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <p class="p-component">氢气泄露:</p>
                </el-col>
                <el-col :span="12">
                    <p class="p-component font-number">{{ leak }}</p>
                </el-col>
            </el-row>
        </element-border>
        <el-row>
            <el-col id="FillHydrogenStationSecondAlarmPieChart" style="height: 320px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {pie} from "@/assets/js/chart";
import {getFaultLeakageHydrogenRatioByIdOfFillById} from "@/api/consumer-http";

export default {
    name: "FillHydrogenStationSecondAlarmPieChart",
    data() {
        return {
            data: [0, 0],
            color: ["aqua", "#fc5a25"],
            title: ["剩余储氢量", "今日已售"],
            unit: "kg",
            alarm: 0,
            leak: 0,
            id: this.$route.params.id
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let result = await getFaultLeakageHydrogenRatioByIdOfFillById(this.id)
                let data = result.data;
                this.leak = data.h_leak;
                this.alarm = data.alarm;
                this.data = [data.chart.remain, data.chart.sale];
                this.drawLine();
            } catch (e) {
                this.drawLine();
            }
        },
        drawLine() {
            let chart = this.$chart.init(document.getElementById("FillHydrogenStationSecondAlarmPieChart"));
            pie(chart, this.data, this.color, this.title, this.unit);
            setTimeout(() => {
                window.onresize = () => {
                    chart.resize();
                };
            }, 200);
        }
    }
}
</script>

<style scoped>

</style>
