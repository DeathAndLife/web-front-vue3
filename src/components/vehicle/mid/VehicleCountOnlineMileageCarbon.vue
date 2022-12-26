<template>
    <element-border animation="top" :height="80" class="box">
        <el-row>
            <el-col :span="6">
                <el-row>
                    <el-col>
                        <p class="p-component">车辆总数</p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <p class="t-gold-number p-component">{{ carCount }}</p>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="6">
                <el-row>
                    <el-col>
                        <p class="p-component">在线车辆</p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <p class="t-gold-number p-component">{{ onlineCars }}</p>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="6">
                <el-row>
                    <el-col>
                        <p class="p-component">累计里程</p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <p class="t-gold-number p-component">{{ mileageAndCarbon.mileage }}<span>km</span></p>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="6">
                <el-row>
                    <el-col>
                        <p class="p-component">累计碳减排</p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <p class="t-gold-number p-component">{{ mileageAndCarbon.carbon }}<span>kg</span></p>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
import {getCarCount, getMileageSumCarbonLess, getOnlineCarCount} from "@/api/consumer-http";
import {mapState, mapActions} from "vuex";

export default {
    name: "VehicleCountOnlineMileageCarbon",
    data() {
        return {
            carCount: 0,
            onlineCars: 0,
            mileageAndCarbon: {
                mileage: 0,
                carbon: 0
            }
        }
    },
    created() {
        this.initData();
    },
    mounted() {

    },
    computed: {
        ...mapState(["stateMapData"]),
    },
    methods: {
        ...mapActions(["actionMapDataVehicleCarCount"]),
        initData() {
            this.carCountFun();
            this.mileageFun();
            this.onlineFun();
        },
        async carCountFun() {
            let carCount = await getCarCount();
            this.carCount = carCount.data;
            this.actionMapDataVehicleCarCount(carCount.data);
        },
        async mileageFun() {
            let mileageAndCarbon = await getMileageSumCarbonLess();
            this.mileageAndCarbon.mileage = mileageAndCarbon.data.mileage;
            this.mileageAndCarbon.carbon = mileageAndCarbon.data.cumulative_reduction;
        },
        async onlineFun() {
            let online = await getOnlineCarCount();
            this.onlineCars = online.data;
        }
    }
}
</script>

<style scoped>
p {
    font-size: 18px;
    height: 40px;
    line-height: 40px;
    text-align: center;
}

.box {
    width: 98%;
    margin-left: 1%;
}
</style>
