<template>
    <element-border :height="400">
        <p class="p-component">当日加氢量(按日)</p>
        <el-row>
            <el-col id="FillHydrogenStationSecondDayChart" style="height: 320px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {bar} from "@/assets/js/chart";
import {getFillHydrogenWeightSumSingle} from "@/api/consumer-http";

export default {
    name: "FillHydrogenStationSecondDayChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(31, 100, 0)],
            color: ["aqua"],
            title: ["加氢量"],
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
                let data = [[]];
                let x = [];
                let result = await getFillHydrogenWeightSumSingle({dataStationId: this.id});
                for (let i = 0; i < result.data.length; i++) {
                    data[0].push(result.data[i].sum);
                    x.push(result.data[i].date)
                }
                this.data = data;
                this.x = x;
                this.drawLine();
            } catch (e) {
                this.drawLine();
            }
        },
        drawLine() {
            let chart = this.$chart.init(document.getElementById("FillHydrogenStationSecondDayChart"));
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
