<template>
    <element-border animation="top" :height="160">
        <p class="p-component ">制氢厂监控(kg)</p>
        <el-row>
            <el-col :span="6">
                <p class="p-component">本日制氢量</p>
            </el-col>
            <el-col :span="6">
                <p class="font-number p-component">{{ dayProduct }}</p>
            </el-col>
            <el-col :span="6">
                <p class="p-component">本日售氢量</p>
            </el-col>
            <el-col :span="6">
                <p class="font-number p-component">{{ daySale }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <p class="p-component">本月制氢量</p>
            </el-col>
            <el-col :span="6">
                <p class="font-number p-component">{{ monthProduct }}</p>
            </el-col>
            <el-col :span="6">
                <p class="p-component">本月售氢量</p>
            </el-col>
            <el-col :span="6">
                <p class="font-number p-component">{{ monthSale }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <p class="p-component">本年制氢量</p>
            </el-col>
            <el-col :span="6">
                <p class="font-number p-component">{{ yearProduct }}</p>
            </el-col>
            <el-col :span="6">
                <p class="p-component">本年售氢量</p>
            </el-col>
            <el-col :span="6">
                <p class="font-number p-component">{{ yearSale }}</p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>

import {getMakeAndSaleHydrogen} from "@/api/consumer-http";

export default {
    name: "ProductionStatistical",
    data() {
        return {
            dayProduct: 0,
            monthProduct: 0,
            yearProduct: 0,
            daySale: 0,
            monthSale: 0,
            yearSale: 0,
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let result = await getMakeAndSaleHydrogen();
                let data = result.data;
                this.daySale = data.day_sale;
                this.monthSale = data.month_sale;
                this.yearSale = data.year_sale;
                this.dayProduct = data.day_make;
                this.monthProduct = data.month_make;
                this.yearProduct = data.year_make;
            } catch (e) {
                this.daySale = 0;
                this.monthSale = 0;
                this.yearSale = 0;
                this.dayProduct = 0;
                this.monthProduct = 0;
                this.yearProduct = 0;
            }
        }
    }
}
</script>

<style scoped>

</style>
