<template>
    <element-border animation="top" :height="180" id="HydrogenStationDayMonthChart"></element-border>
</template>

<script>
import {barAndLine} from "@/assets/js/chart";
import {getWeightSum} from "@/api/consumer-http";

export default {
    name: "HydrogenStationDayMonthChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(31, 500, 100)],
            color: ["yellow"],
            title: ["当日"],
            unit: ["日期", "加氢量/kg"],
            x: this.$util.utilXDate("day")
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
                let result = await getWeightSum();
                for (let i = 0; i < result.data.length; i++) {
                    data[0].push(result.data[i].sum);
                    x.push(result.data[i].date)
                }
                this.data = data;
                this.x = x;
                this.drawLine();
            } catch (e) {
                this.drawLine();
            }
        },
        drawLine() {
            let chart = this.$chart.init(document.getElementById("HydrogenStationDayMonthChart"));
            barAndLine(chart, this.x, this.data, this.color, this.title, this.unit);
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
