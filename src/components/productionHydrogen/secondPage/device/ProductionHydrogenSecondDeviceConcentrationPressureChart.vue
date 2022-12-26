<template>
    <element-border :height="260">
        <el-row>
            <el-col :span="12" id="ProductionHydrogenSecondDeviceConcentration" style="height: 260px"></el-col>
            <el-col :span="12" id="ProductionHydrogenSecondDevicePressure" style="height: 260px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {byType} from "@/assets/js/chart";
import {getHinOinHById, getTempAndPressureById} from "@/api/consumer-http";

export default {
    name: "ProductionHydrogenSecondDeviceConcentrationPressureChart",
    data() {
        return {
            concentration: {
                x: this.$util.utilXDate("day"),
                data: [this.$util.utilDataCalculation(24, 200, 10), this.$util.utilDataCalculation(24, 200, 10)],
                color: ["aqua", "orange"],
                title: ["氢中氧", "氧中氢"],
                type: ["bar", "bar"],
                unit: ["时间(日)", "浓度/%"]
            },
            pressure: {
                x: this.$util.utilXDate("hour"),
                data: [this.$util.utilDataCalculation(24, 200, 10), this.$util.utilDataCalculation(24, 200, 10)],
                color: ["purple", "aqua"],
                title: ["电解槽温度", "氢气压力"],
                type: ["line", "bar"],
                unit: ["时间(24小时)", "MPa/℃"]
            },
            id: this.$route.params.id
        };
    },
    mounted() {
        this.initData();
    },
    methods: {
        async initData() {
            this.drawLine();
        },
        drawLine() {
            let concentration = this.$chart.init(document.getElementById("ProductionHydrogenSecondDeviceConcentration"));
            let pressure = this.$chart.init(document.getElementById("ProductionHydrogenSecondDevicePressure"));
            byType(concentration, this.concentration.x, this.concentration.data, this.concentration.color, this.concentration.title, this.concentration.type, this.concentration.unit);
            byType(pressure, this.pressure.x, this.pressure.data, this.pressure.color, this.pressure.title, this.pressure.type, this.pressure.unit);
            setTimeout(() => {
                window.onresize = () => {
                    concentration.resize();
                    pressure.resize();
                };
            }, 200);
        },
    },
}
</script>

<style scoped>

</style>
