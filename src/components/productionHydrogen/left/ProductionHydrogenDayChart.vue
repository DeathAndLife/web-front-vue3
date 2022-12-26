<template>
    <element-border animation="top" :height="230">
        <p class="p-component">每日制氢量</p>
        <el-row>
            <el-col id="ProductionHydrogenDayChart" style="height: 190px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {bar} from "@/assets/js/chart";
import {getMakeHydrogenDay} from "@/api/consumer-http";

export default {
    name: "ProductionHydrogenDayChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(31, 1000, 900)],
            color: ["aqua"],
            unit: ["日期(日)", "制氢量/kg"],
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
                let result = await getMakeHydrogenDay();
                this.data[0] = result.data.value;
                this.x = result.data.date;
                this.drawLine();
            } catch (e) {
                this.data = [this.$util.utilDataCalculation(31, 1000, 900)];
                this.x = this.$util.utilXDate("day");
                this.drawLine();
            }
        },
        drawLine() {
            let chart = this.$chart.init(document.getElementById("ProductionHydrogenDayChart"));
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
