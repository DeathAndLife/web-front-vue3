<template>
    <element-border :height="490">
        <p class="safe-title title-border-aqua">安全责任人</p>
        <div class="margin-top-10" v-for="(item,index) in persons">
            <el-row>
                <el-col>
                    <p class="p-component t-green">安全责任人 {{index}}</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <p class="p-component">姓名:</p>
                </el-col>
                <el-col :span="12">
                    <p class="p-component">{{item.name}}</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <p class="p-component">联系方式:</p>
                </el-col>
                <el-col :span="12">
                    <p class="p-component">{{item.contact}}</p>
                </el-col>
            </el-row>
        </div>
    </element-border>
</template>

<script>
import {
    getFillMachineSafetyContactInformationByIdAndDeviceId,
} from "@/api/consumer-http";

export default {
    name: "FillHydrogenStationThirdSafeInformation",
    data() {
        return {
            persons: [],
            id: this.$route.params.id
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let result = await getFillMachineSafetyContactInformationByIdAndDeviceId(this.id,1);
                this.persons = result.data;
            } catch (e) {
                this.persons = [
                    {
                        name: "__",
                        contact: "__"
                    }
                ]
            }
        }
    }
}
</script>

<style scoped>
.safe-title {
    font-size: 18px;
    height: auto;
    line-height: 100px;
    text-align: center;
    word-break: break-all;
}
</style>
