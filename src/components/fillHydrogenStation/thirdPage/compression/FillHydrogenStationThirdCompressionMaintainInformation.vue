<template>
    <el-row>
        <el-col :span="4">
            <p class="component-border-white p-title">维修信息</p>
        </el-col>
        <el-col :span="8" :offset="12">
            <element-border :height="50">
                <el-row>
                    <el-col :span="14" :offset="1">
                        <p class="p-title">诊断系统状态</p>
                    </el-col>
                    <el-col :span="9">
                        <p class="p-title t-green" style="padding-right: 2rem"  v-if="status()">开机</p>
                        <p class="p-title t-gray" style="padding-right: 2rem" v-else>关机</p>
                    </el-col>
                </el-row>
            </element-border>
        </el-col>
    </el-row>
    <el-row class="margin-top-10">
        <el-col>
            <element-border :height="850">
                <el-row>
                    <el-col :span="12">
                        <p class="p-title-sub">项目</p>
                    </el-col>
                    <el-col :span="12">
                        <p class="p-title-sub">备注</p>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 50px;">
                    <el-col :span="12">
                        <p class="p-sub-item">机组型号</p>
                    </el-col>
                    <el-col :span="12">
                        <p class="p-sub-item">{{ maintainInfo.type }}</p>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 50px;">
                    <el-col :span="12">
                        <p class="p-sub-item">维修开始时间</p>
                    </el-col>
                    <el-col :span="12">
                        <p class="p-sub-item">{{ maintainInfo.startTime }}</p>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 50px;">
                    <el-col :span="12">
                        <p class="p-sub-item">维修结束时间</p>
                    </el-col>
                    <el-col :span="12">
                        <p class="p-sub-item">{{ maintainInfo.endTime }}</p>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 50px;">
                    <el-col :span="12">
                        <p class="p-sub-item">维修人员姓名</p>
                    </el-col>
                    <el-col :span="12">
                        <p class="p-sub-item">{{ maintainInfo.repairerName }}</p>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 50px;">
                    <el-col :span="12">
                        <p class="p-sub-item">维修人员工号</p>
                    </el-col>
                    <el-col :span="12">
                        <p class="p-sub-item">{{ maintainInfo.repairerNum }}</p>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 50px;">
                    <el-col :span="12">
                        <p class="p-sub-item">维修人员电话</p>
                    </el-col>
                    <el-col :span="12">
                        <p class="p-sub-item">{{ maintainInfo.telNumber }}</p>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 50px;">
                    <el-col :span="12">
                        <p class="p-sub-item">维修类型</p>
                    </el-col>
                    <el-col :span="12">
                        <p class="p-sub-item">{{ maintainInfo.repairType }}</p>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 50px;">
                    <el-col :span="12">
                        <p class="p-sub-item">维修项目</p>
                    </el-col>
                    <el-col :span="12">
                        <p class="p-sub-item">{{ maintainInfo.repairDevice }}</p>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 50px;">
                    <el-col :span="12">
                        <p class="p-sub-item">维修原因</p>
                    </el-col>
                    <el-col :span="12">
                        <p class="p-sub-item">{{ maintainInfo.repairReason }}</p>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 50px;">
                    <el-col :span="12">
                        <p class="p-sub-item">维修内容</p>
                    </el-col>
                    <el-col :span="12">
                        <p class="p-sub-item">{{ maintainInfo.repairContent }}</p>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 50px;">
                    <el-col :span="12">
                        <p class="p-sub-item">维修机组型号</p>
                    </el-col>
                    <el-col :span="12">
                        <p class="p-sub-item">{{ maintainInfo.repairNum }}</p>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 50px;">
                    <el-col :span="12">
                        <p class="p-sub-item">其他维修项目</p>
                    </el-col>
                    <el-col :span="12">
                        <p class="p-sub-item">{{ maintainInfo.otherDevice }}</p>
                    </el-col>
                </el-row>
            </element-border>
        </el-col>
    </el-row>
</template>

<script>
import ElementBorder from "@c/public/ElementBorder";

export default {
    name: "FillHydrogenStationThirdCompressionMaintainInformation",
    props: {
        maintainInfo: {
            type: Object
        }
    },
    methods: {
        status() {
            return this.maintainInfo.status === 'true';
        }
    },
    components: {ElementBorder}
}
</script>

<style scoped>
.p-title {
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
    width: 120px;
}

.p-title-sub {
    height: 50px;
    line-height: 80px;
    font-size: 18px;
    font-weight: bold;
    padding-left: 2rem;
    color: #1abeca;
}

.p-sub-item {
    height: 50px;
    line-height: 20px;
    font-size: 18px;
    padding-left: 2rem;
    border-bottom: 1px white dashed;
}
</style>