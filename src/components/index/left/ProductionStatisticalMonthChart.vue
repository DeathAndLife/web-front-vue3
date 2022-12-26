<template>
    <element-border animation="top" :height="180" id="ProductionStatisticalMonthChart"></element-border>
</template>

<script>
import {bar} from "@/assets/js/chart";
import {getMakeHydrogenStatisticalMonth} from "@/api/consumer-http";

export default {
    name: "ProductionStatisticalMonthChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(31, 1000 * 30, 900)],
            color: ["yellow"],
            unit: ["日期(月)", "制氢量/kg"],
            title: ["当月"],
            x: this.$util.utilXDate("month"),
        }
    },
    mounted() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let result = await getMakeHydrogenStatisticalMonth();
                let data = result.data;
                this.data = [data.value];
                this.x = data.date;
                this.drawLine();
            } catch (e) {
                this.data = [this.$util.utilDataCalculation(31, 1000, 900)];
                this.x = this.$util.utilXDate("day");
                this.drawLine();
            }
        },
        drawLine() {
            let chart = this.$chart.init(document.getElementById("ProductionStatisticalMonthChart"));
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
