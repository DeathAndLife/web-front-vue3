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
                    <production-hydrogen-second-device-data/>
                </el-col>
            </el-row>
            <el-row :gutter="10" style="margin-top: 15px">
                <el-col :span="4">
                    <production-hydrogen-second-device-pie-chart/>
                    <el-row class="margin-top-20">
                        <el-col>
                            <production-hydrogen-second-device-day-chart/>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="15">
                    <production-hydrogen-second-device-main/>
                </el-col>
                <el-col :span="5">
                    <production-hydrogen-second-device-register-information/>
                    <el-row class="margin-top-20">
                        <el-col>
                            <production-hydrogen-second-device-safe-information/>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row :gutter="10" style="margin-top: -260px">
                <el-col :span="19">
                    <production-hydrogen-second-device-concentration-pressure-chart/>
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
import ProductionHydrogenSecondDevicePieChart
    from "@c/productionHydrogen/secondPage/device/ProductionHydrogenSecondDevicePieChart";
import ProductionHydrogenSecondDeviceDayChart
    from "@c/productionHydrogen/secondPage/device/ProductionHydrogenSecondDeviceDayChart";
import ProductionHydrogenSecondDeviceMain
    from "@c/productionHydrogen/secondPage/device/ProductionHydrogenSecondDeviceMain";
import ProductionHydrogenSecondDeviceRegisterInformation
    from "@c/productionHydrogen/secondPage/device/ProductionHydrogenSecondDeviceRegisterInformation";
import ProductionHydrogenSecondDeviceSafeInformation
    from "@c/productionHydrogen/secondPage/device/ProductionHydrogenSecondDeviceSafeInformation";
import ProductionHydrogenSecondDeviceConcentrationPressureChart
    from "@c/productionHydrogen/secondPage/device/ProductionHydrogenSecondDeviceConcentrationPressureChart";

export default {
    name: "ProductionHydrogenDeviceSecond",
    components: {
        ProductionHydrogenSecondDeviceConcentrationPressureChart,
        ProductionHydrogenSecondDeviceSafeInformation,
        ProductionHydrogenSecondDeviceRegisterInformation,
        ProductionHydrogenSecondDeviceMain,
        ProductionHydrogenSecondDeviceDayChart,
        ProductionHydrogenSecondDevicePieChart,
        ProductionHydrogenSecondDeviceData,
        ProductionHydrogenSecondTitle, LayoutTopDown
    }
}
</script>

<style scoped>

</style>
