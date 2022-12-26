<template>
    <element-border :height="220" class="t-center">
        <el-row>
            <el-col :span="12">
                <p class="p-component">氢气来源:</p>
            </el-col>
            <el-col :span="12">
                <p class="font-number">0000</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">氢气去向:</p>
            </el-col>
            <el-col :span="12">
                <p class="font-number">0000</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">运氢量:</p>
            </el-col>
            <el-col :span="12">
                <p class="font-number">0000</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">预计时长:</p>
            </el-col>
            <el-col :span="12">
                <p class="font-number">0000</p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
export default {
    name: "TransportHydrogenInformation"
}
</script>

<style scoped>
p {
    line-height: 55px;
}
</style>
