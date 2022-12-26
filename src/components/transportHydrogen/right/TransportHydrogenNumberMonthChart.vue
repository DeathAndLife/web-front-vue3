chart<template>
    <element-border animation="top" :height="230" style="margin-top: 10px">
        <p class="p-component">当日运氢车次(近一月)</p>
        <el-row>
            <el-col id="TransportHydrogenNumberMonthChart" style="height: 170px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {bar} from "@/assets/js/chart";
import {
    getTransportHydrogenCarsMonth,
} from "@/api/consumer-http";

export default {
    name: "TransportHydrogenNumberMonthChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(21, 100, 1)],
            color: ["yellow"],
            unit: ["日期(月)", "运氢车次"],
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
                let result = await getTransportHydrogenCarsMonth();
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
            let chart = this.$chart.init(document.getElementById("TransportHydrogenNumberMonthChart"));
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
