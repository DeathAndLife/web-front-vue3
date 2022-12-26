<template>
    <element-border :height="80">
        <el-row>
            <el-col :span="12">
                <p class="p-component">故障信息:</p>
            </el-col>
            <el-col :span="12">
                <p class="p-component">{{ getterVehicleThirdAlarmAndStatus.alarm }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <p class="p-component">FC状态:</p>
            </el-col>
            <el-col :span="12">
                <p class="p-component">{{ getterVehicleThirdAlarmAndStatus.fcStatus }}</p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>

import {mapGetters} from "vuex";

export default {
    name: "VehicleThirdFCAlarmInformation",
    computed: {
        ...mapGetters(["getterVehicleThirdAlarmAndStatus"]),
    },
}
</script>

<style scoped>

</style>
