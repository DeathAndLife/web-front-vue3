<template>
    <layout-top-down>
        <template v-slot:main>
            <el-row>
                <el-col :span="6">
                    <production-hydrogen-day-chart/>
                    <production-hydrogen-month-chart/>
                    <sale-hydrogen-day-chart/>
                </el-col>
                <el-col :span="12">
                    <production-sale-hydrogen-alarm/>
                    <tencent-map :type="$util.DATA_STATION_TYPE.factory" :height="630" style="margin-top: 10px"/>
                </el-col>
                <el-col :span="6">
                    <production-hydrogen-list/>
                </el-col>
            </el-row>
        </template>
        <template v-slot:footer>
            <el-row :gutter="10">
                <el-col :span="6">
                    <sale-hydrogen-month-chart/>
                </el-col>
                <el-col :span="6">
                    <production-hydrogen-alarm/>
                </el-col>
                <el-col :span="6">
                    <production-hydrogen-month-rank-chart/>
                </el-col>
                <el-col :span="6">
                    <production-hydrogen-year-rank-chart/>
                </el-col>
            </el-row>
        </template>
    </layout-top-down>
</template>

<script>
import ProductionSaleHydrogenAlarm from "@/components/productionHydrogen/mid/ProductionSaleHydrogenAlarm";
import ProductionHydrogenList from "@/components/productionHydrogen/right/ProductionHydrogenList";
import ProductionHydrogenAlarm from "@/components/productionHydrogen/bottom/ProductionHydrogenAlarm";
import LayoutTopDown from "@/components/layout/LayoutTopDown";
import ProductionHydrogenDayChart from "@/components/productionHydrogen/left/ProductionHydrogenDayChart";
import ProductionHydrogenMonthChart from "@/components/productionHydrogen/left/ProductionHydrogenMonthChart";
import SaleHydrogenDayChart from "@/components/productionHydrogen/left/SaleHydrogenDayChart";
import SaleHydrogenMonthChart from "@/components/productionHydrogen/bottom/SaleHydrogenMonthChart";
import ProductionHydrogenMonthRankChart from "@/components/productionHydrogen/bottom/ProductionHydrogenMonthRankChart";
import ProductionHydrogenYearRankChart from "@/components/productionHydrogen/bottom/ProductionHydrogenYearRankChart";

export default {
    name: "ProductionHydrogen",
    components: {
        ProductionHydrogenYearRankChart,
        ProductionHydrogenMonthRankChart,
        SaleHydrogenMonthChart,
        SaleHydrogenDayChart,
        ProductionHydrogenMonthChart,
        ProductionHydrogenDayChart,
        LayoutTopDown,
        ProductionHydrogenAlarm,
        ProductionHydrogenList,
        ProductionSaleHydrogenAlarm,
    }
}
</script>

<style scoped>

</style>
