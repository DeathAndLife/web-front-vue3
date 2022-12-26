<template>
    <element-border :height="260">
        <p class="p-component">输出功率(30秒内)</p>
        <el-row>
            <el-col id="VehicleThirdOutputPowerChart" style="height: 220px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {line} from "@/assets/js/chart";
import {mapGetters} from "vuex";

export default {
    name: "VehicleThirdOutputPowerChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(30,100,20)],
            color: ["orange"],
            title: ["输出功率"],
            unit: ["时间(s)", "功率 kW/s"],
            interValId: null,
            x: this.$util.utilXDate("second"),
            chart: null
        }
    },
    mounted() {
        this.chart = this.$chart.init(document.getElementById("VehicleThirdOutputPowerChart"));
        this.initData();
    },
    methods: {
        initData() {
            try {
                this.interValId = setInterval(() => {
                    let that = this;
                    if (that.$util.isEmpty(that.getterVehicleThirdOutPower)) {
                        that.data = [that.$util.utilDataCalculation(30, 100, 20)];
                        that.x = that.$util.utilXDate("second");
                    } else {
                        that.data[0] = that.getterVehicleThirdOutPower.value;
                        that.x = that.getterVehicleThirdOutPower.date;
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
        ...mapGetters(["getterVehicleThirdOutPower"]),
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
