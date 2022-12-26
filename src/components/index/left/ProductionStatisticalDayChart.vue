<template>
    <element-border animation="top" :height="180" id="ProductionStatisticalDayChart"></element-border>
</template>

<script>
import {bar} from "@/assets/js/chart";
import {getMakeHydrogenStatisticalDay} from "@/api/consumer-http";

export default {
    name: "ProductionStatisticalDayChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(31, 1000, 900)],
            color: ["aqua"],
            unit: ["日期(日)", "制氢量/kg"],
            title: ["当日"],
            x: this.$util.utilXDate("day"),
        }
    },
    mounted() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let result = await getMakeHydrogenStatisticalDay();
                let data = result.data;
                this.data = [data.value];
                this.x = data.date;
                this.drawLine();
            } catch (e) {
                this.drawLine();
            }
        },
        drawLine() {
            let chart = this.$chart.init(document.getElementById("ProductionStatisticalDayChart"));
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
