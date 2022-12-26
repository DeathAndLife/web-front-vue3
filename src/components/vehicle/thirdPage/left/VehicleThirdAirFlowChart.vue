<template>
    <element-border :height="260">
        <p class="p-component">空气流量(30秒内)</p>
        <el-row>
            <el-col id="VehicleThirdAirFlowChart" style="height: 220px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {line} from "@/assets/js/chart";
import {mapGetters} from "vuex";

export default {
    name: "VehicleThirdAirFlowChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(30, 100, 20)],
            color: ["white"],
            title: ["空气流量"],
            x: this.$util.utilXDate("second"),
            unit: ["时间(s)", "流量 g/s"],
            interValId: null,
            chart: null
        }
    },
    mounted() {
        this.chart = this.$chart.init(document.getElementById("VehicleThirdAirFlowChart"));
        this.initData();
    },
    methods: {
        initData() {
            try {
                this.interValId = setInterval(() => {
                    let that = this;
                    if (that.$util.isEmpty(that.getterVehicleThirdAirFlow)) {
                        that.data = [that.$util.utilDataCalculation(30, 100, 20)];
                        that.x = that.$util.utilXDate("second");
                    } else {
                        that.data[0] = that.getterVehicleThirdAirFlow.value;
                        that.x = that.getterVehicleThirdAirFlow.date;
                    }
                }, 1000)
            } catch (e) {
                this.data = [this.$util.utilDataCalculation(30, 100, 20)];
                this.x = this.$util.utilXDate("second");
                this.drawLine();
            }
        },
        drawLine() {
            line(this.chart, this.x, this.data, this.color, this.title, this.unit);
            setTimeout(() => {
                window.onresize = () => {
                    this.chart.resize();
                };
            }, 200);
        }
    },
    watch: {
        x: {
            handler(newVal) {
                this.drawLine();
            }
        }
    },
    computed: {
        ...mapGetters(["getterVehicleThirdAirFlow"]),
    },
    unmounted() {
        clearInterval(this.interValId);
    }
}
</script>

<style scoped>

</style>
