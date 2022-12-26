<template>
    <element-border :height="220" class="t-center">
        <el-row>
            <el-col :span="12">
                <p class="p-component">实时储氢罐温度:</p>
            </el-col>
            <el-col :span="12">
                <p class="font-number">0000</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">实时储氢罐压力:</p>
            </el-col>
            <el-col :span="12">
                <p class="font-number">0000</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">储氢容量:</p>
            </el-col>
            <el-col :span="12">
                <p class="font-number">0000</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">氢气泄漏:</p>
            </el-col>
            <el-col :span="12">
                <p class="font-number">0000</p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
export default {
    name: "TransportHydrogenSaveJar"
}
</script>

<style scoped>
p {
    line-height: 55px;
}
</style>
