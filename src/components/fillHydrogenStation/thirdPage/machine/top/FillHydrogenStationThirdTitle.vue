<template>
    <element-border :height="40">
        <p class="p-component"><span class="t-green">{{ name }}</span> 加氢站 <span class="t-green">{{ station.machine.id }}</span></p>
    </element-border>
</template>

<script>
import {mapState} from "vuex"
export default {
    name: "FillHydrogenStationThirdTitle",
    data() {
        return {
            name: this.$route.params.name,
        }
    },
    computed: {
        ...mapState(["station"]),
    }
}
</script>

<style scoped>

</style>
