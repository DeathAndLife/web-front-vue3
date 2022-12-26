<template>
    <layout-top-down>
        <template v-slot:main>
            <el-row>
                <el-col :span="6">
                    <vehicle-battery-output-energy-chart/>
                    <vehicle-mileage-month-chart class="margin-top-20"/>
                </el-col>
                <el-col :span="12">
                    <vehicle-count-online-mileage-carbon/>
                    <tencent-map :type="$util.DATA_STATION_TYPE.vehicle" :height="630" style="margin-top: 10px"/>
                </el-col>
                <el-col :span="6">
                    <vehicle-vendor-list/>
                  <to-second-by-vin class="margin-top-20"/>
                </el-col>
            </el-row>
        </template>
        <template v-slot:footer>
            <el-row :gutter="10">
                <el-col :span="6">
                    <vehicle-distribution-chart/>
                </el-col>
                <el-col :span="6">
                    <vehicle-motor-engine-charge-other/>
                </el-col>
                <el-col :span="6">
                    <vehicle-use-hydrogen-chart/>
                </el-col>
                <el-col :span="6">
                    <vehicle-carbon-reduce-month-chart/>
                </el-col>
            </el-row>
        </template>
    </layout-top-down>
</template>

<script>
import LayoutTopDown from "@/components/layout/LayoutTopDown";
import VehicleCountOnlineMileageCarbon from "@/components/vehicle/mid/VehicleCountOnlineMileageCarbon";
import TencentMap from "@/components/public/TencentMap";
import VehicleVendorList from "@/components/vehicle/right/VehicleVendorList";
import VehicleBatteryOutputEnergyChart from "@/components/vehicle/left/VehicleBatteryOutputEnergyChart";
import VehicleMileageMonthChart from "@/components/vehicle/left/VehicleMileageMonthChart";
import VehicleDistributionChart from "@/components/vehicle/bottom/VehicleDistributionChart";
import VehicleMotorEngineChargeOther from "@c/vehicle/bottom/VehicleMotorEngineChargeOther";
import VehicleUseHydrogenChart from "@/components/vehicle/bottom/VehicleUseHydrogenChart";
import VehicleCarbonReduceMonthChart from "@/components/vehicle/bottom/VehicleCarbonReduceMonthChart";
import ToSecondByVin from "../components/vehicle/right/ToSecondByVin";

export default {
    name: "Vehicle",
    components: {
      ToSecondByVin,
        VehicleCarbonReduceMonthChart,
        VehicleUseHydrogenChart,
        VehicleMotorEngineChargeOther,
        VehicleDistributionChart,
        VehicleMileageMonthChart,
        VehicleBatteryOutputEnergyChart,
        VehicleVendorList,
        TencentMap,
        VehicleCountOnlineMileageCarbon, LayoutTopDown
    },
}
</script>

<style scoped>

</style>
