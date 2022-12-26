<template>
    <element-border animation="top" :height="150">
        <el-row>
            <el-col :span="20" :offset="2">
                <el-input v-model="vin" placeholder="请输入VIN"></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4" :offset="10">
                <el-button @click="toVehicleSecondByVin()" type="primary" round>跳转</el-button>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
import {getVehicleSecondUrlByVin} from "@/api/consumer-http";

export default {
    name: "ToSecondByVin",
    data() {
        return {
            vin: '',
        }
    },
    methods: {
        async toVehicleSecondByVin() {
            let result = await getVehicleSecondUrlByVin({Vin: this.vin});
            let url = result.data;
            let id = url.split(this.vin)[1].split("/")[1];
            await this.$router.push({
                name: "vehicle second",
                params: {
                    name: this.vin,
                    id: id
                }
            })
        },
    }
}
</script>

<style>
.el-input__inner {
    background: transparent;
    text-align: center;
    border-bottom: 1px solid aqua;
    border-top: none;
    border-left: none;
    border-right: none;
    color: #0bff91;
    height: 80px;
    line-height: 80px;
    font-size: 20px;
}

.el-button {
    margin-top: 10px;
    line-height: 10px;
}
</style>