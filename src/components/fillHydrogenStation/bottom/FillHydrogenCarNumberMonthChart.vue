<template>
    <element-border animation="top" :height="230">
        <p class="p-component">当月加氢车次</p>
        <el-row>
            <el-col id="FillHydrogenCarNumberMonthChart" style="height: 190px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {line} from "@/assets/js/chart";
import {getHydrogenationTimesMouth} from "@/api/consumer-http";

export default {
    name: "FillHydrogenCarNumberMonthChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(31, 5000, 100)],
            color: ["purple"],
            title: ["加氢车次"],
            unit: ["日期", "单位/次"],
            x: this.$util.utilXDate("month")
        }
    },
    mounted() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let result = await getHydrogenationTimesMouth();
                let resultData = result.data;
                let x = [];
                let data = [];
                for (let i = 0; i < resultData.length; i++) {
                    data.push(resultData[i].data);
                    x.push(resultData[i].time);
                }
                this.x = x;
                this.data[0] = data;
                this.drawLine();
            } catch (e) {
                this.data = [this.$util.utilDataCalculation(31, 5000, 100)];
                this.x = this.$util.utilXDate("month");
                this.drawLine();
            }
        },
        drawLine() {
            let chart = this.$chart.init(document.getElementById("FillHydrogenCarNumberMonthChart"));
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
