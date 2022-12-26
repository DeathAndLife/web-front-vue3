<template>
    <element-border :height="400">
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
    getSafetyContactInformationOfFillStationById
} from "@/api/consumer-http";

export default {
    name: "FillHydrogenStationSecondSafeInformation",
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
                let result = await getSafetyContactInformationOfFillStationById(this.id);
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

</style>
