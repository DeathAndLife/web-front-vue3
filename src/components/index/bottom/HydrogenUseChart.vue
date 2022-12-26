<template>
    <element-border :height="230">
        <p class="p-component">燃料电池车氢耗量</p>
        <el-row>
            <el-col id="HydrogenUseChart" style="height: 190px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {bar} from "@/assets/js/chart";
import {getHydrogenConsume} from "@/api/consumer-http";

export default {
    name: "HydrogenUseChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(21, 1000, 900)],
            color: ["aqua"],
            unit: ["日期(天)", "单位/kg"],
            title: ["当月"],
            x: this.$util.utilXDate("day"),
        }
    },
    mounted() {
        this.initData();
    },
    methods: {
        async initData() {
           try {
               let data = [];
               let x = [];
               let result = await getHydrogenConsume();
               for (let i = 0; i < result.data.length; i++) {
                   data[i] = result.data[i].h2consumer / 100;
                   x[i] = result.data[i].data_month_day;
               }
               this.data[0] = data;
               this.x = x;
               this.drawLine();
           } catch (e) {
               this.drawLine();
           }
        },
        drawLine() {
            let chart = this.$chart.init(document.getElementById("HydrogenUseChart"));
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
