<template>
    <layout-top-down>
        <template v-slot:main>
            <el-row>
                <el-col :span="6">
                    <production-statistical/>
                    <production-statistical-day-chart style="margin-top: 13px"/>
                    <production-statistical-month-chart style="margin-top: 13px"/>
                    <transport-statistical style="margin-top: 14px"/>
                </el-col>
                <el-col :span="13">
                    <tencent-map :type="$util.DATA_STATION_TYPE.all" :height="720"/>
                </el-col>
                <el-col :span="5">
                    <hydrogen-station-statistical/>
                    <hydrogen-station-day-month-chart style="margin-top: 13px"/>
                    <hydrogen-day-month-year-pie-chart style="margin-top: 13px"/>
                    <vehicle-statistical style="margin-top: 14px"/>
                </el-col>
            </el-row>
        </template>
        <template v-slot:footer>
            <el-row :gutter="10">
                <el-col :span="6">
                    <transport-hydrogen-day-chart/>
                </el-col>
                <el-col :span="4">
                    <alarm-state/>
                </el-col>
                <el-col :span="8">
                    <hydrogen-transport-add-use-chart/>
                </el-col>
                <el-col :span="6">
                    <hydrogen-use-chart/>
                </el-col>
            </el-row>
        </template>
    </layout-top-down>
</template>

<script>

import ProductionStatistical from "@/components/index/left/ProductionStatistical";
import TransportStatistical from "@/components/index/left/TransportStatistical";
import HydrogenStationStatistical from "@/components/index/right/HydrogenStationStatistical";
import VehicleStatistical from "@/components/index/right/VehicleStatistical";
import AlarmState from "@/components/index/bottom/AlarmState";
import LayoutTopDown from "@/components/layout/LayoutTopDown";
import ProductionStatisticalDayChart from "@/components/index/left/ProductionStatisticalDayChart";
import ProductionStatisticalMonthChart from "@/components/index/left/ProductionStatisticalMonthChart";
import HydrogenStationDayMonthChart from "@/components/index/right/HydrogenStationDayMonthChart";
import HydrogenDayMonthYearPieChart from "@/components/index/right/HydrogenDayMonthYearPieChart";
import TransportHydrogenDayChart from "@/components/index/bottom/TransportHydrogenDayChart";
import HydrogenTransportAddUseChart from "@/components/index/bottom/HydrogenTransportAddUseChart";
import HydrogenUseChart from "@/components/index/bottom/HydrogenUseChart";

export default {
    name: "Index",
    components: {
        HydrogenUseChart,
        HydrogenTransportAddUseChart,
        TransportHydrogenDayChart,
        HydrogenDayMonthYearPieChart,
        HydrogenStationDayMonthChart,
        ProductionStatisticalMonthChart,
        ProductionStatisticalDayChart,
        LayoutTopDown,
        AlarmState,
        VehicleStatistical,
        HydrogenStationStatistical,
        TransportStatistical, ProductionStatistical
    }
}
</script>

<style scoped>
</style>
