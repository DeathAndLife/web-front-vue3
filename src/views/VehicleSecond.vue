<template>
    <layout-top-down :top="40" :footer="810">
        <template v-slot:main>
            <el-row>
                <el-col>
                    <vehicle-second-title/>
                </el-col>
            </el-row>
        </template>
        <template v-slot:footer>
            <el-row>
                <el-col>
                    <vehicle-second-data/>
                </el-col>
            </el-row>
            <el-row :gutter="30" class="margin-top-20">
                <el-col :span="7">
                    <vehicle-second-d-c-d-c-chart/>
                    <vehicle-second-motor-chart style="margin-top: 15px"/>
                    <vehicle-second-f-c-chart style="margin-top: 15px"/>
                </el-col>
                <el-col :span="10">
                    <vehicle-second-car-information/>
                </el-col>
                <el-col :span="7">
                    <vehicle-second-life-chart/>
                    <vehicle-second-speed-chart style="margin-top: 15px"/>
                    <vehicle-second-motor-temp-chart style="margin-top: 15px"/>
                </el-col>
            </el-row>
        </template>
    </layout-top-down>
</template>

<script>
import VehicleSecondTitle from "@/components/vehicle/secondPage/top/VehicleSecondTitle";
import VehicleSecondData from "@/components/vehicle/secondPage/top/VehicleSecondData";
import VehicleSecondCarInformation from "@/components/vehicle/secondPage/mid/VehicleSecondCarInformation";
import LayoutTopDown from "@/components/layout/LayoutTopDown";
import VehicleSecondDCDCChart from "@/components/vehicle/secondPage/left/VehicleSecondDCDCChart";
import VehicleSecondMotorChart from "@/components/vehicle/secondPage/left/VehicleSecondMotorChart";
import VehicleSecondFCChart from "@/components/vehicle/secondPage/left/VehicleSecondFCChart";
import VehicleSecondLifeChart from "@/components/vehicle/secondPage/right/VehicleSecondLifeChart";
import VehicleSecondSpeedChart from "@/components/vehicle/secondPage/right/VehicleSecondSpeedChart";
import VehicleSecondMotorTempChart from "@/components/vehicle/secondPage/right/VehicleSecondMotorTempChart";

export default {
    name: "VehicleSecond",
    components: {
        VehicleSecondMotorTempChart,
        VehicleSecondSpeedChart,
        VehicleSecondLifeChart,
        VehicleSecondFCChart,
        VehicleSecondMotorChart,
        VehicleSecondDCDCChart,
        LayoutTopDown,
        VehicleSecondCarInformation, VehicleSecondData, VehicleSecondTitle
    }
}
</script>

<style scoped>

</style>
