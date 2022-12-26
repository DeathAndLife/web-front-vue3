<template>
    <transition :name="setAnimation()" :appear=true>
        <div class="component-border" :style="setHeight()">
            <el-scrollbar :height="setHeight()">
                <slot></slot>
            </el-scrollbar>
        </div>
    </transition>
</template>

<script>
export default {
    name: "ElementBorder",
    props: {
        height: {
            type: Number,
            default: 100
        },
        animation: {
            type: String,
            default: "bottom"
        },
        border: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        setHeight() {
            return `height: ${this.height}px`;
        },
        setAnimation() {
            return `el-zoom-in-${this.animation}`
        }
    }
}
</script>

<style scoped>

</style>
