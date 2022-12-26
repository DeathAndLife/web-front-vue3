<template>
    <layout-top-down>
        <template v-slot:main>
            <el-row>
                <el-col :span="6">
                    <fill-hydrogen-day-chart/>
                    <fill-hydrogen-month-chart style="margin-top: 15px"/>
                    <fill-hydrogen-car-number-day-chart style="margin-top: 15px"/>
                </el-col>
                <el-col :span="12">
                    <fill-hydrogen-amount-save-alarm/>
                    <tencent-map :type="$util.DATA_STATION_TYPE.station" :height="630" style="margin-top: 10px"/>
                </el-col>
                <el-col :span="6">
                    <fill-hydrogen-list/>
                </el-col>
            </el-row>
        </template>
        <template v-slot:footer>
            <el-row :gutter="10">
                <el-col :span="6">
                    <fill-hydrogen-car-number-month-chart/>
                </el-col>
                <el-col :span="6">
                    <fill-hydrogen-alarm-state/>
                </el-col>
                <el-col :span="6">
                    <fill-hydrogen-car-number-rank-chart/>
                </el-col>
                <el-col :span="6">
                    <fill-hydrogen-sale-rank-chart/>
                </el-col>
            </el-row>
        </template>
    </layout-top-down>
</template>

<script>
import LayoutTopDown from "@/components/layout/LayoutTopDown";
import FillHydrogenAmountSaveAlarm from "@/components/fillHydrogenStation/mid/FillHydrogenAmountSaveAlarm";
import TencentMap from "@/components/public/TencentMap";
import FillHydrogenList from "@/components/fillHydrogenStation/right/FillHydrogenList";
import FillHydrogenAlarmState from "@/components/fillHydrogenStation/bottom/FillHydrogenAlarmState";
import FillHydrogenDayChart from "@/components/fillHydrogenStation/left/FillHydrogenDayChart";
import FillHydrogenMonthChart from "@/components/fillHydrogenStation/left/FillHydrogenMonthChart";
import FillHydrogenCarNumberDayChart from "@/components/fillHydrogenStation/left/FillHydrogenCarNumberDayChart";
import FillHydrogenCarNumberMonthChart from "@/components/fillHydrogenStation/bottom/FillHydrogenCarNumberMonthChart";
import FillHydrogenCarNumberRankChart from "@/components/fillHydrogenStation/bottom/FillHydrogenCarNumberRankChart";
import FillHydrogenSaleRankChart from "@/components/fillHydrogenStation/bottom/FillHydrogenSaleRankChart";

export default {
    name: "FillHydrogenStation",
    components: {
        FillHydrogenSaleRankChart,
        FillHydrogenCarNumberRankChart,
        FillHydrogenCarNumberMonthChart,
        FillHydrogenCarNumberDayChart,
        FillHydrogenMonthChart,
        FillHydrogenDayChart,
        FillHydrogenAlarmState,
        FillHydrogenList,
        TencentMap,
        FillHydrogenAmountSaveAlarm, LayoutTopDown
    }
}
</script>

<style scoped>

</style>
