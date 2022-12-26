<template>
    <element-border :height="400">
        <el-row>
            <el-col>
                <p class="p-component">储氢罐信息</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="16">
                <p class="p-left">当前状态:</p>
            </el-col>
            <el-col :span="8">
                <p class="p-component t-green">{{ status }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="16">
                <p class="p-left">当前压力:</p>
            </el-col>
            <el-col :span="8">
                <p class="p-component t-green">{{ pressure }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="16">
                <p class="p-left">当前温度:</p>
            </el-col>
            <el-col :span="8">
                <p class="p-component t-green">{{ temp }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="16">
                <p class="p-left">储氢量:</p>
            </el-col>
            <el-col :span="8">
                <p class="p-component t-green">{{ saveCount }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="16">
                <p class="p-left">储氢罐编码:</p>
            </el-col>
            <el-col :span="8">
                <p class="p-component t-green">{{ code }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="16">
                <p class="p-left">储氢罐生产商:</p>
            </el-col>
            <el-col :span="8">
                <p class="p-component t-green">{{ producer }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="16">
                <p class="p-left">储氢罐下次检验时间:</p>
            </el-col>
            <el-col :span="8">
                <p class="p-component t-green">{{ nextCheck }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="16">
                <p class="p-left">储氢罐安全阀下次检验时间:</p>
            </el-col>
            <el-col :span="8">
                <p class="p-component t-green">{{ safetyValveNextCheck }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <router-link
                    :to="{name: 'fill compression',params: { name: $route.params.name, id: $route.params.id }}">
                    <p class="p-component t-gold-number">更多储氢罐和压缩机信息</p>
                </router-link>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
import {getSaveHydrogenJarInformationById} from "@/api/consumer-http";

export default {
    name: "FillHydrogenStationSecondSaveJarInformation",
    data() {
        return {
            status: 0,
            pressure: 0,
            temp: 0,
            saveCount: 0,
            code: 0,
            producer: 0,
            nextCheck: 0,
            safetyValveNextCheck: 0,
            id: this.$route.params.id
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let result = await getSaveHydrogenJarInformationById(this.id);
                let data = result.data;
                this.safetyValveNextCheck = data.safety_valve_next_check;
                this.nextCheck = data.next_check;
                this.code = data.code;
                this.temp = data.temp;
                this.status = data.status;
                this.saveCount = data.save_count;
                this.pressure = data.pressure;
                this.producer = data.producer;
            } catch (e) {
                this.safetyValveNextCheck = "_";
                this.nextCheck = "_";
                this.code = "_";
                this.temp = "_";
                this.status = "_";
                this.saveCount = "_";
                this.pressure = "_";
                this.producer = "_";
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
