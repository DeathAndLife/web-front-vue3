<template>
    <element-border :height="110" class="t-center">
        <el-row>
            <el-col :span="12">
                <p class="p-component">车牌号:</p>
            </el-col>
            <el-col :span="12">
                <p class="t-aqua">{{ plate }}</p>
            </el-col>
            <el-col :span="12">
                <p class="p-component">最大储氢量:</p>
            </el-col>
            <el-col :span="12">
                <p class="font-number">___</p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
export default {
    name: "TransportHydrogenCarRegisterInformation",
    data() {
        return {
            id: this.$route.params.id,
            plate: this.$route.params.plate
        }
    }
}
</script>

<style scoped>
p {
    line-height: 55px;
    font-size: 18px;
}
</style>