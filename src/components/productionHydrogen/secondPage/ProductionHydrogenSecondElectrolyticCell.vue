<template>
    <element-border :height="400">
        <el-row>
            <el-col :span="12">
                <el-image
                    style="width: 100%; height: 10%;margin-top: 50px"
                    :src="electrolyticWater"
                    :fit="fit">
                </el-image>
                <el-image
                    style="width: 100%; height: 50%;margin-top: -50px;"
                    :src="electrolytic"
                    :fit="fit">
                </el-image>
            </el-col>
            <el-col :span="12">
                <p class="t-center" style="font-size: 18px;line-height: 80px;">电解槽信息</p>
                <el-row>
                    <el-col :span="14">
                        <p class="p-left">当前氢中氧含量:</p>
                    </el-col>
                    <el-col :span="10">
                        <p class="p-left font-number">{{ hInO }} <span>%</span></p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="14">
                        <p class="p-left">当前氧中氢含量:</p>
                    </el-col>
                    <el-col :span="10">
                        <p class="p-left font-number">{{ oInH }} <span>%</span></p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="14">
                        <p class="p-left">当前电解槽温度:</p>
                    </el-col>
                    <el-col :span="10">
                        <p class="p-left font-number">{{ temp }} <span>℃</span></p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="14">
                        <p class="p-left">当前电解槽电压:</p>
                    </el-col>
                    <el-col :span="10">
                        <p class="p-left font-number">{{ voltage }} <span>v</span></p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="14">
                        <p class="p-left">当前电解槽电流:</p>
                    </el-col>
                    <el-col :span="10">
                        <p class="p-left font-number">{{ current }} <span>I</span></p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="14">
                        <p class="p-left">当前电解槽氢气流量:</p>
                    </el-col>
                    <el-col :span="10">
                        <p class="p-left font-number">{{ hFlow }} <span>g/s</span></p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="14">
                        <p class="p-left">当前电解槽氢气压力:</p>
                    </el-col>
                    <el-col :span="10">
                        <p class="p-left font-number">{{ pressure }} <span>MPa</span></p>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
import electrolytic from "@/assets/svg/electrolytic.svg"
import electrolyticWater from "@/assets/svg/electrolytic-water.svg"
import {getProductionElectrolyticInformationById} from "@/api/consumer-http";

export default {
    name: "ProductionHydrogenSecondElectrolyticCell",
    data() {
        return {
            electrolytic: electrolytic,
            electrolyticWater: electrolyticWater,
            fit: "scale-down",
            hInO: 0,
            hFlow: 0,
            oInH: 0,
            pressure: 0,
            temp: 0,
            voltage: 0,
            current: 0,
            id: this.$route.params.id
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let result = await getProductionElectrolyticInformationById(this.id);
                let data = result.data;
                this.hFlow = data.hydorgen_flow;
                this.hInO = data.h_in_o;
                this.oInH = data.o_in_h;
                this.current = data.current;
                this.voltage = data.voltage;
                this.temp = data.temp;
                this.pressure = data.pressure;
            } catch (e) {
                this.hFlow = 0;
                this.hInO = 0;
                this.oInH = 0;
                this.current = 0;
                this.voltage = 0;
                this.temp = 0;
                this.pressure = 0;
            }
        }
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
</style>
