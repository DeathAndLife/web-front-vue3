<template>
    <element-border :height="360">
        <el-row>
            <el-col>
                <p class="t-aqua plate">{{ plate }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <el-image
                    style="width: 100%; height: 100%;"
                    :src=carImage
                    :fit="fit"></el-image>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
import carImage from "@/assets/img/carrier.png"

export default {
    name: "TransportHydrogenCarImage",
    data() {
        return {
            fit: "scale-down",
            carImage: carImage,
            plate: this.$route.params.plate
        }
    },
}
</script>

<style scoped>
.plate {
    font-size: 30px;
    text-align: center;
    line-height: 80px;
}
</style>
