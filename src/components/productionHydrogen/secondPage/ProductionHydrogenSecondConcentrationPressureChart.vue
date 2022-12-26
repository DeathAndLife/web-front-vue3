<template>
    <element-border :height="400">
        <el-row>
            <el-col id="ProductionHydrogenSecondConcentration" style="height: 200px">></el-col>
        </el-row>
        <el-row>
            <el-col id="ProductionHydrogenSecondPressure" style="height: 200px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {byType} from "@/assets/js/chart";
import {getHinOinHById, getTempAndPressureById} from "@/api/consumer-http";

export default {
    name: "ProductionHydrogenSecondConcentrationPressureChart",
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
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let tempResult = await getTempAndPressureById(this.id);
                let hInOResult = await getHinOinHById(this.id);
                let tempChart = tempResult.data;
                let hInOChart = hInOResult.data;
                this.pressure.data[0] = tempChart.temp;
                this.pressure.data[1] = tempChart.pressure;
                this.concentration.data[0] = hInOChart.h_in_o;
                this.concentration.data[1] = hInOChart.o_in_h;
                this.pressure.x = tempChart.date;
                this.concentration.x = hInOChart.date;
                    this.drawLine();
            } catch (e) {
                this.drawLine();
            }
        },
        drawLine() {
            let concentration = this.$chart.init(document.getElementById("ProductionHydrogenSecondConcentration"));
            let pressure = this.$chart.init(document.getElementById("ProductionHydrogenSecondPressure"));
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
