<template>
    <element-border :height="460">
        <p class="t-center title-border-aqua" style="font-size: 18px;line-height: 80px;">车辆详细信息</p>
        <el-row>
            <el-col :span="14">
                <p class="p-left">车牌号:</p>
            </el-col>
            <el-col :span="10">
                <p class="p-left font-number">{{ plate }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="14">
                <p class="p-left">车辆类型:</p>
            </el-col>
            <el-col :span="10">
                <p class="p-left font-number">{{ type }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="14">
                <p class="p-left">最大加注压力:</p>
            </el-col>
            <el-col :span="10">
                <p class="p-left font-number">{{ maxPressure }} <span>Mpa</span></p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="14">
                <p class="p-left">氢储量:</p>
            </el-col>
            <el-col :span="10">
                <p class="p-left font-number">{{ saveCount }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="14">
                <p class="p-left">载客量:</p>
            </el-col>
            <el-col :span="10">
                <p class="p-left font-number">{{ carrying }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="14">
                <p class="p-left">最大行驶速度:</p>
            </el-col>
            <el-col :span="10">
                <p class="p-left font-number">{{ maxSpeed }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="14">
                <p class="p-left">车辆唯一标识码:</p>
            </el-col>
            <el-col :span="10">
                <p class="p-left font-number">{{ vin }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="14">
                <p class="p-left">所属公司:</p>
            </el-col>
            <el-col :span="10">
                <p class="p-left font-number">{{ company }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="14">
                <p class="p-left">其他信息暂无:</p>
            </el-col>
            <el-col :span="10">
                <p class="p-left font-number">{{ other }}</p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
import {getFillMachineCarInformationByIdAndDeviceId} from "@/api/consumer-http";

export default {
    name: "FillHydrogenStationThirdCarInformation",
    data() {
        return {
            plate: 0,
            type: 0,
            maxPressure: 0,
            saveCount: 0,
            carrying: 0,
            maxSpeed: 0,
            vin: 0,
            company: 0,
            other: 0,
            id: this.$route.params.id
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let result = await getFillMachineCarInformationByIdAndDeviceId(this.id, 1);
                let data = result.data;
                this.plate = data.plate;
                this.type = data.type;
                this.maxPressure = data.max_pressure;
                this.saveCount = data.save_count;
                this.carrying = data.carrying;
                this.maxSpeed = data.max_speed;
                this.vin = data.vin;
                this.company = data.company;
                this.other = data.other;
            } catch (e) {
                this.plate = 0;
                this.type = 0;
                this.maxPressure = 0;
                this.saveCount = 0;
                this.carrying = 0;
                this.maxSpeed = 0;
                this.vin = 0;
                this.company = 0;
                this.other = 0;
            }
        },
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
