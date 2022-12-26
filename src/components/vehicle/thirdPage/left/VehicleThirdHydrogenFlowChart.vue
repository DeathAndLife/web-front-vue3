<template>
    <element-border :height="260">
        <p class="p-component">氢气流量(30秒内)</p>
        <el-row>
            <el-col id="VehicleThirdHydrogenFlowChart" style="height: 220px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {line} from "@/assets/js/chart";
import {mapGetters} from "vuex";

export default {
    name: "VehicleThirdHydrogenFlowChart",
    data() {
        return {
            data: [this.$util.utilDataCalculation(30, 100, 20)],
            color: ["aqua"],
            title: ["氢气流量"],
            unit: ["时间(s)", "流量 g/s"],
            interValId: null,
            x: this.$util.utilXDate("second"),
            chart: null
        }
    },
    mounted() {
        this.chart = this.$chart.init(document.getElementById("VehicleThirdHydrogenFlowChart"));
        this.initData();
    },
    methods: {
        initData() {
            try {
                this.interValId = setInterval(() => {
                    let that = this;
                    if (that.$util.isEmpty(that.getterVehicleThirdH2Flow)) {
                        that.data = [that.$util.utilDataCalculation(30, 100, 20)];
                        that.x = that.$util.utilXDate("second");
                    } else {
                        that.data[0] = that.getterVehicleThirdH2Flow.value;
                        that.x = that.getterVehicleThirdH2Flow.date;
                    }
                }, 1000);
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
    computed: {
        ...mapGetters(["getterVehicleThirdH2Flow"]),
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
