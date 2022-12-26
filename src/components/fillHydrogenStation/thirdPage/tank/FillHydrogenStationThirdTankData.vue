<template>
    <element-border :height="100">
        <p class="p-component">储氢总量</p>
        <p class="p-component font-number">0000 <span>kg</span></p>
    </element-border>
    <element-border :height="100" style="margin-top: 13px">
        <p class="p-component">储氢罐个数</p>
        <p class="p-component font-number">0000 <span>个</span></p>
    </element-border>
    <element-border :height="100" style="margin-top: 13px">
        <p class="p-component">储氢罐压力</p>
        <p class="p-component font-number">0000 <span>Mpa</span></p>
    </element-border>
    <element-border :height="100" style="margin-top: 14px">
        <p class="p-component">储氢罐温度</p>
        <p class="p-component font-number">0000 <span>℃</span></p>
    </element-border>
</template>

<script>
export default {
    name: "FillHydrogenStationThirdTankData"
}
</script>

<style scoped>

</style>
