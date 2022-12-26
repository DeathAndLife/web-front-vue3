<template>
    <element-border animation="top" :height="230">
        <p class="p-component">运氢总量(近一年) kg</p>
        <el-row>
            <el-col id="TransportHydrogenYearChart" style="height: 180px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {line} from "@/assets/js/chart";
import {getTransportHydrogenCountYear} from "@/api/consumer-http";

export default {
    name: "TransportHydrogenYearChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(31, 5000, 100)],
            color: ["white"],
            title: ["当月"],
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
                let result = await getTransportHydrogenCountYear();
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
            let chart = this.$chart.init(document.getElementById("TransportHydrogenYearChart"));
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
