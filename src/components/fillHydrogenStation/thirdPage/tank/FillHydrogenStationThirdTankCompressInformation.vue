<template>
    <element-border :height="440">
        <p class="title-border-aqua p-component">压缩机</p>
        <el-row>
            <el-col :span="12">
                <p class="p-component">压缩机编码</p>
            </el-col>
            <el-col :span="12">
                <p class="p-component font-number">HBID-CQ-01</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">压缩机状态</p>
            </el-col>
            <el-col :span="12">
                <p class="p-component font-number">正常</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">压缩机进气压力</p>
            </el-col>
            <el-col :span="12">
                <p class="p-component font-number">0 <span>Mpa</span></p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">压缩机排气压力</p>
            </el-col>
            <el-col :span="12">
                <p class="p-component font-number">0 <span>Mpa</span></p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">压缩机排气温度</p>
            </el-col>
            <el-col :span="12">
                <p class="p-component font-number">0 <span>℃</span></p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">压缩机运行时间</p>
            </el-col>
            <el-col :span="12">
                <p class="p-component font-number">0 <span>min</span></p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
export default {
    name: "FillHydrogenStationThirdTankCompressInformation",
}
</script>

<style scoped>
.p-component {
    line-height: 70px;
}
</style>
