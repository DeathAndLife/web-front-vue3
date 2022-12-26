<template>
    <scales @keydown.enter="login()">
        <div>
            <el-row>
                <login-title/>
            </el-row>
            <transition name="el-zoom-in-center" :appear=true>
                <el-row>
                    <login-form ref="login"/>
                </el-row>
            </transition>
        </div>
    </scales>
</template>

<script>
import LoginTitle from "@/components/login/LoginTitle";
import LoginForm from "@/components/login/LoginForm";

export default {
    name: "Login",
    components: {LoginForm, LoginTitle},
    methods: {
        login() {
            this.$refs.login.login();
        }
    }
}
</script>

<style scoped>

</style>
