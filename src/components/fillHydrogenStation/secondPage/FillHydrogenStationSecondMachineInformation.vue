<template>
    <element-border :height="400">
        <el-row>
            <el-col>
                <p class="p-component">加氢机信息</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="14">
                <p class="p-left">当前状态:</p>
            </el-col>
            <el-col :span="10">
                <p class="p-component t-green">{{ status }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="14">
                <p class="p-left">当前压力:</p>
            </el-col>
            <el-col :span="10">
                <p class="p-component t-green">{{ pressure }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="14">
                <p class="p-left">当前温度:</p>
            </el-col>
            <el-col :span="10">
                <p class="p-component t-green">{{ temp }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="14">
                <p class="p-left">累计加氢次数:</p>
            </el-col>
            <el-col :span="10">
                <p class="p-component t-green">{{ fills }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="14">
                <p class="p-left">累计加氢量:</p>
            </el-col>
            <el-col :span="10">
                <p class="p-component t-green">{{ countFill }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="14">
                <p class="p-left">加氢机型号:</p>
            </el-col>
            <el-col :span="10">
                <p class="p-component t-green">{{ type }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="14">
                <p class="p-left">加氢机编码:</p>
            </el-col>
            <el-col :span="10">
                <p class="p-component t-green">{{ code }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="14">
                <p class="p-left">加氢机生产商:</p>
            </el-col>
            <el-col :span="10">
                <p class="p-component t-green">{{ producer }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <router-link :to="{name: 'fill machine',params: { name: $route.params.name, id: $route.params.id }}">
                    <p class="p-component t-gold-number">更多加氢机信息</p>
                </router-link>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
import {getFillMachineInformationById} from "@/api/consumer-http";

export default {
    name: "FillHydrogenStationSecondMachineInformation",
    data() {
        return {
            status: 0,
            pressure: 0,
            temp: 0,
            fills: 0,
            countFill: 0,
            type: 0,
            code: 0,
            producer: 0,
            id: this.$route.params.id
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let result = await getFillMachineInformationById(this.id);
                let data = result.data;
                this.status = data.status;
                this.pressure = data.pressure;
                this.temp = data.temp;
                this.fills = data.fills;
                this.countFill = data.count_fill;
                this.type = data.type;
                this.code = data.code;
                this.producer = data.producer;
            } catch (e) {
                this.status = "_";
                this.pressure = "_";
                this.temp = "_";
                this.fills = "_";
                this.countFill = "_";
                this.type = "_";
                this.code = "_";
                this.producer = "_";
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
