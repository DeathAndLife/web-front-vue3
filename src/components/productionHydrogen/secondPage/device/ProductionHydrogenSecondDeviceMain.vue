<template>
    <element-border :height="540">
        <router-link :to="{name: 'production third device',params: {id: id, name: name }}">
            <el-image
                style="margin-left: 80px;"
                :src="back"
                :fit="fit">
            </el-image>
        </router-link>
    </element-border>
</template>

<script>
import back from "@/assets/img/tsinghua-device.png"
export default {
    name: "ProductionHydrogenSecondDeviceMain",
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