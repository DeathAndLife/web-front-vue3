<template>
    <element-border :height="700">
        <el-scrollbar height="690px">
            <el-row>
                <el-col>
                    <p class="p-component title-border-aqua">FC实时数据</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">进水口冷却水温</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.fcuInCoolTemp }}<span>℃</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">出水口冷却水温</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.fcuOutCoolTemp }}<span>℃</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">阴极(空气)温度(进出口)</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.fcuRunStatusYin }}<span>℃</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">阳极(氢气)温度(进出口)</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.fcuAnodTempIn }}<span>℃</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">阴极(空气)流量</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.fcuCathFlow }}<span>g/s</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">阴极(空气)压力(进出口)</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.fcuCathPresIn }}<span>MPa</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">阴极(空气)湿度</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.fcuCathHumi }}<span>%</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">阳极(空气)流量</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.fcuAndFlow }}<span>g/s</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">阳极(空气)压力(进出口)</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.fcuAndPresIn }}<span>MPa</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">阳极(空气)湿度</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.fcuAndHumi }}<span>%</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">故障总数N5</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.fcuFaultTotal }}</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">故障代码</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.fcuFaultList }}</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">运行状态</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.fcuRunStatus }}</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">单体电压M</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.fcuCellVolt }}<span>v</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">空压机转速</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.bopAirComprSpd }}</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">空压机空气流量</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.bopAirComprFlow }}<span>g/s</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">空压机压力</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.bopAirComprPres }}<span>MPa</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">膜增湿器加热温度</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.bopMembHumiHeatTemp }}<span>%</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">膜增湿器湿度</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.bopMembHumiHumi }}<span>%</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">空气背压阀开度</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.bopBackValvDegree }}<span>%</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">空气循环泵转速</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.bopAirPumpSpeed }}<span>r/min</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">空气循环泵流量</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">0<span>g/s</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">空气循环泵压力</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.bopAirPumpPres }}<span>MPa</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">氢气循环泵转速</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.bopH2PumpFlow }}<span>r/min</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">氢气循环泵流量</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.fcuRunStatus2 }}<span>g/s</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">氢气循环泵压力</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.bopH2PumpPres }}<span>MPa</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">氢气喷射器开启状态</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.fcuRunStatus1 }}></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">氢气喷射器出口流量</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.bopH2InjctOutFlow }}<span>g/s</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">氢气尾排阀开启状态</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.bopH2InjctStatus }}</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">氢气尾排阀入口流量</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">0<span>g/s</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">氢气尾排阀压力</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.bopTailValvPres }}<span>MPa</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">循环水泵转速</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.bopWaterPumpSpd }}<span>r/min</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">循环水泵流量</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.bopWaterPumpFlow }}<span>g/s</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">循环水泵压力</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.bopWaterPumpPres }}<span>MPa</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">散热风扇开启命令</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.bopFanStartCmd }}</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">BOP故障总数N6</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">{{ data.bopFaultTotal }}</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14">
                    <p class="p-left">BOP故障代码</p>
                </el-col>
                <el-col :span="10">
                    <p class="p-right font-number">
                        <span class="font-number" v-for="item in data.bopFaultList" :key="item.index"
                              v-text="item + ','"></span>
                    </p>
                </el-col>
            </el-row>
        </el-scrollbar>
    </element-border>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "VehicleThirdFCDataList",
    data() {
        return {
            data: {
                fcuRunStatus: 97,
                fcuInCoolTemp: 74,
                fcuOutCoolTemp: 78,
                fcuRunStatusYin: 76,
                fcuAnodTempIn: 79,
                fcuCathFlow: 1220,
                fcuCathPresIn: 3,
                fcuCathHumi: 76,
                fcuAndFlow: 1225,
                fcuAndPresIn: 3,
                fcuAndHumi: 76,
                fcuFaultTotal: 9,
                fcuFaultList: [51, 51, 51],
                fcuCellVolt: [50, 60, 50],
                bopAirComprSpd: 203483,
                bopAirComprFlow: 1229,
                bopAirComprPres: 3,
                bopMembHumiHeatTemp: 61,
                bopMembHumiHumi: 88,
                bopBackValvDegree: 92,
                bopAirPumpSpeed: 6542,
                bopAirPumpPres: 3,
                bopH2PumpFlow: 6570,
                fcuRunStatus2: 1230,
                bopH2PumpPres: 3,
                fcuRunStatus1: 96,
                bopH2InjctOutFlow: 1229,
                bopH2InjctStatus: 95,
                bopTailValvPres: 3,
                bopWaterPumpSpd: 6540,
                bopWaterPumpFlow: 1210,
                bopWaterPumpPres: 1210,
                bopFanStartCmd: 0,
                bopFaultTotal: 9,
                bopFaultList: []
            },
            interValId: null,
        }
    },
    mounted() {
        this.initData();
    },
    methods: {
        initData() {
            this.interValId = setInterval(() => {
                this.data = this.getterVehicleThirdFCRealData;
            }, 1000)
        }
    },
    computed: {
        ...mapGetters(["getterVehicleThirdFCRealData"]),
    },
    unmounted() {
        clearInterval(this.interValId);
    }
}
</script>

<style scoped>
.p-left {
    font-size: 14px;
    height: auto;
    line-height: 40px;
    text-align: left;
    word-break: break-all;
    padding-left: 1em;
}

.p-right {
    font-size: 18px;
    height: auto;
    line-height: 40px;
    text-align: right;
    word-break: break-all;
    padding-right: 1em;
}
</style>
