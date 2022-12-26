<template>
    <element-border :height="230" id="TransportHydrogenDayChart"></element-border>
</template>

<script>
import {bar, barAndLine} from "@/assets/js/chart";
import {getCarrierMonitorHyDay, getCarrierMonitorHyMouth, getWeightSumForFill} from "@/api/consumer-http";

export default {
    name: "TransportHydrogenDayChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(31, 500, 100), this.$util.utilDataCalculation(31, 500, 500)],
            color: ["aqua", "purple"],
            title: ["当日", "当月"],
            unit: ["日期", "运氢量/kg"],
            x: this.$util.utilXDate("day")
        }
    },
    mounted() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let data = [[],[]];
                let x = [];
                let day = await getCarrierMonitorHyDay();
                let month = await getCarrierMonitorHyMouth();
                for (let i = 0; i < day.data.length; i++) {
                    data[0].push(parseInt(day.data[i].data).toFixed(1));
                    x.push(day.data[i].time);
                }
                for (let i = 0; i < month.data.length; i++) {
                    // data[1].push(parseInt(month.data[i].data).toFixed(1));
                    data[1].push(parseInt(month.data[i].data).toFixed(1));
                }
                this.data = data;
                this.x = x;
                this.drawLine();
            } catch (e) {
                this.drawLine();
            }
        },
        drawLine() {
            let chart = this.$chart.init(document.getElementById("TransportHydrogenDayChart"));
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
