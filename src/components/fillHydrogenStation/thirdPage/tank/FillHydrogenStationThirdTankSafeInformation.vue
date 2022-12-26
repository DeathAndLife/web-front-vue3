<template>
    <element-border :height="440">
        <el-row>
            <el-col>
                <p class="p-component font-number">储氢罐-安全责任人</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">姓名:</p>
            </el-col>
            <el-col :span="12">
                <p class="p-component">0</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">联系方式:</p>
            </el-col>
            <el-col :span="12">
                <p class="p-component">0</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <p class="p-component font-number">压缩机-安全责任人</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">姓名:</p>
            </el-col>
            <el-col :span="12">
                <p class="p-component">0</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">联系方式:</p>
            </el-col>
            <el-col :span="12">
                <p class="p-component">0</p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
export default {
    name: "FillHydrogenStationThirdTankSafeInformation"
}
</script>

<style scoped>
.p-component {
    line-height: 70px;
}
</style>
