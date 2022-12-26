<template>
    <element-border :height="260">
        <p class="p-component">当日氢气产量</p>
        <el-row>
            <el-col id="ProductionHydrogenSecondDeviceDayChart" style="height: 180px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {bar} from "@/assets/js/chart";
import {getMakeHydrogenDayById} from "@/api/consumer-http";

export default {
    name: "ProductionHydrogenSecondDeviceDayChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(31, 100, 0)],
            color: ["aqua"],
            title: ["当日"],
            unit: ["日期(日)", "单位/kg"],
            x: this.$util.utilXDate("day"),
            id: this.$route.params.id
        }
    },
    mounted() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                this.drawLine();
            } catch (e) {
                this.drawLine();
            }
        },
        drawLine() {
            let chart = this.$chart.init(document.getElementById("ProductionHydrogenSecondDeviceDayChart"));
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
