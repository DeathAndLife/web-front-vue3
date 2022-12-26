<template>
    <el-row>
        <el-col :span="4">
            <p class="component-border-white p-title">故障信息</p>
        </el-col>
    </el-row>
    <el-row class="margin-top-10" :gutter="20">
        <el-col>
            <element-border :height="370">
                <el-row>
                    <el-col :span="3">
                        <p class="p-title-sub">机组型号</p>
                    </el-col>
                    <el-col :span="5">
                        <p class="p-title-sub">时间</p>
                    </el-col>
                    <el-col :span="4">
                        <p class="p-title-sub">状态</p>
                    </el-col>
                    <el-col :span="6">
                        <p class="p-title-sub">描述</p>
                    </el-col>
                    <el-col :span="6">
                        <p class="p-title-sub">建议</p>
                    </el-col>
                </el-row>
                <el-row class="margin-top-20" v-for="item in alarmInfo">
                    <el-col :span="3">
                        <p class="p-sub-item">{{ item.type }}</p>
                    </el-col>
                    <el-col :span="5">
                        <p class="p-sub-item">{{ item.time }}</p>
                    </el-col>
                    <el-col :span="4">
                        <p class="p-sub-item">{{ item.result }}</p>
                    </el-col>
                    <el-col :span="6">
                        <p class="p-sub-item">{{ item.explain }}</p>
                    </el-col>
                    <el-col :span="6">
                        <p class="p-sub-item">{{ item.advice }}</p>
                    </el-col>
                </el-row>
            </element-border>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "FillHydrogenStationThirdCompressionAlarmInformation",
    props: {
        alarmInfo: {
            type: Array
        }
    }
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
    text-align: center;
    color: #1abeca;
}

.p-sub-item {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    border-bottom: 1px white dashed;
}
</style>