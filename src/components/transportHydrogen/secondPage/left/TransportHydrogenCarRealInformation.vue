<template>
    <element-border :height="380" class="t-center">
        <el-row>
            <el-col :span="6">
                <p class="p-component">行驶车速 km/h:</p>
            </el-col>
            <el-col :span="6">
                <p class="font-number" style="color: grey;">___</p>
            </el-col>
            <el-col :span="6">
                <p class="p-component">储氢量 L:</p>
            </el-col>
            <el-col :span="6">
                <p class="font-number">{{ carrierData.residue }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <p class="p-component">储氢量（含温度熵）L:</p>
            </el-col>
            <el-col :span="6">
                <p class="font-number">{{ carrierData.residueTemp }}</p>
            </el-col>
            <el-col :span="6">
                <p class="p-component">电池SOC:</p>
            </el-col>
            <el-col :span="6">
                <p class="font-number">{{ carrierData.battery }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <p class="p-component">经度:</p>
            </el-col>
            <el-col :span="6">
                <p class="font-number">{{ carrierData.longitude }}</p>
            </el-col>
            <el-col :span="6">
                <p class="p-component">纬度:</p>
            </el-col>
            <el-col :span="6">
                <p class="font-number">{{ carrierData.latitude }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <p class="p-component">行驶距离:</p>
            </el-col>
            <el-col :span="6">
                <p class="font-number">{{ carrierData.distance }}</p>
            </el-col>
            <el-col :span="6">
                <p class="p-component">压力:</p>
            </el-col>
            <el-col :span="6">
                <p class="font-number">{{ carrierData.press }}</p>
            </el-col>
        </el-row>
        <el-row style="border-bottom: 1px solid white">
            <el-col :span="6">
                <p class="p-component">温度:</p>
            </el-col>
            <el-col :span="6">
                <p class="font-number">{{ carrierData.temp }}</p>
            </el-col>
            <el-col :span="5">
                <p class="p-component">上报时间:</p>
            </el-col>
            <el-col :span="7">
                <p class="font-number">{{ carrierData.time }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <p class="p-alarm">是否有故障</p>
            </el-col>
            <el-col>
                <p class="p-alarm-value" style="color: red" v-if="carrierData.alarm === 1">有</p>
                <p class="p-alarm-value" v-if="carrierData.alarm === 0">无</p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
import {getCarrierData} from "@/api/consumer-http";

export default {
    name: "TransportHydrogenCarRealInformation",
    data() {
        return {
            id: this.$route.params.id,
            carrierData: {
                alarm: 0,
                battery: 0,
                distance: 0,
                latitude: 0,
                longitude: 0,
                press: 0,
                residue: 0,
                residueTemp: 0,
                stationName: "测试运氢车4",
                temp: 0,
                time: 0
            }
        }
    },
    mounted() {
        this.initData();
    },
    methods: {
        async initData() {
            let result = await getCarrierData({dataStationId: this.id});
            this.carrierData = result.data;
        }
    }
}
</script>

<style scoped>
p {
    line-height: 55px;
    font-size: 18px;
}
.font-number {
    font-family: "Number", serif;
    letter-spacing: 4px;
    color: aqua;
    text-align: right;
    padding-right: 1rem;
}
.p-component {
    text-align: left;
    padding-left: 1rem;
    word-break: break-all;
}
.p-alarm {
    line-height: 55px;
    color: orange;
    font-weight: bold;
    font-size: 20px;
}

.p-alarm-value {
    color: aqua;
    font-weight: bold;
    font-size: 20px;
}
</style>