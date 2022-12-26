<template>
    <div style="height: 810px">
        <el-row :gutter="30" style="height: 80px">
            <el-col :span="6">
                <element-border :height="80">
                    <el-row>
                        <el-col>
                            <p class="p-component">氢气浓度</p>
                            <p class="p-component font-number">{{ topData.hydrogenMax }}<span>%</span></p>
                        </el-col>
                    </el-row>
                </element-border>
            </el-col>
            <el-col :span="6">
                <element-border :height="80">
                    <el-row>
                        <el-col>
                            <p class="p-component">氢气泄漏</p>
                            <p class="p-component font-number">{{ topData.hydrogenMax >= 0.4 ? '有' : "无" }}</p>
                        </el-col>
                    </el-row>
                </element-border>
            </el-col>
            <el-col :span="6">
                <element-border :height="80">
                    <el-row>
                        <el-col>
                            <p class="p-component">车辆状态</p>
                            <p class="p-component font-number">{{ vehicleState(topData.carStatus) }}</p>
                        </el-col>
                    </el-row>
                </element-border>
            </el-col>
            <el-col :span="6">
                <element-border :height="80">
                    <el-row>
                        <el-col>
                            <p class="p-component">预测寿命</p>
                            <p class="p-component font-number">{{ vehicle.life === 0 || vehicle.life > 100 ? 100 : 0 }}<span>%</span></p>
                        </el-col>
                    </el-row>
                </element-border>
            </el-col>
        </el-row>
        <el-row style="margin-top: 60px;height: 450px">
            <el-col>
                <router-link :to="{name: 'vehicle third',params: {name: $route.params.name,id: $route.params.id}}">
                    <el-image
                        :src="carImage"
                        :fit="fit">
                    </el-image>
                </router-link>
            </el-col>
        </el-row>
        <el-row :gutter="30" style="height: 80px">
            <el-col :span="6">
                <element-border :height="80">
                    <el-row>
                        <el-col>
                            <p class="p-component">电机控制器温度</p>
                            <p class="p-component font-number">{{ bottomData.motCtrlTemp }}<span>℃</span></p>
                        </el-col>
                    </el-row>
                </element-border>
            </el-col>
            <el-col :span="6">
                <element-border :height="80">
                    <el-row>
                        <el-col>
                            <p class="p-component">电机转速</p>
                            <p class="p-component font-number">{{ bottomData.motSpeed }}</p>
                        </el-col>
                    </el-row>
                </element-border>
            </el-col>
            <el-col :span="6">
                <element-border :height="80">
                    <el-row>
                        <el-col>
                            <p class="p-component">电机转矩</p>
                            <p class="p-component font-number">{{ bottomData.motTorque }}</p>
                        </el-col>
                    </el-row>
                </element-border>
            </el-col>
            <el-col :span="6">
                <element-border :height="80">
                    <el-row>
                        <el-col>
                            <p class="p-component">电机温度</p>
                            <p class="p-component font-number">{{ bottomData.motTemp }}<span>℃</span></p>
                        </el-col>
                    </el-row>
                </element-border>
            </el-col>
        </el-row>
        <el-row :gutter="30" style="margin-top: 60px; height: 80px;">
            <el-col :span="6">
                <element-border :height="80">
                    <el-row>
                        <el-col>
                            <p class="p-component">电池电压最高值</p>
                            <p class="p-component font-number">{{ bottomData.maxVolt }}<span>v</span></p>
                        </el-col>
                    </el-row>
                </element-border>
            </el-col>
            <el-col :span="6">
                <element-border :height="80">
                    <el-row>
                        <el-col>
                            <p class="p-component">电池电压最低值</p>
                            <p class="p-component font-number">{{ bottomData.minVolt }}<span>v</span></p>
                        </el-col>
                    </el-row>
                </element-border>
            </el-col>
            <el-col :span="6">
                <element-border :height="80">
                    <el-row>
                        <el-col>
                            <p class="p-component">电池温度最高值</p>
                            <p class="p-component font-number">{{ bottomData.maxTemp }}<span>v</span></p>
                        </el-col>
                    </el-row>
                </element-border>
            </el-col>
            <el-col :span="6">
                <element-border :height="80">
                    <el-row>
                        <el-col>
                            <p class="p-component">电池温度最低值</p>
                            <p class="p-component font-number">{{ bottomData.minTemp }}<span>℃</span></p>
                        </el-col>
                    </el-row>
                </element-border>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import carImage from "@/assets/img/car.png"
import {wsFindFCBottom, wsFindMid} from "@/api/consumer-ws";
import {JSONData} from "@/api/websocket-util";
import {mapState} from "vuex";

export default {
    name: "VehicleSecondCarInformation",
    data() {
        return {
            wsBottom: null,
            wsTop: null,
            fit: "scale-down",
            carImage: carImage,
            id: this.$route.params.id,
            bottomData: {
                maxTemp: 0,
                maxVolt: 0,
                minTemp: 0,
                minVolt: 0,
                motCtrlTemp: 0,
                motSpeed: 0,
                motTemp: 0,
                motTorque: 0
            },
            topData: {
                hydrogenMax: 0,
                carStatus: 0,
            }
        }
    },
    created() {
        this.initWs();
    },
    mounted() {
        this.receiveData();
    },
    unmounted() {
        this.wsBottom.close();
        this.wsTop.close();
    },
    methods: {
        initWs() {
            this.wsBottom = this.$ws(wsFindFCBottom(this.id))
            this.wsTop = this.$ws(wsFindMid(this.id))
        },
        receiveData() {
            const that = this;
            that.wsBottom.onmessage = (data) => {
                that.bottomData = JSONData(data).data;
            }
            that.wsTop.onmessage = (data) => {
                let result = JSONData(data).data;
                that.topData.hydrogenMax = result.h2MAX;
                that.topData.carStatus = result.veh_Status;
            }

        },
        vehicleState(str) {
            switch (str) {
                case 1:
                    return "正常";
                case 2:
                    return "熄火";
                case 3:
                    return "其它";
                case -1:
                    return "异常";
                case -2:
                    return "异常";
                default:
                    return "未知";
            }
        }
    },
    computed: {
        ...mapState(["vehicle"]),
    }
}
</script>

<style scoped>

</style>
