<template>
    <element-border :height="40">
        <p class="p-component font-number">{{ name }} <span>加氢站</span></p>
    </element-border>
</template>
<script>
export default {
    name: "FillHydrogenStationThirdCompressionTile",
    data() {
        return {
            name: this.$route.params.name
        }
    }
}
</script>

<style scoped>

</style>