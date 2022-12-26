<template>
    <element-border :height="230">
        <el-row>
            <el-col :span="12">
                <p class="p-component">燃料电池车车型分布</p>
                <el-row>
                    <el-col id="VehicleDistributionType" style="height: 190px"></el-col>
                </el-row>
            </el-col>
            <el-col :span="12">
                <p class="p-component">燃料电池车地区分布</p>
                <el-row>
                    <el-col id="VehicleDistributionArea" style="height: 190px"></el-col>
                </el-row>
            </el-col>
        </el-row>
    </element-border>
</template>

<script>
import {carDistribution} from "@/assets/js/chart";
import {getNumVeh, getVehicleAreaType} from "@/api/consumer-http";

export default {
    name: "VehicleDistributionChart",
    data() {
        return {
            colorType: ["#f5a623", "#bd10e0"],
            colorArea: ["#50e3c2", "#C25EC4"],
            nameType: ["物流", "客车"],
            nameArea: ["北京", "张家口"],
            dataType: [0],
            dataArea: [0],
            beijing: 0,
            zhangjiakou: 0,
        };
    },
    mounted() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                let vehicleType = await getNumVeh();
                let vehicleArea = await getVehicleAreaType();
                this.dataType[0] = vehicleType.data.numLvbv;
                this.dataType[1] = vehicleType.data.numLvcb;
                this.beijing = vehicleArea.data.beijing;
                this.zhangjiakou = vehicleArea.data.zhangjiakou;
                this.drawLine();
            } catch (e) {
                this.drawLine();
            }
        },
        drawLine() {
            let areaDta = [];
            areaDta[0] = this.beijing;
            areaDta[1] = this.zhangjiakou;
            let type = this.$chart.init(
                document.getElementById("VehicleDistributionType")
            );
            let area = this.$chart.init(
                document.getElementById("VehicleDistributionArea")
            );
            carDistribution(type, this.dataType, this.colorType, this.nameType, "辆");
            carDistribution(area, areaDta, this.colorArea, this.nameArea, "辆");
            setTimeout(() => {
                window.onresize = () => {
                    type.resize();
                    area.resize();
                };
            }, 200);
        },
        calculate() {
            let addr = this.dataArea;
            for (let i = 0; i < addr.length; i++) {
                //北京位于东经115.7°-117.4°，北纬39.4°-41.6°
                if (addr[i].latitude >= 39.4 && addr[i].latitude <= 41.6 && addr[i].longitude >= 115.7 && addr[i].latitude <= 117.4) {
                    this.beijing++;
                }
                //河北张家口市介于东经113°50′～116°30′，北纬39°30′～42°10′之间
                if (addr[i].latitude >= 39.30 && addr[i].latitude <= 42.10 && addr[i].longitude >= 113.50 && addr[i].latitude <= 116.30) {
                    this.zhangjiakou++;
                }
            }
        }
    }
}
</script>

<style scoped>

</style>
