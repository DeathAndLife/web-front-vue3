<template>
    <element-border animation="top" :height="180" id="HydrogenDayMonthYearPieChart" style="padding-top: 10px"></element-border>
</template>

<script>
import {carDistribution, pie} from "@/assets/js/chart";
import {getUseHydrogenStatistical} from "@/api/consumer-http";

export default {
    name: "HydrogenDayMonthYearPieChart",
    data() {
        return {
            data: [0, 0, 0],
            name: ['本日用氢量', '本月用氢量', '本年用氢量'],
            color: ['#FC4567', '#2F8DF4', '#C25EC4']
        }
    },
    mounted() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let result = await getUseHydrogenStatistical();
                let data = result.data;
                this.data = [data.day, data.month, data.year];
                this.drawLine();
            } catch (e) {
                this.drawLine();
            }
        },
        drawLine() {
            let chart = this.$chart.init(document.getElementById("HydrogenDayMonthYearPieChart"));
            carDistribution(chart, this.data, this.color, this.name,"kg");
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
