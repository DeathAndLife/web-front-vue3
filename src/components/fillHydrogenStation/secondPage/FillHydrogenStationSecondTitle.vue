<template>
    <element-border :height="40">
        <el-popover placement="bottom" :width="400" trigger="click">
            <template #reference>
                <p class="p-component"><span class="t-green">{{ name }}</span></p>
            </template>
            <el-row v-for="item in titles" :key="item.id">
                <el-col>
                    <p @click="toFillStation(item.name,item.id)" class="p-component">{{ item.name }}</p>
                </el-col>
            </el-row>
        </el-popover>
    </element-border>
</template>

<script>
import {getHydrogenStationAddress} from "@/api/consumer-http";

export default {
    name: "FillHydrogenStationSecondTitle",
    data() {
        return {
            name: this.$route.params.name,
            titles: []
        }
    },
    created() {
        this.setTitles();
    },
    methods: {
        async setTitles() {
            let result = await getHydrogenStationAddress();
            this.titles = result.data;
        },
        toFillStation(name, id) {
            this.$router.push({
                name: "fill second",
                params: {
                    name: name,
                    id: id
                }
            });
        }
    },
}
</script>

<style>
.el-popover.el-popper {
    box-shadow: 0 0 6px inset aqua;
    border-radius: 6px;
    border: none;
    background: rgba(0, 0, 0, 0.65);
}

.el-popper.is-light[data-popper-placement^=bottom] .el-popper__arrow::before {
    background: transparent;
    border-left: aqua 1px solid;
    border-top: aqua 1px solid;
}
</style>
<style scoped>
p:hover {
    cursor: pointer;
}

.t-green {
    color: #0bff91;
    font-size: 20px;
}
</style>
