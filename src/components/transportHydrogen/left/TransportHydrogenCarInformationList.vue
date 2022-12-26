<template>
    <element-border animation="top" :height="230" class="margin-top-20">
        <div class="title-fix">
            <el-row>
                <el-col :span="24">
                    <p class="p-component">运氢车信息列表</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6" v-for="item in titleList" :key="item">
                    <p class="p-component">{{ item }}</p>
                </el-col>
            </el-row>
        </div>
        <el-row v-for="item in dataList" :key="item.id">
            <el-col :span="6">
                <p class="p-component">{{ item.name }}</p>
            </el-col>
            <el-col :span="6">
                <router-link :to="{name: 'transport second',params: { id: item.id, plate: item.name }}">
                    <p class="p-component">{{ item.id }}</p>
                </router-link>
            </el-col>
            <el-col :span="6">
                <p class="p-component t-gold-number">{{ item.amount }}</p>
            </el-col>
            <el-col :span="6">
                <p class="p-component t-green" v-if="item.state === 1">{{ carState(item.state) }}</p>
                <p class="p-component" v-else>{{ carState(item.state) }}</p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>

import {wsCarrierInfo} from "@/api/consumer-ws";
import {JSONData} from "@/api/websocket-util";

export default {
    name: "TransportHydrogenCarInformationList",
    data() {
        return {
            titleList: ["车型", "车辆ID", "运氢量/kg", "状态"],
            carrierWs: null,
            dataList: [
                {
                    name: "测试运氢车1",
                    id: 200000,
                    amount: 22222,
                    state: 1
                },
                {
                    name: "测试运氢车2",
                    id: 200004,
                    amount: 456,
                    state: 0
                },
                {
                    name: "测试运氢车3",
                    id: 200005,
                    amount: 123,
                    state: 1
                },
            ]
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            this.carrierWs = this.$ws(wsCarrierInfo())
            this.receiveWsData();
        },
        receiveWsData() {
            const that = this;
            that.carrierWs.onmessage = (data) => {
                try {
                    let newData = data.data.replace(/(^\"*)|(\"*$)/g, "");
                    let result = JSON.parse(newData).data;
                    that.formatData(result);
                } catch (e) {
                    let result = JSONData(data);
                    that.formatData(result);
                }
            }
        },
        carState(state) {
            return state === 1 ? "运输中" : "未运输";
        },
        formatData(data) {
            let result = [];
            data.forEach(i => {
                result.push({
                    name: i.name,
                    id: i.id,
                    amount: i.weight.toFixed(1),
                    state: i.status
                });
            })
            this.dataList = result;
        }
    }

}
</script>

<style scoped>
</style>
