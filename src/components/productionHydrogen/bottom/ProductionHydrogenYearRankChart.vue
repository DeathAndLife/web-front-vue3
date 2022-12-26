<template>
    <element-border :height="230">
        <p class="p-component">{{title}}</p>
        <el-row>
            <el-col id="ProductionHydrogenYearRankChart" style="height: 190px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {rank} from "@/assets/js/chart";
import {getHydrogenProductionRank, getProductionStationRegisterInformationById} from "@/api/consumer-http";

export default {
    name: "ProductionHydrogenYearRankChart",
    data() {
        return {
            data: [
                {
                    name: "暂无",
                    value: 0,
                },
                {
                    name: "暂无",
                    value: 0,
                },
                {
                    name: "暂无",
                    value: 0,
                }
            ],
            title: "当年制氢厂产量排名(kg)",
            color: ['rgba(248,195,248', 'rgba(100,255,249', 'rgba(135,183,255'],
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let result = await getHydrogenProductionRank();
                let data = result.data;
                this.data = data.year;
                this.drawLine();
            } catch (e) {
                this.drawLine();
            }
        },
        drawLine() {
            let chart = this.$chart.init(document.getElementById("ProductionHydrogenYearRankChart"));
            rank(chart, this.data, this.color,"kg");
            setTimeout(() => {
                window.onresize = () => {
                    chart.resize();
                };
            }, 200);
        },
    }
}
</script>

<style scoped>

</style>
