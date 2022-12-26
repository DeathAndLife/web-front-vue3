<template>
    <element-border animation="top" :height="550">
        <el-row style="border-bottom: 1px aqua solid">
            <el-col>
                <p class="p-component">燃料电池汽车厂商列表</p>
            </el-col>
        </el-row>
        <el-row style="border-bottom: 1px aqua dashed;margin-top: 30px">
            <el-col>
                <p class="p-component">客车厂商列表</p>
            </el-col>
        </el-row>
        <div v-for="item in carList" :key="item.id">
            <el-row>
                <el-col :span="12">
                    <p class="p-component" ref="productionName">{{ item.name }}</p>
                </el-col>
                <el-col :span="6">
                    <p class="p-component t-gold-number">{{ item.number }}<span>辆</span></p>
                </el-col>
                <el-col :span="6">
                    <p class="p-component font-number">{{ item.online }}<span>辆</span></p>
                </el-col>
            </el-row>
        </div>
        <el-row style="border-bottom: 1px aqua dashed;margin-top: 40%;">
            <el-col>
                <p class="p-component">物流车厂商列表</p>
            </el-col>
        </el-row>
        <div v-for="item in logistics" :key="item.id">
            <el-row>
                <el-col :span="12">
                    <p class="p-component" ref="productionName">{{ item.name }}</p>
                </el-col>
                <el-col :span="6">
                    <p class="p-component t-gold-number">{{ item.number }}<span>辆</span></p>
                </el-col>
                <el-col :span="6">
                    <p class="p-component font-number">{{ item.online }}<span>辆</span></p>
                </el-col>
            </el-row>
        </div>
    </element-border>
</template>

<script>
import {getNumVeh} from "@/api/consumer-http";

export default {
    name: "VehicleVendorList",
    data() {
        return {
            logistics: [
                {
                    id: 1,
                    name: "北汽福田汽车股份有限公司",
                    number: 0,
                    online: 0,
                },
            ],
            carList: [
                {
                    id: 1,
                    name: "北汽福田汽车股份有限公司",
                    number: 0,
                    online: 0,
                }
            ],
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            let a = await getNumVeh();
            this.carList[0].number = a.data.numLvcb;
            this.carList[0].online = a.data.numLvcbol;
            this.logistics[0].number = a.data.numLvbv;
            this.logistics[0].online = a.data.numLvbvol;
        }
    }
}
</script>
<style scoped>
</style>
