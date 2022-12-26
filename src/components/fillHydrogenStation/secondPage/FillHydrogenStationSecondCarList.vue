<template>
    <element-border :height="400">
        <el-row>
            <el-col>
                <p class="p-component">当日加氢车</p>
            </el-col>
        </el-row>
        <el-row class="title-border-aqua">
            <el-col :span="8">
                <p class="p-component">车牌号</p>
            </el-col>
            <el-col :span="8">
                <p class="p-component">加氢量/kg</p>
            </el-col>
            <el-col :span="8">
                <p class="p-component">日期</p>
            </el-col>
        </el-row>
        <el-row v-for="item in carList">
            <el-col :span="8">
                <p class="p-component">{{ item.plate }}</p>
            </el-col>
            <el-col :span="8">
                <p class="p-component font-number">{{ item.value }}</p>
            </el-col>
            <el-col :span="8">
                <p class="p-component">{{ item.date }}</p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
import {getFillHydrogenCarsById} from "@/api/consumer-http";

export default {
    name: "FillHydrogenStationSecondCarList",
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
                let result = await getFillHydrogenCarsById(this.id);
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
