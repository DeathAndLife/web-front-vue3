<template>
    <element-border :height="230" id="SaleHydrogenMonthChart"></element-border>
</template>

<script>
import {line} from "@/assets/js/chart";
import {getSaleHydrogenMonth} from "@/api/consumer-http";

export default {
    name: "SaleHydrogenMonthChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(31, 5000, 100)],
            color: ["white"],
            title: ["当月"],
            unit: ["日期", "售氢量/kg"],
            x: this.$util.utilXDate("month")
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let result = await getSaleHydrogenMonth();
                let data = result.data;
                this.data = [data.value];
                this.x = data.date;
                this.drawLine();
            } catch (e) {
                this.data = [this.$util.utilDataCalculation(31, 5000, 100)];
                this.x = this.$util.utilXDate("month");
                this.drawLine();
            }
        },
        drawLine() {
            let chart = this.$chart.init(document.getElementById("SaleHydrogenMonthChart"));
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
