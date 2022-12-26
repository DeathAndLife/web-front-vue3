<template>
    <layout-right-left>
        <template v-slot:right>
            <el-row>
                <el-col>
                    <transport-hydrogen-year-chart/>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <transport-hydrogen-month-chart/>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <transport-hydrogen-number-month-chart/>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <transport-hydrogen-drive-mileage-month-chart/>
                </el-col>
            </el-row>
        </template>
        <template v-slot:left>
            <el-row>
                <tencent-map :type="$util.DATA_STATION_TYPE.carrier"/>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="9">
                    <transport-hydrogen-car-information-list/>
                </el-col>
                <el-col :span="5">
                    <transport-hydrogen-alarm-state/>
                </el-col>
                <el-col :span="10">
                    <transport-hydrogen-drive-time-chart/>
                </el-col>
            </el-row>
        </template>
    </layout-right-left>
</template>

<script>
import LayoutRightLeft from "@/components/layout/LayoutRightLeft";
import TransportHydrogenCarInformationList
    from "@/components/transportHydrogen/left/TransportHydrogenCarInformationList";
import TransportHydrogenAlarmState from "@/components/transportHydrogen/left/TransportHydrogenAlarmState";
import TransportHydrogenYearChart from "@/components/transportHydrogen/right/TransportHydrogenYearChart";
import TransportHydrogenMonthChart from "@/components/transportHydrogen/right/TransportHydrogenMonthChart";
import TransportHydrogenNumberMonthChart from "@/components/transportHydrogen/right/TransportHydrogenNumberMonthChart";
import TransportHydrogenDriveMileageMonthChart
    from "@/components/transportHydrogen/right/TransportHydrogenDriveMileageMonthChart";
import TransportHydrogenDriveTimeChart from "@/components/transportHydrogen/left/TransportHydrogenDriveTimeChart";

export default {
    name: "TransportHydrogen",
    components: {
        TransportHydrogenDriveTimeChart,
        TransportHydrogenDriveMileageMonthChart,
        TransportHydrogenNumberMonthChart,
        TransportHydrogenMonthChart,
        TransportHydrogenYearChart,
        TransportHydrogenAlarmState, TransportHydrogenCarInformationList, LayoutRightLeft
    }
}
</script>

<style scoped>
::v-deep(.map-box) {
    width: 100%;
    border-radius: 10px;
}
</style>
