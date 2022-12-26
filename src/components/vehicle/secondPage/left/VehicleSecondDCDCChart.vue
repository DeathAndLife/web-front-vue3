<template>
    <element-border :height="260">
        <p class="p-component">DCDC电流-电压</p>
        <el-row>
            <el-col style="height: 220px" id="VehicleSecondDCDCChart"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {lineDouble} from "@/assets/js/chart";
import {wsDCV} from "@/api/consumer-ws";
import {JSONData} from "@/api/websocket-util";

export default {
    name: "VehicleSecondDCDCChart",
    data() {
        return {
            ws: null,
            id: this.$route.params.id,
            color: ["#50e3c2", "#f5a623"],
            title: ["电压", "电流"],
            data: [this.$util.utilDataCalculation(30, 240, 80), this.$util.utilDataCalculation(30, 10, 5)],
            unit: ["时间(min)", "电压/V", "电流/A"],
            x: this.$util.utilXDate("min")
        };
    },
    created() {
        this.initWs();
    },
    mounted() {
        this.receiveData();
    },
    unmounted() {
        this.ws.close();
    },
    methods: {
        initWs() {
            this.ws = this.$ws(wsDCV(this.id))
        },
        drawLine() {
            let chart = this.$chart.init(document.getElementById("VehicleSecondDCDCChart"));
            lineDouble(chart, this.x, this.data, this.title, this.color, this.unit);
            setTimeout(() => {
                window.onresize = () => {
                    chart.resize();
                };
            }, 200);
        },
        receiveData() {
            const that = this;
            that.drawLine();
            that.ws.onmessage = (data) => {
                let result = JSONData(data).data;
                that.formatData(result);
                that.drawLine();
            }
        },
        formatData(data) {
            let a = [];
            let b = [];
            let c = [];
            data.forEach(i => {
                a.push(i.totalVolt);
                b.push(i.totalCurr)
                c.push(i.data_hour_min);
            })
            this.data[0] = a;
            this.data[1] = b;
            this.x = c;
        }
    },
}
</script>

<style scoped>

</style>
