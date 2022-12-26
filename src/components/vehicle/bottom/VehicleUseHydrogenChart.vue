<template>
    <element-border :height="230">
        <p class="p-component">氢气消耗统计</p>
        <el-row>
            <el-col id="VehicleUseHydrogenChart" style="height: 190px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {bar} from "@/assets/js/chart";
import {getMonthHydrogenConsume} from "@/api/consumer-http";

export default {
    name: "VehicleUseHydrogenChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(21, 1000, 900)],
            color: ["aqua"],
            unit: ["日期(天)", "单位/kg"],
            title: ["当月"],
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
                let result = await getMonthHydrogenConsume();
                for (let i = 0; i < result.data.length; i++) {
                    data[i] = result.data[i].h2consumer / 100;
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
            let chart = this.$chart.init(document.getElementById("VehicleUseHydrogenChart"));
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
