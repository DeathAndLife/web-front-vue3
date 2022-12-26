<template>
    <element-border :height="100">
        <p class="p-component">加氢机当日累计加氢次数</p>
        <p class="p-component font-number">{{ SPAData.times }} <span>次</span></p>
    </element-border>
    <element-border :height="100" class="margin-top-20">
        <p class="p-component">加氢机当日累计加氢量</p>
        <p class="p-component font-number">{{ SPAData.weight }} <span>kg</span></p>
    </element-border>
    <element-border :height="100" class="margin-top-20">
        <p class="p-component">加氢机当日累计加氢时长</p>
        <p class="p-component font-number">{{ SPAData.time }} <span>min</span></p>
    </element-border>
    <element-border :height="100" class="margin-top-20">
        <p class="p-component">加氢机当日平均加注时长</p>
        <p class="p-component font-number">{{ SPAData.time === 0 ? 0 : SPAData.time / SPAData.times }} <span>min</span></p>
    </element-border>
</template>

<script>
import {wsSPSAll} from "@/api/consumer-ws";
import {JSONData} from "@/api/websocket-util";

export default {
    name: "FillHydrogenStationThirdMachineDayData",
    data() {
        return {
            ws: null,
            id: this.$route.params.id,
            SPAData: {
                times: 0,
                time: 0,
                weight: 0
            }
        }
    },
    created() {
        this.initWs();
    },
    mounted() {
        this.receiveData();
    },
    methods: {
        initWs() {
            this.ws = this.$ws(wsSPSAll(this.id))
        },
        receiveData() {
            const that = this;
            that.ws.onmessage = (data) => {
                let result = JSONData(data);
                that.SPAData = result.data;
            }
        }
    },
    unmounted() {
        this.ws.close();
    }
}
</script>

<style scoped>
.p-component {
    font-size: 18px;
    height: auto;
    line-height: 50px;
    text-align: center;
    word-break: break-all;
}
</style>
