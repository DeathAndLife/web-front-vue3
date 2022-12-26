<template>
    <el-row class="margin-top-20">
        <el-col :span="10">
            <element-border v-if="$route.params.id === '2000018'" :height="200">
                <el-row>
                    <el-col :span="14">
                        <p class="p-left">加氢状态:</p>
                    </el-col>
                    <el-col :span="10">
                        <p class="p-left t-green">{{ parseInt(realData.SPSGunStatus) === 0 ? "未工作" : "未工作" }}</p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="14">
                        <p class="p-left">瞬时流量:</p>
                    </el-col>
                    <el-col :span="10">
                        <p class="p-left font-number">{{ realData.SPSOutputTraffic }} <span>kg/min</span></p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="14">
                        <p class="p-left">实时加氢质量:</p>
                    </el-col>
                    <el-col :span="10">
                        <p class="p-left t-green">{{ realData.SPSOutputWeight }} <span>kg</span></p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="14">
                        <p class="p-left">出口压力:</p>
                    </el-col>
                    <el-col :span="10">
                        <p class="p-left t-green">{{ realData.SPSOutputPressure }} <span>Mpa</span></p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="14">
                        <p class="p-left">氢气温度:</p>
                    </el-col>
                    <el-col :span="10">
                        <p class="p-left t-green">{{ realData.SPSTemperature }} <span>℃</span></p>
                    </el-col>
                </el-row>
            </element-border>
            <element-border v-else :height="200">
                <el-row>
                    <el-col :span="14">
                        <p class="p-left">加氢枪状态:</p>
                    </el-col>
                    <el-col :span="10">
                        <p class="p-left t-green">{{ parseInt(realData.SPSGunStatus) === 0 ? "未工作" : "正在加氢" }}</p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="14">
                        <p class="p-left">加氢枪实时流量:</p>
                    </el-col>
                    <el-col :span="10">
                        <p class="p-left font-number">{{ realData.SPSOutputTraffic }} <span>kg/min</span></p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="14">
                        <p class="p-left">枪口实时加氢质量:</p>
                    </el-col>
                    <el-col :span="10">
                        <p class="p-left t-green">{{ realData.SPSOutputWeight }} <span>kg</span></p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="14">
                        <p class="p-left">枪口压力:</p>
                    </el-col>
                    <el-col :span="10">
                        <p class="p-left t-green">{{ realData.SPSOutputPressure }} <span>Mpa</span></p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="14">
                        <p class="p-left">环境温度:</p>
                    </el-col>
                    <el-col :span="10">
                        <p class="p-left t-green">{{ realData.SPSTemperature }} <span>℃</span></p>
                    </el-col>
                </el-row>
            </element-border>
        </el-col>
        <el-col :span="8" :offset="6">
            <element-border :height="80" style="margin-top: 120px;">
                <el-row>
                    <el-col :span="14">
                        <p class="p-left">车载氢系统压力:</p>
                    </el-col>
                    <el-col :span="10">
                        <p class="p-left t-green">0 <span>Mpa</span></p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="14">
                        <p class="p-left">车载氢系统温度:</p>
                    </el-col>
                    <el-col :span="10">
                        <p class="p-left t-green">0 <span>℃</span></p>
                    </el-col>
                </el-row>
            </element-border>
        </el-col>
    </el-row>
    <el-row style="height: 200px;overflow: hidden">
        <el-col :span="12">
            <el-image
                style="width: 80%; height: 65%;margin-top: -100px;"
                :src="fillMachine"
                :fit="fit">
            </el-image>
        </el-col>
        <el-col :span="12">
            <el-image
                style="width: 100%; height: 65%;margin-top: -20px;margin-left: 50px;"
                :src="fillCar"
                :fit="fit">
            </el-image>
        </el-col>
    </el-row>
    <div v-if="parseInt(realData.SPSGunStatus) !== 0">
        <div
            class="transmission-up"
        ></div>
        <div
            class="transmission-down"
        ></div>
    </div>
</template>

<script>
import fillMachine from "@/assets/svg/fill-machine.svg"
import fillCar from "@/assets/svg/fill-car.svg"
import {wsRealData} from "@/api/consumer-ws";
import {JSONData} from "@/api/websocket-util";
import {mapActions} from "vuex"

export default {
    name: "FillHydrogenStationThirdRealFillCarState",
    data() {
        return {
            ws: null,
            id: this.$route.params.id,
            fit: "scale-down",
            fillMachine: fillMachine,
            fillCar: fillCar,
            realData: {
                SPSOutputWeight: 0,
                SCPOutPressure: 0,
                SPSID: 0,
                SPSOutputTraffic: 0,
                SPSTemperature: 0,
                SPSGunStatus: 0,
                SPSOnceWeight: 0,
                SPSOutputPressure: 0
            }
        }
    },
    created() {
        this.initWs();
    },
    mounted() {
        this.receiveData();
    },
    methods: {
        ...mapActions(["actionStationMachineId"]),
        initWs() {
            let data = [this.$util.DATA_STATION_TYPE.station, this.id];
            this.ws = this.$ws(wsRealData(data))
        },
        receiveData() {
            const that = this;
            that.ws.onmessage = (data) => {
                let result = JSONData(data);
                if (Object.keys(result.data).length) {
                    that.realData = result.data;
                    that.actionStationMachineId(that.realData.SPSID);
                }

            }
        }
    },
    unmounted() {
        this.ws.close();
    }
}
</script>

<style scoped>
.p-left {
    font-size: 18px;
    height: auto;
    line-height: 40px;
    text-align: left;
    word-break: break-all;
    padding-left: 1rem;
}
.transmission-up {
    width: 50px;
    height: 2px;
    background: aqua;
    position: absolute;
    top: 88%;
    left: 30%;
    animation: up infinite 0.5s alternate;
}

.transmission-down {
    width: 50px;
    height: 2px;
    background: aqua;
    position: absolute;
    top: 80%;
    left: 10%;
    animation: down infinite 0.5s alternate;
}

@keyframes up {
    to {
        left: 30%;
        width: 5px;
        background: white;
    }
    from {
        left: 65%;
        width: 50px;
        background: aqua;
    }
}

@keyframes down {
    to {
        left: 65%;
        width: 50px;
        background: aqua;
    }
    from {
        left: 30%;
        width: 5px;
        background: white;
    }
}
</style>
