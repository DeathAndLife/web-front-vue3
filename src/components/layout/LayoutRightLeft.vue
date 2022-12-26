<template>
    <scales>
        <el-container>
            <el-header>
                <TopNav/>
            </el-header>
            <el-main class="margin-top-20">
                <div style="height: 970px">
                    <el-row style="height: 970px">
                        <el-col :span="left">
                            <slot name="left"></slot>
                        </el-col>
                        <el-col :span="right">
                            <slot name="right"></slot>
                        </el-col>
                    </el-row>
                </div>
            </el-main>
        </el-container>
    </scales>
</template>

<script>

export default {
    name: "LayoutRightLeft",
    props: {
        right: {
            type: Number,
            default: 6
        },
        left: {
            type: Number,
            default: 18
        }
    },
}
</script>

<style scoped>
</style>
