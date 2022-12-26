<template>
    <element-border class="alarm-border" :height="230">
        <el-row>
            <el-col id="VehicleAlarmStateChart" style="height: 230px"></el-col>
        </el-row>
    </element-border>
</template>

<script>

import {line} from "@/assets/js/chart";
import {getVehicleAlarmStatistics} from "@/api/consumer-http";

export default {
    name: "VehicleMotorEngineChargeOther",
    data() {
        return {
            data: [this.$util.utilDataCalculation(12, 2000, 1000), this.$util.utilDataCalculation(12, 2000, 1000), this.$util.utilDataCalculation(12, 2000, 1000), this.$util.utilDataCalculation(12, 2000, 1000)],
            title: ["充电装置", "驱动电机", "电机", "其他"],
            color: ["aqua", "red", "orange","white"],
            x: this.$util.utilXDate("month"),
            unit: ["日期(月)",]
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
           try {
               let data = [[],[],[],[]];
               let x = [];
               let result = await getVehicleAlarmStatistics();
               for (let i = 0; i < result.length; i++) {
                   //chargeSum: 1, engSum: 0, motSum: 0, otherSum: 37, data_month_day:
                   data[0].push(result[i].chargeSum);
                   data[1].push(result[i].motSum);
                   data[2].push(result[i].engSum);
                   data[3].push(result[i].otherSum);
                   x.push(result[i].data_month_day)
               }
               this.data = data;
               this.x = x;
               this.drawLine();
           } catch (e) {
               this.drawLine();
           }
        },
        drawLine() {
            let chart = this.$chart.init(document.getElementById("VehicleAlarmStateChart"));
            line(chart, this.x, this.data, this.color, this.title, this.unit);
            setTimeout(() => {
                window.onresize = () => {
                    chart.resize();
                };
            }, 200);
        },
    },
}
</script>

<style scoped>
.alarm {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    margin-bottom: 5px;
    width: 90%;
    position: relative;
    margin-left: 5%;
}
</style>
