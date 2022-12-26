<template>
    <element-border :height="260">
        <el-row>
            <el-col id="ProductionHydrogenSecondDevicePieChart" style="height: 320px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {pie} from "@/assets/js/chart";
import {getFaultLeakageHydrogenRatioOfProductById} from "@/api/consumer-http";

export default {
    name: "ProductionHydrogenSecondDevicePieChart",
    data() {
        return {
            data: [0, 0],
            color: ["aqua", "#fc5a25"],
            title: ["剩余储氢量", "今日已售"],
            unit: "kg",
            alarm: 0,
            leak: 0,
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
            let chart = this.$chart.init(document.getElementById("ProductionHydrogenSecondDevicePieChart"));
            pie(chart, this.data, this.color, this.title, this.unit);
            setTimeout(() => {
                window.onresize = () => {
                    chart.resize();
                };
            }, 200);
        }
    }
}
</script>

<style scoped>

</style>
