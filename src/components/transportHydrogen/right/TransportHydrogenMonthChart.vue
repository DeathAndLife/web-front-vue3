<template>
    <element-border animation="top" :height="240" class="margin-top-10">
        <p class="p-component">当日运氢量(近一月) kg</p>
        <el-row>
            <el-col id="TransportHydrogenMonthChart" style="height: 180px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {line} from "@/assets/js/chart";
import {getTransportHydrogenCountMonth} from "@/api/consumer-http";

export default {
    name: "TransportHydrogenMonthChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(31, 5000, 100)],
            color: ["white"],
            title: ["当日"],
            unit: ["日期", "运氢量/h"],
            x: this.$util.utilXDate("month")
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let result = await getTransportHydrogenCountMonth();
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
            let chart = this.$chart.init(document.getElementById("TransportHydrogenMonthChart"));
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
