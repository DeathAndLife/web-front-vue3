<template>
    <element-border :height="230">
        <p class="p-component">当月累计碳减排</p>
        <el-row>
            <el-col id="VehicleCarbonReduceMonthChart" style="height: 190px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {line} from "@/assets/js/chart";
import {getMonthCarbonReduceChart} from "@/api/consumer-http";

export default {
    name: "VehicleCarbonReduceMonthChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(31, 100, 0)],
            color: ["green"],
            title: ["当日统计"],
            unit: ["日期(天)", "单位/kg"],
            x: this.$util.utilXDate("day")
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
           try {
               let data = [];
               let x = [];
               let result = await getMonthCarbonReduceChart();
               if (result.data.length > 0) {
                   for (let i = 0; i < result.data.length; i++) {
                       data.push(result.data[i].num);
                       x.push(result.data[i].data_month_day)
                   }
                   this.data[0] = data;
                   this.x = x;
               }
               this.drawLine();
           } catch (e) {
               this.drawLine();
           }
        },
        drawLine() {
            let chart = this.$chart.init(document.getElementById("VehicleCarbonReduceMonthChart"));
            line(chart, this.x, this.data, this.color, this.title, this.unit);
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

