<template>
    <element-border :height="40">
        <p class="p-component"><span class="t-green">{{ name }}</span> 燃料电池车-FC</p>
    </element-border>
</template>

<script>
export default {
    name: "VehicleThirdTitle",
    data() {
        return {
            name: this.$route.params.name,
        }
    },
}
</script>

<style scoped>

</style>
