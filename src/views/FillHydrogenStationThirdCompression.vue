<template>
    <layout-top-down :top="40" :footer="910">
        <template v-slot:main>
            <el-row>
                <el-col>
                    <fill-hydrogen-station-third-compression-tile/>
                </el-col>
            </el-row>
        </template>
        <template v-slot:footer>
            <el-row :gutter="20">
                <el-col :span="16">
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <fill-hydrogen-station-third-compression-real-information :real-info="realInfo"/>
                        </el-col>
                        <el-col :span="12">
                            <fill-hydrogen-station-third-compression-maintain-manage :maintain-data="maintainData"/>
                        </el-col>
                    </el-row>
                    <el-row class="margin-top-20">
                        <el-col>
                            <fill-hydrogen-station-third-compression-alarm-information :alarm-info="alarmInfo"/>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="8">
                    <fill-hydrogen-station-third-compression-maintain-information :maintain-info="maintainInfo"/>
                </el-col>
            </el-row>
        </template>
    </layout-top-down>
</template>

<script>

import LayoutTopDown from "@c/layout/LayoutTopDown";
import FillHydrogenStationThirdCompressionTile
    from "@c/fillHydrogenStation/thirdPage/compression/FillHydrogenStationThirdCompressionTile";
import FillHydrogenStationThirdCompressionRealInformation
    from "@c/fillHydrogenStation/thirdPage/compression/FillHydrogenStationThirdCompressionRealInformation";
import FillHydrogenStationThirdCompressionMaintainManage
    from "@c/fillHydrogenStation/thirdPage/compression/FillHydrogenStationThirdCompressionMaintainManage";
import FillHydrogenStationThirdCompressionAlarmInformation
    from "@c/fillHydrogenStation/thirdPage/compression/FillHydrogenStationThirdCompressionAlarmInformation";
import FillHydrogenStationThirdCompressionMaintainInformation
    from "@c/fillHydrogenStation/thirdPage/compression/FillHydrogenStationThirdCompressionMaintainInformation";
import {wsFaultInOneWeek, wsInformationMaintenance, wsRepairDetails} from "@/api/consumer-ws";
import {JSONData} from "@/api/websocket-util";

export default {
    name: "FillHydrogenStationThirdCompression",
    components: {
        FillHydrogenStationThirdCompressionMaintainInformation,
        FillHydrogenStationThirdCompressionAlarmInformation,
        FillHydrogenStationThirdCompressionMaintainManage,
        FillHydrogenStationThirdCompressionRealInformation,
        FillHydrogenStationThirdCompressionTile,
        LayoutTopDown
    },
    data() {
        return {
            realAndMaintainWs: null,
            alarmInfoWs: null,
            maintainInfoWs: null,
            realInfo: {
                oilPeak: 0,
                oilValley: 0,
                rodLoadPeak: 0,
                rodLoadValley: 0
            },
            maintainData: {
                beltPulleyStatus: 0,
                diaphragmStatus: 0,
                exhaustValveStatus: 0,
                inHalValveStatus: 0,
                oilStatus: 0,
                rodLoadStatus: 0,
                rotSpeed: 0,
                spillValveStatus: 0
            },
            maintainInfo: {
                endTime: "0",
                type: "",
                otherDevice: "0",
                repairContent: "0",
                repairDevice: "0",
                repairNum: "0",
                repairReason: "0",
                repairType: "0",
                repairerName: "0",
                repairerNum: "0",
                startTime: "0",
                telNumber: "0",
                status: 0
            },
            alarmInfo: [],
            id: this.$route.params.id
        }
    },
    mounted() {
        this.receive();
    },
    created() {
        this.realAndMaintainWs = this.$ws(wsInformationMaintenance(this.id))
        this.alarmInfoWs = this.$ws(wsFaultInOneWeek(this.id))
        this.maintainInfoWs = this.$ws(wsRepairDetails(this.id))
    },
    methods: {
        receive() {
            const that = this;
            that.realAndMaintainWs.onmessage = (data) => {
                let result = JSONData(data);
                that.toRealInfo(result.data)
                that.toMaintainData(result.data)
            };
            that.alarmInfoWs.onmessage = (data) => {
                let result = JSONData(data);
                that.toAlarmInfo(result.data)
            };
            that.maintainInfoWs.onmessage = (data) => {
                let result = JSONData(data);
                that.toMaintainInfo(result.data)
            };
        },
        toRealInfo(data) {
            this.realInfo.oilPeak = data.oilPeak;
            this.realInfo.oilValley = data.oilValley;
            this.realInfo.rodLoadPeak = data.rodLoadPeak;
            this.realInfo.rodLoadValley = data.rodLoadValley;
        },
        toMaintainData(data) {
            this.maintainData.inHalValveStatus = data.inhalValveStatus;
            this.maintainData.diaphragmStatus = data.diaphragmStauts;
            this.maintainData.beltPulleyStatus = data.beltPulleyStatus;
            this.maintainData.rodLoadStatus = data.rodLoadStatus;
            this.maintainData.spillValveStatus = data.spillValveStatus;
            this.maintainData.rotSpeed = data.rotSpeed;
            this.maintainData.oilStatus = data.oilStatus;
            this.maintainData.exhaustValveStatus = data.exhaustValveStatus;
        },
        toMaintainInfo(data) {
            this.maintainInfo.endTime = data.endTime;
            this.maintainInfo.type = data.hydrIndex;
            this.maintainInfo.otherDevice = data.otherDevice;
            this.maintainInfo.repairContent = data.repairCotent;
            this.maintainInfo.repairDevice = data.repairDevice;
            this.maintainInfo.repairNum = data.repairNum;
            this.maintainInfo.repairReason = data.repairReason;
            this.maintainInfo.repairType = data.repairType;
            this.maintainInfo.repairerName = data.repairerName;
            this.maintainInfo.repairerNum = data.repairerNum;
            this.maintainInfo.startTime = data.startTime;
            this.maintainInfo.telNumber = data.telNumber;
            this.maintainInfo.status = data.status;
        },
        toAlarmInfo(data) {
            for (let i = 0; i < data.length; i++) {
                this.alarmInfo.push(
                    {
                        type: data[i].hydrindex,
                        time: data[i].time,
                        result: data[i].result,
                        explain: data[i].explain,
                        advice: data[i].advice,
                    }
                )

            }

        }
    }
}
</script>

<style scoped>

</style>
