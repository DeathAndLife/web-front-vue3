<template>
    <element-border animation="top" :height="230" style="margin-top: 15px">
        <p class="p-component">每日售氢量</p>
        <el-row>
            <el-col id="SaleHydrogenDayChart" style="height: 190px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {line} from "@/assets/js/chart";
import {getSaleHydrogenDay} from "@/api/consumer-http";

export default {
    name: "SaleHydrogenDayChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(31, 5000, 100)],
            color: ["yellow"],
            title: ["当日"],
            unit: ["日期", "售氢量/kg"],
            x: this.$util.utilXDate("day")
        }
    },
    mounted() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let result = await getSaleHydrogenDay();
                let data = result.data;
                this.data = [data.value];
                this.x = data.date;
                this.drawLine();
            } catch (e) {
                this.data = [this.$util.utilDataCalculation(31, 5000, 100)];
                this.x = this.$util.utilXDate("month");
                this.drawLine();
            }
        },
        drawLine() {
            let chart = this.$chart.init(document.getElementById("SaleHydrogenDayChart"));
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
