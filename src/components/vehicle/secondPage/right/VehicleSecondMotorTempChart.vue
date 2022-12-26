<template>
    <element-border :height="260">
        <p class="p-component">驱动电机温度值</p>
        <el-row>
            <el-col id="VehicleSecondMotorTempChart" style="height: 220px"></el-col>
        </el-row>
    </element-border>
</template>

<script>
import {line} from "@/assets/js/chart";
import {wsTemp} from "@/api/consumer-ws";
import {JSONData} from "@/api/websocket-util";

export default {
    name: "VehicleSecondMotorTempChart",
    data() {
        return {
            ws: null,
            id: this.$route.params.id,
            data: [this.$util.utilDataCalculation(30, 100, 20)],
            color: ["orange"],
            title: ["温度"],
            unit: ["时间(min)", "温度/℃"],
            x: this.$util.utilXDate("min"),
        }
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
            this.ws = this.$ws(wsTemp(this.id));
        },
        receiveData() {
            const that = this;
            that.drawLine();
            that.ws.onmessage = (data) => {
                let result = JSONData(data).data;
                that.formatData(result);
                this.drawLine();
            }
        },
        drawLine() {
            let chart = this.$chart.init(document.getElementById("VehicleSecondMotorTempChart"));
            line(chart, this.x, this.data, this.color, this.title, this.unit);
            setTimeout(() => {
                window.onresize = () => {
                    chart.resize();
                };
            }, 200);
        },
        formatData(data) {
            let a = [];
            let b = [];
            data.forEach(i => {
                a.push(i.temp);
                b.push(i.data_hour_min);
            })
            this.data[0] = a;
            this.x = b;
        }
    }
}
</script>

<style scoped>

</style>
