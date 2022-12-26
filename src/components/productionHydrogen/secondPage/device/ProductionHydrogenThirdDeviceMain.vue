<template>
    <element-border :height="900">
        <el-image
            style="transform: scale(1.1);margin-top: -180px;"
            :src="back"
            :fit="fit">
        </el-image>
    </element-border>
</template>

<script>
import back from "@/assets/img/tsinghua-device-2.png"
export default {
    name: "ProductionHydrogenThirdDeviceMain",
    data() {
        return {
            back: back,
            fit: "scale-down",
            id: this.$route.params.id,
            name: this.$route.params.name
        }
    }
}
</script>

<style scoped>

</style>