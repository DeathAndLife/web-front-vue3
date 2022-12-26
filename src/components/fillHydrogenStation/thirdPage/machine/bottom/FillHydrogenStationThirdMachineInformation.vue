<template>
    <element-border :height="490">
        <p class="title-border-aqua machine-title">加氢机详细信息</p>
        <el-row>
            <el-col :span="8">
                <p class="p-left">加氢机编码:</p>
            </el-col>
            <el-col :span="16">
                <p class="p-right font-number">{{ code }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <p class="p-left">加氢机生产商:</p>
            </el-col>
            <el-col :span="16">
                <p class="p-right font-number">{{ producer }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <p class="p-left">加氢机型号:</p>
            </el-col>
            <el-col :span="16">
                <p class="p-right font-number">{{ type }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <p class="p-left">加氢枪总数:</p>
            </el-col>
            <el-col :span="16">
                <p class="p-right font-number">{{ devices }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <p class="p-left">加氢抢信息列表</p>
            </el-col>
            <el-col :span="16">
                <p class="p-right font-number">{{ devicesList }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <p class="p-left">设备生产日期:</p>
            </el-col>
            <el-col :span="16">
                <p class="p-right font-number">{{ productionDate }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <p class="p-left">投入使用时间:</p>
            </el-col>
            <el-col :span="16">
                <p class="p-right font-number">{{ firstUseDate }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <p class="p-left">加注压力:</p>
            </el-col>
            <el-col :span="16">
                <p class="p-right font-number">{{ pressure }} <span>Mpa</span></p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
import {getFillMachineInformationByIdAndDeviceId} from "@/api/consumer-http";

export default {
    name: "FillHydrogenStationThirdMachineInformation",
    data() {
        return {
            code: 0,
            producer: 0,
            type: 0,
            devices: 0,
            devicesList: [],
            productionDate: 0,
            firstUseDate: 0,
            pressure: 0,
            id: this.$route.params.id
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let result = await getFillMachineInformationByIdAndDeviceId(this.id, 1);
                let data = result.data;
                this.code = data.code;
                this.type = data.type;
                this.producer = data.producer;
                this.devices = data.devices;
                this.devicesList = data.devicesList;
                this.productionDate = data.productionDate;
                this.firstUseDate = data.firstUseDate;
                this.pressure = data.pressure;
            } catch (e) {
                this.code = 0;
                this.type = 0;
                this.producer = 0;
                this.devices = 0;
                this.devicesList = [];
                this.productionDate = 0;
                this.firstUseDate = 0;
                this.pressure = 0;
            }
            this.guodiantou();
        },
        guodiantou() {
            if (this.$route.params.id === "2000008") {
                this.code = 1;
                this.type = "_";
                this.producer = "_";
                this.devices = "_";
                this.devicesList = "_";
                this.productionDate = "_";
                this.firstUseDate = "2021/8/1";
                this.pressure = "35 / 70";
            }
        }
    }
}
</script>

<style scoped>
.machine-title {
    font-size: 18px;
    height: auto;
    line-height: 100px;
    text-align: center;
    word-break: break-all;
}

.p-left {
    font-size: 18px;
    height: auto;
    line-height: 50px;
    text-align: left;
    word-break: break-all;
    padding-left: 1rem;
}

.p-right {
    font-size: 18px;
    height: auto;
    line-height: 50px;
    text-align: right;
    word-break: break-all;
    padding-right: 1rem;
}
</style>
