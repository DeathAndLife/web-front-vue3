<template>
    <element-border :height="80">
        <el-row>
            <el-col :offset="2" :span="4">
                <p class="p-component">当日制氢量</p>
            </el-col>
            <el-col :span="4">
                <p class="p-component">当月制氢量</p>
            </el-col>
            <el-col :span="4">
                <p class="p-component">累计制氢量</p>
            </el-col>
            <el-col :span="4">
                <p class="p-component">当前储氢量</p>
            </el-col>
            <el-col :span="4">
                <p class="p-component">整体安全等级</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :offset="2" :span="4">
                <p class="p-component t-gold-number">0<span>kg</span></p>
            </el-col>
            <el-col :span="4">
                <p class="p-component t-gold-number">0<span>kg</span></p>
            </el-col>
            <el-col :span="4">
                <p class="p-component t-gold-number">0<span>kg</span></p>
            </el-col>
            <el-col :span="4">
                <p class="p-component t-gold-number">0<span>kg</span></p>
            </el-col>
            <el-col :span="4">
                <p class="p-component t-gold-number">0</p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>

export default {
    name: "ProductionHydrogenSecondDeviceData",
    data() {
        return {
            id: this.$route.params.id
        }
    },
}
</script>

<style scoped>

</style>
