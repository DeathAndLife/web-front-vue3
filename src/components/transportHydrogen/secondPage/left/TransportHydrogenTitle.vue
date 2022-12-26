<template>
    <element-border :height="60">
        <p class="p-component">运氢车 <span class="t-green font-number">{{ id }}</span> 详细信息</p>
    </element-border>
</template>

<script>
export default {
    name: "TransportHydrogenTitle",
    data() {
        return {
            id: this.$route.params.id
        }
    }
}
</script>

<style scoped>
p {
    font-size: 18px;
    line-height: 60px;
    height: 60px;
}
</style>
