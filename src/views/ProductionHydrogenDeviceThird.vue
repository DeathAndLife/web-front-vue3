<template>
    <layout-top-down :top="40" :footer="610">
        <template v-slot:main>
            <el-row>
                <el-col>
                    <production-hydrogen-second-title/>
                </el-col>
            </el-row>
        </template>
        <template v-slot:footer>
            <el-row :gutter="10">
                <el-col>
                    <production-hydrogen-third-device-main/>
                </el-col>
            </el-row>
        </template>
    </layout-top-down>
</template>

<script>
import LayoutTopDown from "@/components/layout/LayoutTopDown";
import ProductionHydrogenSecondTitle from "@/components/productionHydrogen/secondPage/ProductionHydrogenSecondTitle";
import ProductionHydrogenSecondDeviceData
    from "@c/productionHydrogen/secondPage/device/ProductionHydrogenSecondDeviceData";
import ProductionHydrogenThirdDeviceMain
    from "@c/productionHydrogen/secondPage/device/ProductionHydrogenThirdDeviceMain";

export default {
    name: "ProductionHydrogenDeviceSecond",
    components: {
        ProductionHydrogenThirdDeviceMain,
        ProductionHydrogenSecondDeviceData,
        ProductionHydrogenSecondTitle, LayoutTopDown
    }
}
</script>

<style scoped>

</style>
