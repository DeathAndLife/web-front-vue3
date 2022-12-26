<template>
    <layout-top-down :top="40" :footer="810">
        <template v-slot:main>
            <el-row>
                <el-col>
                    <vehicle-third-title/>
                </el-col>
            </el-row>
        </template>
        <template v-slot:footer>
            <el-row>
                <el-col>
                    <vehicle-third-data/>
                </el-col>
            </el-row>
            <el-row :gutter="10" class="margin-top-20">
                <el-col :span="6">
                    <el-row>
                        <el-col>
                            <vehicle-third-hydrogen-flow-chart/>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col>
                            <vehicle-third-air-flow-chart style="margin-top: 15px"/>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col>
                            <vehicle-third-output-power-chart style="margin-top: 15px"/>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="13">
                    <el-row>
                        <el-col>
                            <vehicle-third-d-c-d-c-data/>
                        </el-col>
                    </el-row>
                    <el-row :gutter="10" style="margin-top: 15px">
                        <el-col :span="12">
                            <vehicle-third-humidity-chart/>
                        </el-col>
                        <el-col :span="12">
                            <vehicle-third-electric-drive-temp-chart/>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="5">
                    <el-row>
                        <el-col>
                            <vehicle-third-f-c-alarm-information/>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col>
                            <vehicle-third-f-c-data-list style="margin-top: 30px"/>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </template>
    </layout-top-down>
</template>

<script>
import LayoutTopDown from "@/components/layout/LayoutTopDown";
import VehicleThirdTitle from "@/components/vehicle/thirdPage/top/VehicleThirdTitle";
import VehicleThirdFCAlarmInformation from "@/components/vehicle/thirdPage/right/VehicleThirdFCAlarmInformation";
import VehicleThirdFCDataList from "@/components/vehicle/thirdPage/right/VehicleThirdFCDataList";
import VehicleThirdDCDCData from "@/components/vehicle/thirdPage/mid/VehicleThirdDCDCData";
import VehicleThirdData from "@/components/vehicle/thirdPage/top/VehicleThirdData";
import VehicleThirdHydrogenFlowChart from "@/components/vehicle/thirdPage/left/VehicleThirdHydrogenFlowChart";
import VehicleThirdAirFlowChart from "@/components/vehicle/thirdPage/left/VehicleThirdAirFlowChart";
import VehicleThirdOutputPowerChart from "@/components/vehicle/thirdPage/left/VehicleThirdOutputPowerChart";
import VehicleThirdHumidityChart from "@/components/vehicle/thirdPage/mid/VehicleThirdHumidityChart";
import VehicleThirdElectricDriveTempChart from "@/components/vehicle/thirdPage/mid/VehicleThirdElectricDriveTempChart";
import {wsVehicleThirdFullData} from "@/api/consumer-ws";
import {JSONData} from "@/api/websocket-util";
import {mapActions} from "vuex";

export default {
    name: "VehicleThird",
    data() {
        return {
            ws: null,
            id: this.$route.params.id
        }
    },
    components: {
        VehicleThirdElectricDriveTempChart,
        VehicleThirdHumidityChart,
        VehicleThirdOutputPowerChart,
        VehicleThirdAirFlowChart,
        VehicleThirdHydrogenFlowChart,
        VehicleThirdData,
        VehicleThirdDCDCData,
        VehicleThirdFCDataList,
        VehicleThirdFCAlarmInformation, VehicleThirdTitle, LayoutTopDown
    },
    created() {
        this.initData();
    },
    methods: {
        ...mapActions(["actionVehicleThirdData"]),
        initData() {
            const that = this;
            that.ws = that.$ws(wsVehicleThirdFullData(this.id));
            that.ws.onmessage = (data) => {
                that.actionVehicleThirdData(JSONData(data).data);
            }
        },
    },
    unmounted() {
        this.ws.close();
    }
}
</script>

<style scoped>

</style>
