<template>
    <element-border :height="220" class="t-center">
        <el-row>
            <el-col :span="12">
                <p class="p-component">实时车速:</p>
            </el-col>
            <el-col :span="12">
                <p class="font-number">0000</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">实时经纬度:</p>
            </el-col>
            <el-col :span="12">
                <p class="font-number">0000</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">制动器:</p>
            </el-col>
            <el-col :span="12">
                <p class="font-number">0000</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">预定路线:</p>
            </el-col>
            <el-col :span="12">
                <p class="font-number">0000</p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
export default {
    name: "TransportHydrogenCarLocation"
}
</script>

<style scoped>
p {
    line-height: 55px;
}
</style>
