<template>
    <element-border animation="top" :height="230" style="margin-right: 10px;margin-top: 20px" id="TransportHydrogenDriveTimeChart"></element-border>
</template>

<script>
import {line} from "@/assets/js/chart";
import {getTransportHydrogenDriveTime} from "@/api/consumer-http";

export default {
    name: "TransportHydrogenDriveTimeChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(31, 5000, 100)],
            color: ["white"],
            title: ["当日"],
            unit: ["日期", "行驶时间/h"],
            x: this.$util.utilXDate("day")
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let result = await getTransportHydrogenDriveTime();
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
            let chart = this.$chart.init(document.getElementById("TransportHydrogenDriveTimeChart"));
            line(chart, this.x, this.data, this.color, this.title, this.unit);
            setTimeout(() => {
                window.onresize = () => {
                    chart.resize();
                };
            }, 200);
        },
    }
}
</script>

<style scoped>

</style>
