chart
<template>
    <element-border animation="top" :height="350">
        <p class="p-component">燃料电池输出能量</p>
        <el-row>
            <el-col id="VehicleBatteryOutputEnergyChart" style="height: 310px"></el-col>
        </el-row>
    </element-border>

</template>

<script>
import {line} from "@/assets/js/chart";
import {getOutputPowerChart} from "@/api/consumer-http";

export default {
    name: "VehicleBatteryOutputEnergyChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(31, 100, 0)],
            color: ["yellow"],
            title: ["输出能量"],
            unit: ["日期(天)", "能量/Kw·h"],
            x: this.$util.utilXDate("day")
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let data = [];
                let x = [];
                let result = await getOutputPowerChart();
                for (let i = 0; i < result.data.length; i++) {
                    data.push(result.data[i].num / 3600000);
                    x.push(result.data[i].data_month_day)
                }
                this.data[0] = data;
                this.x = x;
                this.drawLine();
            } catch (e) {
                this.drawLine();
            }
        },
        drawLine() {
            let chart = this.$chart.init(document.getElementById("VehicleBatteryOutputEnergyChart"));
            line(chart, this.x, this.data, this.color, this.title, this.unit);
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

