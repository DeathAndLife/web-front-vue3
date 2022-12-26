<template>
    <layout-right-left :left="10" :right="14">
        <template v-slot:right>
            <el-row>
                <el-col>
                    <tencent-map :type="$util.DATA_STATION_TYPE.carrier" style="margin-left: 10px" :height="970"/>
                </el-col>
            </el-row>
        </template>
        <template v-slot:left>
            <el-row>
                <el-col>
                    <transport-hydrogen-title/>
                </el-col>
            </el-row>
            <el-row class="margin-top-20">
                <el-col>
                    <transport-hydrogen-car-image/>
                </el-col>
            </el-row>
            <el-row class="margin-top-20">
                <el-col>
                    <transport-hydrogen-car-register-information/>
                </el-col>
            </el-row>
            <el-row class="margin-top-20">
                <el-col>
                    <transport-hydrogen-car-real-information/>
                </el-col>
            </el-row>
            <!--            <el-row :gutter="10" class="margin-top-10">-->
            <!--                <el-col :span="12">-->
            <!--                    <transport-hydrogen-car-information/>-->
            <!--                </el-col>-->
            <!--                <el-col :span="12">-->
            <!--                    <transport-hydrogen-save-jar/>-->
            <!--                </el-col>-->
            <!--            </el-row>-->
            <!--            <el-row class="margin-top-10">-->
            <!--                <el-col>-->
            <!--                    <transport-hydrogen-car-image/>-->
            <!--                </el-col>-->
            <!--            </el-row>-->
            <!--            <el-row :gutter="10" class="margin-top-10">-->
            <!--                <el-col :span="12">-->
            <!--                    <transport-hydrogen-car-location/>-->
            <!--                </el-col>-->
            <!--                <el-col :span="12">-->
            <!--                    <transport-hydrogen-information/>-->
            <!--                </el-col>-->
            <!--            </el-row>-->
            <!--            <el-row :gutter="10" class="margin-top-10">-->
            <!--                <el-col :span="12">-->
            <!--                    <transport-hydrogen-sensor/>-->
            <!--                </el-col>-->
            <!--                <el-col :span="12">-->
            <!--                    <transport-hydrogen-driver/>-->
            <!--                </el-col>-->
            <!--            </el-row>-->
        </template>
    </layout-right-left>
</template>

<script>
import LayoutRightLeft from "@/components/layout/LayoutRightLeft";
import TransportHydrogenCarInformation
    from "@/components/transportHydrogen/secondPage/left/TransportHydrogenCarInformation";
import TransportHydrogenSaveJar from "@/components/transportHydrogen/secondPage/left/TransportHydrogenSaveJar";
import TransportHydrogenCarImage from "@/components/transportHydrogen/secondPage/left/TransportHydrogenCarImage";
import TransportHydrogenInformation from "@/components/transportHydrogen/secondPage/left/TransportHydrogenInformation";
import TransportHydrogenCarLocation from "@/components/transportHydrogen/secondPage/left/TransportHydrogenCarLocation";
import TransportHydrogenSensor from "@/components/transportHydrogen/secondPage/left/TransportHydrogenSensor";
import TransportHydrogenDriver from "@/components/transportHydrogen/secondPage/left/TransportHydrogenDriver";
import TransportHydrogenTitle from "@/components/transportHydrogen/secondPage/left/TransportHydrogenTitle";
import TencentMap from "@/components/public/TencentMap";
import TransportHydrogenCarRealInformation
    from "@c/transportHydrogen/secondPage/left/TransportHydrogenCarRealInformation";
import TransportHydrogenCarRegisterInformation
    from "@c/transportHydrogen/secondPage/left/TransportHydrogenCarRegisterInformation";

export default {
    name: "TransportHydrogenSecond",
    components: {
        TransportHydrogenCarRegisterInformation,
        TransportHydrogenCarRealInformation,
        TransportHydrogenTitle,
        TransportHydrogenDriver,
        TransportHydrogenSensor,
        TransportHydrogenCarLocation,
        TransportHydrogenInformation,
        TransportHydrogenCarImage, TransportHydrogenSaveJar, TransportHydrogenCarInformation, LayoutRightLeft
    }
}
</script>

<style scoped>
</style>
