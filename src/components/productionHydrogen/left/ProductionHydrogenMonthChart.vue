<template>
    <element-border animation="top" :height="230" style="margin-top: 15px">
        <p class="p-component">每月制氢量</p>
        <el-row>
            <el-col id="ProductionHydrogenMonthChart" style="height: 190px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {bar} from "@/assets/js/chart";
import {getMakeHydrogenMonth} from "@/api/consumer-http";

export default {
    name: "ProductionHydrogenMonthChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(21, 1000, 900)],
            color: ["yellow"],
            unit: ["日期(月)", "制氢量/kg"],
            title: ["当月"],
            x: this.$util.utilXDate("month"),
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let result = await getMakeHydrogenMonth();
                this.data[0] = result.data.value;
                this.x = result.data.date;
                this.drawLine();
            } catch (e) {
                this.data = [this.$util.utilDataCalculation(21, 1000, 900)];
                this.x = this.$util.utilXDate("month");
                this.drawLine();
            }
        },
        drawLine() {
            let chart = this.$chart.init(document.getElementById("ProductionHydrogenMonthChart"));
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
