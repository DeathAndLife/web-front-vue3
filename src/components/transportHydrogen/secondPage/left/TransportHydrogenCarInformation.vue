<template>
    <element-border :height="220" class="t-center">
        <el-row>
            <el-col :span="12">
                <p class="p-component">车牌号:</p>
            </el-col>
            <el-col :span="12">
                <p class="font-number">0000</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">车架号:</p>
            </el-col>
            <el-col :span="12">
                <p class="font-number">0000</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">车型:</p>
            </el-col>
            <el-col :span="12">
                <p class="font-number">0000</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">最大载氢量:</p>
            </el-col>
            <el-col :span="12">
                <p class="font-number">0000</p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
export default {
    name: "TransportHydrogenCarInformation",
}
</script>

<style scoped>
p {
    line-height: 55px;
}
</style>
