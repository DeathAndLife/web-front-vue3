<template>
    <element-border :height="260">
        <p class="p-component">电推温度(30秒内)</p>
        <el-row>
            <el-col id="VehicleThirdElectricDriveTempChart" style="height: 220px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {line} from "@/assets/js/chart";
import {mapGetters} from "vuex";

export default {
    name: "VehicleThirdElectricDriveTempChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(30,100,20)],
            color: ["yellow"],
            title: ["电推温度"],
            unit: ["时间(s)", "单位/℃"],
            interValId: null,
            x: this.$util.utilXDate("second"),
            chart: null
        }
    },
    mounted() {
        this.chart = this.$chart.init(document.getElementById("VehicleThirdElectricDriveTempChart"));
        this.initData();
    },
    methods: {
        initData() {
            try {
                this.interValId = setInterval(() => {
                    let that = this;
                    if (this.$util.isEmpty(that.getterVehicleThirdElectricStackTemp)) {
                        that.data = [that.$util.utilDataCalculation(30, 100, 20)];
                        that.x = that.$util.utilXDate("second");
                    } else {
                        that.data[0] = that.getterVehicleThirdElectricStackTemp.value;
                        that.x = that.getterVehicleThirdElectricStackTemp.date;
                    }
                }, 1000)
            } catch (e) {
                this.data = [this.$util.utilDataCalculation(30, 100, 20)];
                this.x = this.$util.utilXDate("second");
                this.drawLine();
            }
        },
        drawLine() {
            line(this.chart,this.x,this.data,this.color,this.title,this.unit);
            setTimeout(() => {
                window.onresize = () => {
                    this.chart.resize();
                };
            }, 200);
        }
    },
    computed: {
        ...mapGetters(["getterVehicleThirdElectricStackTemp"]),
    },
    watch: {
        x: {
            handler(newVal) {
                this.drawLine();
            }
        }
    },
    unmounted() {
        clearInterval(this.interValId);
    }
}
</script>

<style scoped>

</style>
