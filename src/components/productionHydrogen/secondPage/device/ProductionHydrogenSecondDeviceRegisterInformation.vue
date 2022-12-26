<template>
    <element-border :height="400">
        <p class="p-component">制氢设备注册信息</p>
        <el-row class="margin-top-10">
            <el-col :span="10">
                <p class="p-left">制氢设备类型:</p>
            </el-col>
            <el-col :span="14">
                <p class="p-right t-green">{{type}}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10">
                <p class="p-left">制氢设备编号:</p>
            </el-col>
            <el-col :span="14">
                <p class="p-right t-green">{{code}}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10">
                <p class="p-left">制氢厂名称:</p>
            </el-col>
            <el-col :span="14">
                <p class="p-right t-green">{{name}}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10">
                <p class="p-left">制氢厂地址:</p>
            </el-col>
            <el-col :span="14">
                <p class="p-right t-green">{{address}}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10">
                <p class="p-left">制氢设备名称:</p>
            </el-col>
            <el-col :span="14">
                <p class="p-right t-green">{{deviceName}}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="14">
                <p class="p-left">电解槽制氢设备数:</p>
            </el-col>
            <el-col :span="10">
                <p class="p-right t-green">{{electrolyticDevice}}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="14">
                <p class="p-left">非电解槽制氢设备数:</p>
            </el-col>
            <el-col :span="10">
                <p class="p-right t-green">{{noElectrolyticDevice}}</p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>

export default {
    name: "ProductionHydrogenSecondDeviceRegisterInformation",
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
            this.type = "___";
            this.code = "___";
            this.name = "___";
            this.address = "___";
            this.deviceName = "___";
            this.electrolyticDevice = "___";
            this.noElectrolyticDevice = "___";
            /*try {
            } catch (e) {
                this.type = "___";
                this.code = "___";
                this.name = "___";
                this.address = "___";
                this.deviceName = "___";
                this.electrolyticDevice = "___";
                this.noElectrolyticDevice = "___";
            }*/
        }
    }
}
</script>

<style scoped>
.p-left {
    font-size: 16px;
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
