<template>
    <element-border :height="440">
        <el-row v-for="item in 10">
            <el-col>
                <p class="p-component t-gold-number">{{item}}<span>号压缩机</span></p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
export default {
    name: "FillHydrogenStationThirdTankCompressList"
}
</script>

<style scoped>
.p-component {
    line-height: 70px;
    border-bottom: 1px dashed white;
}
</style>
