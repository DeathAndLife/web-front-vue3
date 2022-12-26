<template>
    <layout-top-down :top="40" :footer="810">
        <template v-slot:main>
            <el-row>
                <el-col>
                    <fill-hydrogen-station-second-title/>
                </el-col>
            </el-row>
        </template>
        <template v-slot:footer>
            <el-row>
                <el-col>
                    <fill-hydrogen-station-second-data/>
                </el-col>
            </el-row>
            <el-row :gutter="10" style="margin-top: 15px">
                <el-col :span="7">
                    <fill-hydrogen-station-second-register-information/>
                </el-col>
                <el-col :span="7">
                    <fill-hydrogen-station-second-day-chart/>
                </el-col>
                <el-col :span="5">
                    <fill-hydrogen-station-second-car-list/>
                </el-col>
                <el-col :span="5">
                    <fill-hydrogen-station-second-alarm-pie-chart/>
                </el-col>
            </el-row>
            <el-row :gutter="10" style="margin-top: 15px">
                <el-col :span="5">
                    <fill-hydrogen-station-second-machine-information/>
                </el-col>
                <el-col :span="5">
                    <fill-hydrogen-station-second-save-jar-information/>
                </el-col>
                <el-col :span="9">
                    <fill-hydrogen-station-second-fill-pressure-chart/>
                </el-col>
                <el-col :span="5">
                    <fill-hydrogen-station-second-safe-information/>
                </el-col>
            </el-row>
        </template>
    </layout-top-down>
</template>

<script>
import LayoutTopDown from "@/components/layout/LayoutTopDown";
import FillHydrogenStationSecondTitle from "@/components/fillHydrogenStation/secondPage/FillHydrogenStationSecondTitle";
import FillHydrogenStationSecondData from "@/components/fillHydrogenStation/secondPage/FillHydrogenStationSecondData";
import FillHydrogenStationSecondRegisterInformation
    from "@/components/fillHydrogenStation/secondPage/FillHydrogenStationSecondRegisterInformation";
import FillHydrogenStationSecondCarList
    from "@/components/fillHydrogenStation/secondPage/FillHydrogenStationSecondCarList";
import FillHydrogenStationSecondMachineInformation
    from "@/components/fillHydrogenStation/secondPage/FillHydrogenStationSecondMachineInformation";
import FillHydrogenStationSecondSaveJarInformation
    from "@/components/fillHydrogenStation/secondPage/FillHydrogenStationSecondSaveJarInformation";
import FillHydrogenStationSecondSafeInformation
    from "@/components/fillHydrogenStation/secondPage/FillHydrogenStationSecondSafeInformation";
import FillHydrogenStationSecondDayChart
    from "@/components/fillHydrogenStation/secondPage/FillHydrogenStationSecondDayChart";
import FillHydrogenStationSecondAlarmPieChart
    from "@/components/fillHydrogenStation/secondPage/FillHydrogenStationSecondAlarmPieChart";
import FillHydrogenStationSecondFillPressureChart
    from "@/components/fillHydrogenStation/secondPage/FillHydrogenStationSecondFillPressureChart";

export default {
    name: "FillHydrogenStationSecond",
    components: {
        FillHydrogenStationSecondFillPressureChart,
        FillHydrogenStationSecondAlarmPieChart,
        FillHydrogenStationSecondDayChart,
        FillHydrogenStationSecondSafeInformation,
        FillHydrogenStationSecondSaveJarInformation,
        FillHydrogenStationSecondMachineInformation,
        FillHydrogenStationSecondCarList,
        FillHydrogenStationSecondRegisterInformation,
        FillHydrogenStationSecondData, FillHydrogenStationSecondTitle, LayoutTopDown}
}
</script>

<style scoped>

</style>
