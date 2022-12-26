<template>
    <element-border :height="400">
        <el-row>
            <el-col id="FillHydrogenStationSecondFill" style="height: 200px"></el-col>
        </el-row>
        <el-row>
            <el-col id="FillHydrogenStationSecondPressure" style="height: 200px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {byType} from "@/assets/js/chart";
import {
    getFillHydrogenAndCarsById,
    getSaveJarPressureAndFillMachinePressureById,
} from "@/api/consumer-http";

export default {
    name: "FillHydrogenStationSecondFillPressureChart",
    data() {
        return {
            fill: {
                x: this.$util.utilXDate("day"),
                data: [this.$util.utilDataCalculation(24,200,10),this.$util.utilDataCalculation(24,200,10)],
                color: ["aqua","orange"],
                title: ["加氢量","加氢车次"],
                type: ["bar","bar"],
                unit: ["时间(日)","加氢量/kg"]
            },
            pressure: {
                x: this.$util.utilXDate("hour"),
                data: [this.$util.utilDataCalculation(24,200,10),this.$util.utilDataCalculation(24,200,10)],
                color: ["purple","aqua"],
                title: ["储氢管压力","加氢机压力"],
                type: ["line","bar"],
                unit: ["时间(24小时)","压力/Mpa"]
            }
        };
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let machine = await getSaveJarPressureAndFillMachinePressureById(this.id);
                let cars = await getFillHydrogenAndCarsById(this.id);
                let machineChart = machine.data;
                let carsChart = cars.data;
                this.fill.x = carsChart.date;
                this.fill.data = [carsChart.fills,carsChart.cars];
                this.pressure.x = machineChart.date;
                this.pressure.data = [machineChart.jar, machineChart.machine];
                this.drawLine();
            } catch (e) {
                this.drawLine();
            }
        },
        drawLine() {
            let fill = this.$chart.init(document.getElementById("FillHydrogenStationSecondFill"));
            let pressure = this.$chart.init(document.getElementById("FillHydrogenStationSecondPressure"));
            byType(fill,this.fill.x,this.fill.data,this.fill.color,this.fill.title,this.fill.type,this.fill.unit);
            byType(pressure,this.pressure.x,this.pressure.data,this.pressure.color,this.pressure.title,this.pressure.type,this.pressure.unit);
            setTimeout(() => {
                window.onresize = () => {
                    fill.resize();
                    pressure.resize();
                };
            }, 200);
        },
    },
}
</script>

<style scoped>

</style>
