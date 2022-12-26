<template>
    <layout-top-down :top="40" :footer="910">
        <template v-slot:main>
            <el-row>
                <el-col>
                    <fill-hydrogen-station-third-tank-title/>
                </el-col>
            </el-row>
        </template>
        <template v-slot:footer>
            <el-row :gutter="10">
                <el-col :span="6">
                    <fill-hydrogen-station-third-tank-list/>
                </el-col>
                <el-col :span="12">
                    <fill-hydrogen-station-third-tank-information/>
                </el-col>
                <el-col :span="6">
                    <fill-hydrogen-station-third-tank-data/>
                </el-col>
            </el-row>
            <el-row :gutter="10" style="margin-top: 30px">
                <el-col :span="6">
                    <fill-hydrogen-station-third-tank-compress-list/>
                </el-col>
                <el-col :span="12">
                    <fill-hydrogen-station-third-tank-compress-information/>
                </el-col>
                <el-col :span="6">
                    <fill-hydrogen-station-third-tank-safe-information/>
                </el-col>
            </el-row>
        </template>
    </layout-top-down>
</template>

<script>
import LayoutTopDown from "@/components/layout/LayoutTopDown";
import FillHydrogenStationThirdTankTitle
    from "@/components/fillHydrogenStation/thirdPage/tank/FillHydrogenStationThirdTankTitle";
import FillHydrogenStationThirdTankList
    from "@/components/fillHydrogenStation/thirdPage/tank/FillHydrogenStationThirdTankList";
import FillHydrogenStationThirdTankInformation
    from "@/components/fillHydrogenStation/thirdPage/tank/FillHydrogenStationThirdTankInformation";
import FillHydrogenStationThirdTankData
    from "@/components/fillHydrogenStation/thirdPage/tank/FillHydrogenStationThirdTankData";
import FillHydrogenStationThirdTankCompressList
    from "@/components/fillHydrogenStation/thirdPage/tank/FillHydrogenStationThirdTankCompressList";
import FillHydrogenStationThirdTankCompressInformation
    from "@/components/fillHydrogenStation/thirdPage/tank/FillHydrogenStationThirdTankCompressInformation";
import FillHydrogenStationThirdTankSafeInformation
    from "@/components/fillHydrogenStation/thirdPage/tank/FillHydrogenStationThirdTankSafeInformation";

export default {
    name: "FillHydrogenStationThirdTank",
    components: {
        FillHydrogenStationThirdTankSafeInformation,
        FillHydrogenStationThirdTankCompressInformation,
        FillHydrogenStationThirdTankCompressList,
        FillHydrogenStationThirdTankData,
        FillHydrogenStationThirdTankInformation,
        FillHydrogenStationThirdTankList, FillHydrogenStationThirdTankTitle, LayoutTopDown
    }
}
</script>

<style scoped>

</style>
