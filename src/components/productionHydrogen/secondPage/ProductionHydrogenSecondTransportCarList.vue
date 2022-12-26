<template>
    <element-border :height="400">
        <el-row>
            <el-col>
                <p class="p-component">当日运氢车</p>
            </el-col>
        </el-row>
        <el-row class="title-border-aqua">
            <el-col :span="8">
                <p class="p-component">车牌号</p>
            </el-col>
            <el-col :span="8">
                <p class="p-component">运氢量/kg</p>
            </el-col>
            <el-col :span="8">
                <p class="p-component">日期</p>
            </el-col>
        </el-row>
        <el-row v-for="item in carList">
            <el-col :span="8">
                <p class="p-component">{{item.plate}}</p>
            </el-col>
            <el-col :span="8">
                <p class="p-component font-number">{{item.value}}</p>
            </el-col>
            <el-col :span="8">
                <p class="p-component">{{item.date}}</p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
import {getTransportHydrogenInfoVoById} from "@/api/consumer-http";

export default {
    name: "ProductionHydrogenSecondTransportCarList",
    data() {
        return {
            carList: [],
            id: this.$route.params.id
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let result = await getTransportHydrogenInfoVoById(this.id);
                this.carList = result.data;
            } catch (e) {
                this.carList = [];
            }
        }
    }
}
</script>

<style scoped>

</style>
