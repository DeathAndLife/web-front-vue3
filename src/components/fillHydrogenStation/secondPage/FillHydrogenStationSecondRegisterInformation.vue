<template>
    <element-border :height="400">
        <p class="p-component">加氢站注册信息</p>
        <el-row class="margin-top-10">
            <el-col :span="10">
                <p class="p-left">加氢站类型:</p>
            </el-col>
            <el-col :span="14">
                <p class="p-right t-green">{{ type }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10">
                <p class="p-left">加氢站编号:</p>
            </el-col>
            <el-col :span="14">
                <p class="p-right t-green">{{ code }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10">
                <p class="p-left">加氢站名称:</p>
            </el-col>
            <el-col :span="14">
                <p class="p-right t-green">{{ name }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10">
                <p class="p-left">加氢站地址:</p>
            </el-col>
            <el-col :span="14">
                <p class="p-right t-green">{{ address }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10">
                <p class="p-left">制氢设备名称:</p>
            </el-col>
            <el-col :span="14">
                <p class="p-right t-green">{{ deviceName }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10">
                <p class="p-left">电解槽制氢设备数:</p>
            </el-col>
            <el-col :span="14">
                <p class="p-right t-green">{{ electrolyticDevice }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10">
                <p class="p-left">非电解槽制氢设备数:</p>
            </el-col>
            <el-col :span="14">
                <p class="p-right t-green">{{ noElectrolyticDevice }}</p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
import {
    getFillHydrogenStationRegisterInformationById,
    getProductionStationRegisterInformationById
} from "@/api/consumer-http";

export default {
    name: "FillHydrogenStationSecondRegisterInformation",
    data() {
        return {
            type: "___",
            code: "___",
            name: "___",
            address: "___",
            deviceName: "___",
            electrolyticDevice: "___",
            noElectrolyticDevice: "___",
            id: this.$route.params.id
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let result = await getFillHydrogenStationRegisterInformationById(this.id);
                let data = result.data;
                this.type = data.type;
                this.code = data.code;
                this.name = data.name;
                this.address = data.address;
                this.deviceName = data.device_name;
                this.electrolyticDevice = data.electrolytic_devices;
                this.noElectrolyticDevice = data.no_electrolytic_devices;
            } catch (e) {
                this.type = "___";
                this.code = "___";
                this.name = "___";
                this.address = "___";
                this.deviceName = "___";
                this.electrolyticDevice = "___";
                this.noElectrolyticDevice = "___";
            }
            this.guodiantou();
        },
        guodiantou() {
            if (this.$route.params.id === "2000008") {
                this.type = "撬装站";
                this.code = "___";
                this.name = "国家电投中关村延庆园加氢站";
                this.address = "北京市延庆区康庄镇西康路26号中关村延庆园东北角";
                this.deviceName = "___";
                this.electrolyticDevice = "___";
                this.noElectrolyticDevice = "___";
            }
        }
    }
}
</script>

<style scoped>
.p-left {
    font-size: 18px;
    height: auto;
    line-height: 50px;
    text-align: left;
    word-break: break-all;
    text-indent: 1em;
}

.p-right {
    font-size: 18px;
    height: auto;
    line-height: 50px;
    text-align: right;
    word-break: break-all;
    padding-right: 1em;
}
</style>
