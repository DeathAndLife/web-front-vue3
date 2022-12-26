<template>
    <div id="app">
        <router-view :key="key"/>
    </div>
</template>
<script>
export default {
    name: "NEVT",
    computed: {
        key() {
            return this.$route.name ? this.$route.name + +new Date() : this.$route + +new Date();
        }
    }
}
</script>
<style lang="less">
* {
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    color: white;
    font-size: 16px;
}

body,
html {
    height: 100%;
    text-size-adjust: 100% !important;
    backface-visibility: hidden;
    overflow: hidden;
}

#app {
    background: url(./assets/img/background.png) no-repeat fixed center;
    background-size: 100% 100%;
    height: 100%;
}
</style>
