<template>
    <scales>
        <el-container>
            <el-header>
                <TopNav/>
            </el-header>
            <el-main class="margin-top-20">
                <div :style="setTopHeight()">
                    <slot name="main"></slot>
                </div>
            </el-main>
            <el-footer :style="setFooterHeight()">
                <div style="height: 100%">
                    <slot name="footer"></slot>
                </div>
            </el-footer>
        </el-container>
    </scales>
</template>

<script>
export default {
    name: "LayoutTopDown",
    props: {
        top: {
            type: Number,
            default: 720
        },
        footer: {
            type: Number,
            default: 230
        }
    },
    methods: {
        setTopHeight() {
            return `height: ${this.top}px`;
        },
        setFooterHeight() {
            return `height: ${this.footer}px`;
        }
    }
}
</script>

<style scoped>
</style>
