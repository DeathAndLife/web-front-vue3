<template>
    <layout-top-down :top="40" :footer="810">
        <template v-slot:main>
            <el-row>
                <el-col>
                    <production-hydrogen-second-title/>
                </el-col>
            </el-row>
        </template>
        <template v-slot:footer>
            <el-row>
                <el-col>
                    <production-hydrogen-second-data/>
                </el-col>
            </el-row>
            <el-row :gutter="10" style="margin-top: 15px">
                <el-col :span="7">
                    <production-hydrogen-second-register-information/>
                </el-col>
                <el-col :span="7">
                    <production-hydrogen-second-day-chart/>
                </el-col>
                <el-col :span="5">
                    <production-hydrogen-second-transport-car-list/>
                </el-col>
                <el-col :span="5">
                    <production-hydrogen-second-alarm-pie-chart/>
                </el-col>
            </el-row>
            <el-row :gutter="10" style="margin-top: 15px">
                <el-col :span="10">
                    <production-hydrogen-second-electrolytic-cell/>
                </el-col>
                <el-col :span="9">
                    <production-hydrogen-second-concentration-pressure-chart/>
                </el-col>
                <el-col :span="5">
                    <production-hydrogen-second-safe-information/>
                </el-col>
            </el-row>
        </template>
    </layout-top-down>
</template>

<script>
import LayoutTopDown from "@/components/layout/LayoutTopDown";
import ProductionHydrogenSecondTitle from "@/components/productionHydrogen/secondPage/ProductionHydrogenSecondTitle";
import ProductionHydrogenSecondRegisterInformation
    from "@/components/productionHydrogen/secondPage/ProductionHydrogenSecondRegisterInformation";
import ProductionHydrogenSecondTransportCarList
    from "@/components/productionHydrogen/secondPage/ProductionHydrogenSecondTransportCarList";
import ProductionHydrogenSecondData from "@/components/productionHydrogen/secondPage/ProductionHydrogenSecondData";
import ProductionHydrogenSecondElectrolyticCell
    from "@/components/productionHydrogen/secondPage/ProductionHydrogenSecondElectrolyticCell";
import ProductionHydrogenSecondSafeInformation
    from "@/components/productionHydrogen/secondPage/ProductionHydrogenSecondSafeInformation";
import ProductionHydrogenSecondDayChart
    from "@/components/productionHydrogen/secondPage/ProductionHydrogenSecondDayChart";
import ProductionHydrogenSecondAlarmPieChart
    from "@/components/productionHydrogen/secondPage/ProductionHydrogenSecondAlarmPieChart";
import ProductionHydrogenSecondConcentrationPressureChart
    from "@/components/productionHydrogen/secondPage/ProductionHydrogenSecondConcentrationPressureChart";

export default {
    name: "ProductionHydrogenSecond",
    components: {
        ProductionHydrogenSecondConcentrationPressureChart,
        ProductionHydrogenSecondAlarmPieChart,
        ProductionHydrogenSecondDayChart,
        ProductionHydrogenSecondSafeInformation,
        ProductionHydrogenSecondElectrolyticCell,
        ProductionHydrogenSecondData,
        ProductionHydrogenSecondTransportCarList,
        ProductionHydrogenSecondRegisterInformation, ProductionHydrogenSecondTitle, LayoutTopDown
    }
}
</script>

<style scoped>

</style>
