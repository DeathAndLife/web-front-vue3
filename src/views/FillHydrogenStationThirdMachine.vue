<template>
    <layout-top-down :top="460" :footer="490">
        <template v-slot:main>
            <el-row :gutter="10">
                <el-col :span="6">
                    <fill-hydrogen-station-third-machine-day-data/>
                </el-col>
                <el-col :span="14">
                    <el-row>
                        <el-col>
                            <fill-hydrogen-station-third-title/>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col>
                            <fill-hydrogen-station-third-real-fill-car-state/>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="4">
                    <fill-hydrogen-station-third-car-information/>
                </el-col>
            </el-row>
        </template>
        <template v-slot:footer>
            <el-row :gutter="10">
                <el-col :span="6">
                    <fill-hydrogen-station-third-machine-information/>
                </el-col>
                <el-col :span="14">
                    <fill-hydrogen-station-third-environment/>
                </el-col>
                <el-col :span="4">
                    <fill-hydrogen-station-third-safe-information/>
                </el-col>
            </el-row>
        </template>
    </layout-top-down>
</template>

<script>
import LayoutTopDown from "@/components/layout/LayoutTopDown";
import FillHydrogenStationThirdMachineDayData
    from "@/components/fillHydrogenStation/thirdPage/machine/top/FillHydrogenStationThirdMachineDayData";
import FillHydrogenStationThirdTitle
    from "@/components/fillHydrogenStation/thirdPage/machine/top/FillHydrogenStationThirdTitle";
import FillHydrogenStationThirdCarInformation
    from "@/components/fillHydrogenStation/thirdPage/machine/top/FillHydrogenStationThirdCarInformation";
import FillHydrogenStationThirdMachineInformation
    from "@/components/fillHydrogenStation/thirdPage/machine/bottom/FillHydrogenStationThirdMachineInformation";
import FillHydrogenStationThirdEnvironment
    from "@/components/fillHydrogenStation/thirdPage/machine/bottom/FillHydrogenStationThirdEnvironment";
import FillHydrogenStationThirdSafeInformation
    from "@/components/fillHydrogenStation/thirdPage/machine/bottom/FillHydrogenStationThirdSafeInformation";
import FillHydrogenStationThirdRealFillCarState
    from "@/components/fillHydrogenStation/thirdPage/machine/top/FillHydrogenStationThirdRealFillCarState";

export default {
    name: "FillHydrogenStationThird",
    components: {
        FillHydrogenStationThirdRealFillCarState,
        FillHydrogenStationThirdSafeInformation,
        FillHydrogenStationThirdEnvironment,
        FillHydrogenStationThirdMachineInformation,
        FillHydrogenStationThirdCarInformation,
        FillHydrogenStationThirdTitle, FillHydrogenStationThirdMachineDayData, LayoutTopDown}
}
</script>

<style scoped>

</style>
