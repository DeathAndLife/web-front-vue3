<template>
    <element-border :height="440">
        <p class="title-border-aqua p-component">储氢罐</p>
        <el-row>
            <el-col :span="12">
                <p class="p-component">储氢容器编码</p>
            </el-col>
            <el-col :span="12">
                <p class="p-component font-number">HBID-CQ-01</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">储氢罐压力</p>
            </el-col>
            <el-col :span="12">
                <p class="p-component font-number">PT021</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">储氢量</p>
            </el-col>
            <el-col :span="12">
                <p class="p-component font-number">0 <span>kg</span></p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">储氢罐下次检验时间</p>
            </el-col>
            <el-col :span="12">
                <p class="p-component font-number">0</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">储氢罐安全阀下次检验时间</p>
            </el-col>
            <el-col :span="12">
                <p class="p-component font-number">0</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">储氢罐压力表下次检验时间</p>
            </el-col>
            <el-col :span="12">
                <p class="p-component font-number">0</p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
export default {
    name: "FillHydrogenStationThirdTankInformation"
}
</script>

<style scoped>
.p-component {
    line-height: 70px;
}
</style>
