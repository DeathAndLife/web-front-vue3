<template>
    <element-border :height="400">
        <p class="p-component">当日氢气产量(按日)</p>
        <el-row>
            <el-col id="ProductionHydrogenSecondDayChart" style="height: 320px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {bar} from "@/assets/js/chart";
import {getMakeHydrogenDayById} from "@/api/consumer-http";

export default {
    name: "ProductionHydrogenSecondDayChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(31, 100, 0)],
            color: ["aqua"],
            title: ["当日"],
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
                let result = await getMakeHydrogenDayById(this.id);
                let data = result.data;
                this.data = [data.value];
                this.x = data.date;
                this.drawLine();
            } catch (e) {
                this.drawLine();
            }
        },
        drawLine() {
            let chart = this.$chart.init(document.getElementById("ProductionHydrogenSecondDayChart"));
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
