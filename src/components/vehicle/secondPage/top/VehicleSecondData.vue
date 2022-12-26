<template>
    <element-border :height="80">
        <el-row>
            <el-col :span="4">
                <p class="p-component">车速</p>
            </el-col>
            <el-col :span="4">
                <p class="p-component">百公里氢耗</p>
            </el-col>
            <el-col :span="4">
                <p class="p-component">FC电压</p>
            </el-col>
            <el-col :span="4">
                <p class="p-component">FC电流</p>
            </el-col>
            <el-col :span="4">
                <p class="p-component">FC功率</p>
            </el-col>
            <el-col :span="4">
                <p class="p-component">电机功率</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4">
                <p class="p-component t-gold-number">{{carSpeed}} <span>km/h</span></p>
            </el-col>
            <el-col :span="4">
                <p class="p-component t-gold-number">{{carConsumerHydrogen}} <span>kg/100km</span></p>
            </el-col>
            <el-col :span="4">
                <p class="p-component t-gold-number">{{carFCVolt}} <span>v</span></p>
            </el-col>
            <el-col :span="4">
                <p class="p-component t-gold-number">{{carFCCurrent}} <span>A</span></p>
            </el-col>
            <el-col :span="4">
                <p class="p-component t-gold-number">{{(carFCVolt * carFCCurrent / 1000).toFixed(1)}} <span>kW</span></p>
            </el-col>
            <el-col :span="4">
                <p class="p-component t-gold-number">{{carMotorPower}} <span>kW</span></p>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
import {wsFindFCTop} from "@/api/consumer-ws";
import {JSONData} from "@/api/websocket-util";

export default {
    name: "VehicleSecondData",
    data() {
        return {
            ws: null,
            carSpeed: 0,
            carConsumerHydrogen: 0,
            carFCVolt: 0,
            carFCCurrent: 0,
            carMotorPower: 0,
            id: this.$route.params.id
        }
    },
    created() {
        this.initWs();
    },
    mounted() {
        this.receiveData();
    },
    methods: {
        initWs() {
            this.ws = this.$ws(wsFindFCTop(this.id))
        },
        receiveData() {
            const that = this;
            that.ws.onmessage = (data) => {
                let result = JSONData(data).data;
                that.carSpeed = result.speed;
                that.carMotorPower = result.mot_power;
                that.carFCVolt = result.fc_volt;
                that.carFCCurrent = result.fc_curr;
                that.carConsumerHydrogen = result.fc_fu_rate;
            }
        }
    }
}
</script>

<style scoped>

</style>
