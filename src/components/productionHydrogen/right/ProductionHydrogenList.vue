<template>
    <element-border animation="top" :height="720">
        <el-row style="border-bottom: 1px aqua solid">
            <el-col :span="12">
                <p class="p-component">制氢厂</p>
            </el-col>
            <el-col :span="6">
                <p class="p-component">储氢剩余量</p>
            </el-col>
            <el-col :span="6">
                <p class="p-component">储氢剩余比</p>
            </el-col>
        </el-row>
        <div v-for="item in formatData">
            <div v-if="item.id === 2000005">
                <el-row>
                    <el-col :span="12">
                        <router-link :to="{name: 'production second device',params: { id: item.id, name: item.name }}">
                            <p class="p-left" ref="productionName">{{ item.name }}</p>
                        </router-link>
                    </el-col>
                    <el-col :span="6">
                        <p class="p-component t-gold-number">{{ item.remain }} <span>kg</span></p>
                    </el-col>
                    <el-col :span="6">
                        <p class="p-component t-gold-number">{{ item.remainRate }} <span>%</span></p>
                    </el-col>
                </el-row>
            </div>
            <div v-else>
                <el-row>
                    <el-col :span="12">
                        <router-link :to="{name: 'production second',params: { id: item.id, name: item.name }}">
                            <p class="p-left" ref="productionName">{{ item.name }}</p>
                        </router-link>
                    </el-col>
                    <el-col :span="6">
                        <p class="p-component t-gold-number">{{ item.remain }} <span>kg</span></p>
                    </el-col>
                    <el-col :span="6">
                        <p class="p-component t-gold-number">{{ item.remainRate }} <span>%</span></p>
                    </el-col>
                </el-row>
            </div>
        </div>
    </element-border>
</template>

<script>
import {mapState} from "vuex";
export default {
    name: "ProductionHydrogenList",
    data() {
        return {
            productionRemainList: [
                {
                    name: "张家口望山制氢厂",
                    remain: 0,
                    remainRate: 0
                }, {
                    name: 'test2',
                    remain: 0,
                    remainRate: 0
                }, {
                    name: 'test3',
                    remain: 0,
                    remainRate: 0
                }
            ]
        }
    },
    computed: {
        ...mapState(["stateMapData"]),
        formatData() {
            let result = [];
            this.stateMapData.factory.forEach(i => {
                result.push({
                    name: i.name,
                    id: i.id,
                    remain: 0,
                    remainRate: 0
                })
            })
            return result;
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
