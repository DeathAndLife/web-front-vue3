<template>
    <element-border animation="top" :height="350">
        <p class="p-component">当月行驶里程</p>
        <el-row>
            <el-col id="VehicleMileageMonthChart" style="height: 320px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {bar} from "@/assets/js/chart";
import {getMonthMileageChart} from "@/api/consumer-http";

export default {
    name: "VehicleMileageMonthChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(21, 1000, 900)],
            color: ["yellow"],
            unit: ["日期(天)", "里程/km"],
            title: ["当日消耗"],
            x: this.$util.utilXDate("day"),
        }
    },
    mounted() {
        this.initData();
    },
    methods: {
        async initData() {
           try {
               let data = [];
               let x = [];
               let result = await getMonthMileageChart();
               for (let i = 0; i < result.data.length; i++) {
                   data[i] = result.data[i].num;
                   x[i] = result.data[i].data_month_day;
               }
               this.data[0] = data;
               this.x = x;
               this.drawLine();
           } catch (e) {
               this.drawLine();
           }
        },
        drawLine() {
            let chart = this.$chart.init(document.getElementById("VehicleMileageMonthChart"));
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
