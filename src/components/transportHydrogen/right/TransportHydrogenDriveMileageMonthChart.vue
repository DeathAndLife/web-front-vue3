<template>
    <element-border animation="top" :height="230" style="margin-top: 20px">
        <p class="p-component">当日行驶距离(近一月) km</p>
        <el-row>
            <el-col id="TransportHydrogenDriveMileageMonthChart" style="height: 190px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {bar} from "@/assets/js/chart";
import {getTransportHydrogenDriveMileage} from "@/api/consumer-http";

export default {
    name: "TransportHydrogenDriveMileageMonthChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(21, 1000, 200)],
            color: ["orange"],
            unit: ["日期(月)", "距离/km"],
            title: ["当日"],
            x: this.$util.utilXDate("day"),
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let result = await getTransportHydrogenDriveMileage();
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
            let chart = this.$chart.init(document.getElementById("TransportHydrogenDriveMileageMonthChart"));
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
