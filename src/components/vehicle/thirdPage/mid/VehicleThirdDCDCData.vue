<template>
    <div style="height: 535px">
        <el-col :span="4">
            <el-row :gutter="30" style="margin-top: 60px; height: 80px;">
                <el-col>
                    <element-border :height="80">
                        <el-col>
                            <el-row>
                                <el-col>
                                    <p class="p-component">H2流量</p>
                                </el-col>
                                <el-col>
                                    <p class="p-component font-number">{{ getterVehicleThirdDCDCData.h2Flow }} <span>g/s</span></p>
                                </el-col>
                            </el-row>
                        </el-col>
                    </element-border>
                </el-col>
                <el-col style="margin-top: 10px">
                    <element-border :height="80">
                        <el-col>
                            <el-row>
                                <el-col>
                                    <p class="p-component">H2温度</p>
                                </el-col>
                                <el-col>
                                    <p class="p-component font-number">{{ getterVehicleThirdDCDCData.h2Temp }} <span>℃</span></p>
                                </el-col>
                            </el-row>
                        </el-col>
                    </element-border>
                </el-col>
                <el-col style="margin-top: 10px">
                    <element-border :height="80">
                        <el-col>
                            <el-row>
                                <el-col>
                                    <p class="p-component">H2入口压力</p>
                                </el-col>
                                <el-col>
                                    <p class="p-component font-number">{{ getterVehicleThirdDCDCData.h2InPressure }} <span>MPa</span></p>
                                </el-col>
                            </el-row>
                        </el-col>
                    </element-border>
                </el-col>
                <el-col style="margin-top: 10px">
                    <element-border :height="80">
                        <el-col>
                            <el-row>
                                <el-col>
                                    <p class="p-component">H2出口压力</p>
                                </el-col>
                                <el-col>
                                    <p class="p-component font-number">{{ getterVehicleThirdDCDCData.h2OutPressure }} <span>MPa</span></p>
                                </el-col>
                            </el-row>
                        </el-col>
                    </element-border>
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="16">
            <el-row>
                <el-col>
                    <el-image
                        :src="carImage"
                        :fit="fit">
                    </el-image>
                </el-col>
            </el-row>
            <el-row :gutter="10" style="margin-top: 60px; height: 80px;">
                <el-col :span="6">
                    <element-border :height="80">
                        <el-col>
                            <el-row>
                                <el-col>
                                    <p class="p-component">散热风扇状态</p>
                                </el-col>
                                <el-col>
                                    <p class="p-component font-number">{{ getterVehicleThirdDCDCData.fanStatus }}</p>
                                </el-col>
                            </el-row>
                        </el-col>
                    </element-border>
                </el-col>
                <el-col :span="6">
                    <element-border :height="80">
                        <el-col>
                            <el-row>
                                <el-col>
                                    <p class="p-component">水泵流量</p>
                                </el-col>
                                <el-col>
                                    <p class="p-component font-number">{{ getterVehicleThirdDCDCData.waterFlow }} <span>g/s</span></p>
                                </el-col>
                            </el-row>
                        </el-col>
                    </element-border>
                </el-col>
                <el-col :span="6">
                    <element-border :height="80">
                        <el-col>
                            <el-row>
                                <el-col>
                                    <p class="p-component">增湿器湿度</p>
                                </el-col>
                                <el-col>
                                    <p class="p-component font-number">{{ getterVehicleThirdDCDCData.humidifierHumidity }} <span>%</span></p>
                                </el-col>
                            </el-row>
                        </el-col>
                    </element-border>
                </el-col>
                <el-col :span="6">
                    <element-border :height="80">
                        <el-col>
                            <el-row>
                                <el-col>
                                    <p class="p-component">增湿器温度</p>
                                </el-col>
                                <el-col>
                                    <p class="p-component font-number">{{ getterVehicleThirdDCDCData.humidifierTemp }} <span>%</span></p>
                                </el-col>
                            </el-row>
                        </el-col>
                    </element-border>
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="4">
            <el-row :gutter="30" style="margin-top: 60px; height: 80px;">
                <el-col>
                    <element-border :height="80">
                        <el-col>
                            <el-row>
                                <el-col>
                                    <p class="p-component">Air流量</p>
                                </el-col>
                                <el-col>
                                    <p class="p-component font-number">{{ getterVehicleThirdDCDCData.airFlow }} <span>g/s</span></p>
                                </el-col>
                            </el-row>
                        </el-col>
                    </element-border>
                </el-col>
                <el-col style="margin-top: 10px">
                    <element-border :height="80">
                        <el-col>
                            <el-row>
                                <el-col>
                                    <p class="p-component">Air温度</p>
                                </el-col>
                                <el-col>
                                    <p class="p-component font-number">{{ getterVehicleThirdDCDCData.airTemp }} <span>℃</span></p>
                                </el-col>
                            </el-row>
                        </el-col>
                    </element-border>
                </el-col>
                <el-col style="margin-top: 10px">
                    <element-border :height="80">
                        <el-col>
                            <el-row>
                                <el-col>
                                    <p class="p-component">Air入口压力</p>
                                </el-col>
                                <el-col>
                                    <p class="p-component font-number">{{ getterVehicleThirdDCDCData.airInPressure }} <span>MPa</span></p>
                                </el-col>
                            </el-row>
                        </el-col>
                    </element-border>
                </el-col>
                <el-col style="margin-top: 10px">
                    <element-border :height="80">
                        <el-col>
                            <el-row>
                                <el-col>
                                    <p class="p-component">Air出口压力</p>
                                </el-col>
                                <el-col>
                                    <p class="p-component font-number">{{ getterVehicleThirdDCDCData.airOutPressure }} <span>MPa</span></p>
                                </el-col>
                            </el-row>
                        </el-col>
                    </element-border>
                </el-col>
            </el-row>
        </el-col>
    </div>
</template>

<script>
import carImage from "@/assets/img/fc.png";
import {mapGetters} from "vuex";

export default {
    name: "VehicleThirdDCDCData",
    data() {
        return {
            fit: "scale-down",
            carImage: carImage,
        }
    },
    computed: {
        ...mapGetters(["getterVehicleThirdDCDCData"]),
    },
}
</script>

<style scoped>

</style>
