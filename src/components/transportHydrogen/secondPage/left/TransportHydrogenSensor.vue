<template>
    <element-border :height="220" class="t-center">
        <el-row>
            <el-col :span="12">
                <p class="p-component">温度传感器检验时间:</p>
            </el-col>
            <el-col :span="12">
                <p class="font-number">0000</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">温度传感器有效时间:</p>
            </el-col>
            <el-col :span="12">
                <p class="font-number">0000</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">压力传感器检验时间:</p>
            </el-col>
            <el-col :span="12">
                <p class="font-number">0000</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">压力传感器有效时间:</p>
            </el-col>
            <el-col :span="12">
                <p class="font-number">0000</p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
export default {
    name: "TransportHydrogenSensor"
}
</script>

<style scoped>
p {
    line-height: 55px;
}
</style>
