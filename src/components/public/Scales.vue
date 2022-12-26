<template>
    <div class="scales" :style="scales">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "Scales",
    data() {
        return {
            scales: {
                transform: "translate3d(0, 0, 0) scale(1)",
            },
        };
    },
    methods: {
        winResize() {
            window.addEventListener("resize", () => {
                this.getHeight();
            });
        },
        getHeight() {
            let w = 1920;
            let h = 1080;
            let dw = document.documentElement.offsetWidth / w;
            let dh = document.documentElement.offsetHeight / h;
            let d = parseFloat(Math.min(dw, dh).toFixed(2));
            let x = parseInt(
                (document.documentElement.offsetWidth - w * d) / 2
            );
            this.scales = {
                transform: `translate3d(${x}px, 0, 0) scale(${d})`,
                transformOrigin: `0 0`,
            };
        },
        changeHeight() {
            this.getHeight();
            setTimeout(() => {
                this.winResize();
            }, 100);
        },
    },
    created() {
        this.changeHeight();
    }
};
</script>
<style>
.scales {
    width: 1920px;
    height: 1080px;
    overflow-y: hidden;
}
</style>
