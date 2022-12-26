<template>
    <element-border animation="top" :height="230" style="margin-top: 15px">
        <p class="p-component">每月加氢量</p>
        <el-row>
            <el-col id="FillHydrogenMonthChart" style="height: 190px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {bar} from "@/assets/js/chart";
import {getWeightSumForFillMonth} from "@/api/consumer-http";

export default {
    name: "FillHydrogenMonthChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(21, 1000, 900)],
            color: ["yellow"],
            unit: ["日期(月)", "加氢量/kg"],
            title: ["加氢量"],
            x: this.$util.utilXDate("day"),
        }
    },
    mounted() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let data = [[]];
                let x = [];
                let result = await getWeightSumForFillMonth();
                for (let i = 0; i < result.data.length; i++) {
                    data[0].push(result.data[i].h2Consume);
                    x.push(result.data[i].date)
                }
                this.data = data;
                this.x = x;
                this.drawLine();
            } catch (e) {
                this.data = [this.$util.utilDataCalculation(21, 1000, 900)];
                this.x = this.$util.utilXDate("day");
                this.drawLine();
            }
        },
        drawLine() {
            let chart = this.$chart.init(document.getElementById("FillHydrogenMonthChart"));
            bar(chart, this.x, this.data, this.color, this.title, this.unit);
            setTimeout(() => {
                window.onresize = () => {
                    chart.resize();
                };
            }, 200);
        },
    },
}
</script>

<style scoped>
</style>
