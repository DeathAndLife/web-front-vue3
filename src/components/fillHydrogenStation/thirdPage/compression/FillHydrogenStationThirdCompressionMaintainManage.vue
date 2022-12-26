<template>
    <el-row>
        <el-col :span="4">
            <p class="component-border-white p-title">维修管理</p>
        </el-col>
    </el-row>
    <el-row class="margin-top-10" :gutter="20">
        <el-col :span="12">
            <element-border :height="400">
                <el-row>
                    <el-col :span="12">
                        <p class="p-title-sub-item">01 油压</p>
                        <div class="state-green" v-if="maintainData.oilStatus === 1"></div>
                        <div class="state-yellow" v-if="maintainData.oilStatus === 2"></div>
                        <div class="state-red" v-if="maintainData.oilStatus === 3"></div>
                        <div class="state-other" v-if="maintainData.oilStatus < 1 || maintainData.oilStatus > 3"></div>
                    </el-col>
                    <el-col :span="12">
                        <p class="p-title-sub-item">02 吸气阀</p>
                        <div class="state-green" v-if="maintainData.inHalValveStatus === 1"></div>
                        <div class="state-yellow" v-if="maintainData.inHalValveStatus === 2"></div>
                        <div class="state-red" v-if="maintainData.inHalValveStatus === 3"></div>
                        <div class="state-other"
                             v-if="maintainData.inHalValveStatus < 1 || maintainData.inHalValveStatus > 3"></div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <p class="p-title-sub-item">03 排气阀</p>
                        <div class="state-green" v-if="maintainData.exhaustValveStatus === 1"></div>
                        <div class="state-yellow" v-if="maintainData.exhaustValveStatus === 2"></div>
                        <div class="state-red" v-if="maintainData.exhaustValveStatus === 3"></div>
                        <div class="state-other"
                             v-if="maintainData.exhaustValveStatus < 1 || maintainData.exhaustValveStatus > 3"></div>
                    </el-col>
                    <el-col :span="12">
                        <p class="p-title-sub-item">04 溢油阀</p>
                        <div class="state-green" v-if="maintainData.spillValveStatus === 1"></div>
                        <div class="state-yellow" v-if="maintainData.spillValveStatus === 2"></div>
                        <div class="state-red" v-if="maintainData.spillValveStatus === 3"></div>
                        <div class="state-other"
                             v-if="maintainData.spillValveStatus < 1 || maintainData.spillValveStatus > 3"></div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <p class="p-title-sub-item">05 杆载荷</p>
                        <div class="state-green" v-if="maintainData.rodLoadStatus === 1"></div>
                        <div class="state-yellow" v-if="maintainData.rodLoadStatus === 2"></div>
                        <div class="state-red" v-if="maintainData.rodLoadStatus === 3"></div>
                        <div class="state-other"
                             v-if="maintainData.rodLoadStatus < 1 || maintainData.rodLoadStatus > 3"></div>
                    </el-col>
                    <el-col :span="12">
                        <p class="p-title-sub-item">06 膜片</p>
                        <div class="state-green" v-if="maintainData.diaphragmStatus === 1"></div>
                        <div class="state-yellow" v-if="maintainData.diaphragmStatus === 2"></div>
                        <div class="state-red" v-if="maintainData.diaphragmStatus === 3"></div>
                        <div class="state-other"
                             v-if="maintainData.diaphragmStatus < 1 || maintainData.diaphragmStatus > 3"></div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <p class="p-title-sub-item">07 皮带轮</p>
                        <div class="state-green" v-if="maintainData.beltPulleyStatus === 1"></div>
                        <div class="state-yellow" v-if="maintainData.beltPulleyStatus === 2"></div>
                        <div class="state-red" v-if="maintainData.beltPulleyStatus === 3"></div>
                        <div class="state-other"
                             v-if="maintainData.beltPulleyStatus < 1 || maintainData.beltPulleyStatus > 3"></div>
                    </el-col>
                </el-row>
            </element-border>
        </el-col>
        <el-col :span="12">
            <element-border :height="400">
                <el-row style="margin-top: -40px">
                    <el-col :span="20" :offset="2" id="FillHydrogenStationThirdCompressionMaintainManage"
                            style="height: 300px"></el-col>
                </el-row>
                <el-row style="margin-top: -140px;margin-left: 50px;">
                    <el-image
                        style="width: 200px; height: 100%;"
                        :src=fillMachine
                        :fit="fit"></el-image>
                </el-row>
            </element-border>
        </el-col>
    </el-row>
</template>

<script>
import fillMachine from "@/assets/img/fill-machine.png"
import {tankSpeed} from "@/assets/js/chart";

export default {
    name: "FillHydrogenStationThirdCompressionMaintainManage",
    props: {
        maintainData: {
            type: Object
        }
    },
    data() {
        return {
            fillMachine: fillMachine,
            fit: "scale-down",
        }
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let chart = this.$chart.init(document.getElementById("FillHydrogenStationThirdCompressionMaintainManage"));
            console.log(this.maintainData.rotSpeed)
            tankSpeed(chart, this.maintainData.rotSpeed);
            setTimeout(() => {
                window.onresize = () => {
                    chart.resize();
                };
            }, 200);
        }
    },
    watch: {
        "maintainData.rotSpeed": {
            async handler(newVal) {
                this.drawLine();
            },
            immediate: true
        }
    }
}
</script>

<style scoped>
.p-title {
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
    width: 120px;
}

.p-title-sub-item {
    height: 65px;
    line-height: 65px;
    font-size: 16px;
    text-align: center;
}

.state-red {
    position: relative;
    left: 50%;
    margin-left: -15px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: red;
    box-shadow: 0 0 20px #135595;
}

.state-green {
    position: relative;
    left: 50%;
    margin-left: -15px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: green;
    box-shadow: 0 0 20px #135595;
}

.state-yellow {
    position: relative;
    left: 50%;
    margin-left: -15px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: yellow;
    box-shadow: 0 0 20px #135595;
}

.state-other {
    position: relative;
    left: 50%;
    margin-left: -15px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: grey;
    box-shadow: 0 0 20px #135595;
}
</style>