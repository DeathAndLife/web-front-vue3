<template>
    <el-row>
        <el-col :span="4">
            <p class="component-border-white p-title">实时信息</p>
        </el-col>
    </el-row>
    <el-row class="margin-top-10" :gutter="20">
        <el-col :span="12">
            <element-border :height="400">
                <el-row>
                    <el-col>
                        <p class="p-title-sub">油压(MPa)</p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <p class="p-title-sub-item">油压峰值 <br/> oliPeak</p>
                        <p class="p-title-sub-item-value">{{ realInfo.oilPeak }}</p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <p class="p-title-sub-item">油压谷值 <br/> oliValley</p>
                        <p class="p-title-sub-item-value">{{ realInfo.oilValley }}</p>
                    </el-col>
                </el-row>
            </element-border>
        </el-col>
        <el-col :span="12">
            <element-border :height="400">
                <el-row>
                    <el-col>
                        <p class="p-title-sub">杆载荷(N/m)</p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <p class="p-title-sub-item">杆载荷峰值 <br/> rodLoadPeak</p>
                        <p class="p-title-sub-item-value">{{ realInfo.rodLoadPeak }}</p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <p class="p-title-sub-item">杆载荷谷值 <br/> rodLoadValley</p>
                        <p class="p-title-sub-item-value">{{ realInfo.rodLoadValley }}</p>
                    </el-col>
                </el-row>
            </element-border>
        </el-col>
    </el-row>
</template>

<script>
import ElementBorder from "@c/public/ElementBorder";

export default {
    name: "FillHydrogenStationThirdCompressionRealInformation",
    props: {
        realInfo: {
            type: Object
        }
    },
    components: {ElementBorder}
}
</script>

<style scoped>
.p-title {
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
    width: 120px;
}

.p-title-sub {
    height: 80px;
    line-height: 80px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: #1abeca;
}

.p-title-sub-item {
    height: 60px;
    margin-top: 20px;
    font-size: 20px;
    text-align: center;
}

.p-title-sub-item-value {
    height: 60px;
    margin-top: 20px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
}
</style>