<template>
    <element-border :height="230">
        <el-row>
            <el-col :span="5">
                <el-image
                    style="width: 100%; height: 65%;"
                    :src="svg"
                    :fit="fit"></el-image>
            </el-col>
            <el-col :span="19" id="HydrogenTransportAddUseChart" style="height: 230px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import indexHydrogenSvg from "@/assets/svg/index-hydrogen.svg"
import {line} from "@/assets/js/chart";
import {getWeightAll} from "@/api/consumer-http";

export default {
    name: "HydrogenTransportAddUseChart",
    data() {
        return {
            svg: indexHydrogenSvg,
            fit: "scale-down",
            data: [this.$util.utilDataCalculation(12, 2000, 1000), this.$util.utilDataCalculation(12, 2000, 1000)],
            title: ["加氢站", "燃料电池车"],
            color: ["aqua", "orange"],
            x: this.$util.utilXDate("month"),
            unit: ["日期(月)", "单位/kg"]
        }
    },
    mounted() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let data = [[], []];
                let x = [];
                let result = await getWeightAll();
                for (let i = 0; i < result.length; i++) {
                    data[0].push(result[i].hydrogen_weight);
                    data[1].push(result[i].car_weight);
                    x.push(result[i].date)
                }
                this.data = data;
                this.x = x;
                this.drawLine();
            } catch (e) {
                this.drawLine();
            }
        },
        drawLine() {
            let chart = this.$chart.init(document.getElementById("HydrogenTransportAddUseChart"));
            line(chart, this.x, this.data, this.color, this.title, this.unit);
            setTimeout(() => {
                window.onresize = () => {
                    chart.resize();
                };
            }, 200);
        }
    },
}
</script>

<style scoped>

</style>
