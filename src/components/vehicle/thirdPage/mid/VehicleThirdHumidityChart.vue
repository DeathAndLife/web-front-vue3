<template>
    <element-border :height="260">
        <p class="p-component">增湿器湿度(30秒内)</p>
        <el-row>
            <el-col id="VehicleThirdHumidityChart" style="height: 220px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {line} from "@/assets/js/chart";
import {mapGetters} from "vuex";

export default {
    name: "VehicleThirdHumidityChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(30,100,20)],
            color: ["white"],
            title: ["增湿器湿度"],
            unit: ["时间(s)", "单位/%"],
            interValId: null,
            x: this.$util.utilXDate("second"),
            chart: null
        }
    },
    mounted() {
        this.chart = this.$chart.init(document.getElementById("VehicleThirdHumidityChart"));
        this.initData();
    },
    methods: {
        initData() {
            try {
                this.interValId = setInterval(() => {
                    let that = this;
                    if (that.$util.isEmpty(that.getterVehicleThirdHumidifierTemp)) {
                        that.data = [that.$util.utilDataCalculation(30, 100, 20)];
                        that.x = that.$util.utilXDate("second");
                    } else {

                        that.data[0] = that.getterVehicleThirdHumidifierTemp.value;
                        that.x = that.getterVehicleThirdHumidifierTemp.date;
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
        ...mapGetters(["getterVehicleThirdHumidifierTemp"]),
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
