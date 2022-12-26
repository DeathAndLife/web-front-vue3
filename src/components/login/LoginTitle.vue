<template>
    <transition name="el-fade-in-linear" :appear=true>
        <p class="title-top">科 技 冬 奥 大 数 据 监 管 平 台</p>
    </transition>
</template>

<script>
export default {
    name: "LoginTitle"
}
</script>

<style scoped>
.title-top {
    position: relative;
    width: 1000px;
    left: 50%;
    margin-left: -500px;
    text-align: center;
    font-size: 35px;
    top: 50px;
}
</style>
