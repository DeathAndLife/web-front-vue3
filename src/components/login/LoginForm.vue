<template>
    <div class="login-from-box">
        <el-row class="logo-box">
            <transition name="el-zoom-in-center" :appear=true>
                <el-col :span="8" :offset="8">
                    <el-image
                        style="width: 100%; height: 100%;"
                        :src="logo"
                        :fit="fit"></el-image>
                </el-col>
            </transition>
        </el-row>
        <el-row style="margin-top: 80px">
            <transition name="el-zoom-in-top" :appear=true>

                <el-col :span="6" :offset="9">
                    <el-input
                        type="text"
                        :input-style="inputStyle()"
                        placeholder="用户名"
                        autofocus="true"
                        v-model.trim="loginData.username"
                        clearable>
                    </el-input>
                </el-col>
            </transition>
        </el-row>

        <el-row style="margin-top: 50px">
            <transition name="el-zoom-in-top" :appear=true>

                <el-col :span="6" :offset="9">
                    <el-input
                        type="password"
                        :input-style="inputStyle()"
                        placeholder="密码"
                        v-model.trim="loginData.password"
                        clearable>
                    </el-input>
                </el-col>
            </transition>
        </el-row>
        <el-row style="margin-top: 20px">
            <transition name="el-fade-in-linear" :appear=true>

                <el-col :span="4" :offset="9">
                    <el-switch v-model="loginData.remember" active-text="记住我,下次自动登录" active-color="#13ce66"
                               inactive-color="gray"/>
                </el-col>
            </transition>
        </el-row>

        <el-row style="margin-top: 80px">
            <transition name="el-zoom-in-bottom" :appear=true>
                <el-col @mouseover="notifyButton()" :span="4" :offset="10">
                    <el-button :disabled="loginButton" @click="login()" style="width: 100%" type="success"
                               round>登录
                    </el-button>
                </el-col>
            </transition>
        </el-row>
    </div>
</template>

<script>
import logo from "@/assets/img/logo/tsinghua.png";
import {mapState, mapMutations} from "vuex";
import {h} from 'vue';
import {getLoginFailDateForStorage, isLoginFailForStorage, loginReq, setLoginFailForStorage} from "@/api/login";
import {
    getPasswordForStorage, getUsernameForStorage,
    setPasswordForSession,
    setPasswordForStorage,
    setTokenForSession,
    setTokenForStorage,
    setUsernameForSession,
    setUsernameForStorage
} from "@/api/token";
import {ElNotification, ElMessage} from "element-plus";
import {wsGetAlarm} from "@/api/alarm-ws";

export default {
    name: "LoginForm",
    data() {
        return {
            logo: logo,
            fit: "scale-down",
            loginData: {
                username: '',
                password: '',
                address: {
                    cityName: '',
                    cityId: '',
                    loginIP: ''
                },
                remember: false
            },
            loginFailMax: 4,
            loginButton: false,
            loginFailInterval: null
        }
    },
    mounted() {
        this.autoLogin();
        this.loginButtonHandler();
        this.loginInterval();
    },
    computed: {
        ...mapState(['stateLoginFail'])
    },
    methods: {
        ...mapMutations(['mutationLoginFail', 'mutationWs']),

        autoLogin() {
            let username = getUsernameForStorage();
            let password = getPasswordForStorage()
            if (username && password) {
                this.loginData.username = username;
                this.loginData.password = password;
                const that = this;
                const loading = this.$loading({
                    lock: true,
                    text: '正在自动登录...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                setTimeout(() => {
                    that.login();
                    loading.close();
                }, 2000);
            }
        },

        inputStyle() {
            return {
                height: "60px",
                fontSize: "18px",
                background: "rgba(255, 255, 255, 0.2)",
                border: "none",
                color: "white"
            }
        },

        async login() {
            this.loginButtonHandler();
            let res = await loginReq(this.loginData);
            if (res.code === 201) {
                if (this.loginData.remember) {
                    setTokenForStorage(res.data.token)
                    setUsernameForStorage(this.loginData.username)
                    setPasswordForStorage(this.loginData.password)
                } else {
                    setTokenForSession(res.data.token)
                    setUsernameForSession(this.loginData.username)
                    setPasswordForSession(this.loginData.password)
                }
                this.mutationWs(this.$ws(wsGetAlarm()));
                await this.$router.push("/index");
            } else {
                this.mutationLoginFail();
                this.loginFailHandler();
                ElNotification({
                    title: '登录失败',
                    message: h('i', {style: 'color: black'}, `${res.message}`),
                    type: 'error',
                    position: 'bottom-right',
                });
            }
        },
        loginFailHandler() {
            if (this.stateLoginFail > this.loginFailMax) {
                setLoginFailForStorage(60 * 1000);
                ElMessage.warning({
                    message: '登录失败次数过多，请一分钟后再试！',
                    type: 'error',
                    center: true
                });
                this.loginInterval();
            }
        },
        loginButtonHandler() {
            this.$nextTick(() => {
                this.loginButton = isLoginFailForStorage(Date.now());
            });

        },
        notifyButton() {
            if (this.loginButton) {
                ElMessage.warning({
                    message: "已禁止登录，请 " + getLoginFailDateForStorage() + " 后再试！",
                    type: 'warning',
                    center: true
                });
            }
        },
        loginInterval() {
            this.loginFailInterval = setInterval(() => {
                this.loginButtonHandler();
            }, 1000)
        },
        clearLoginFailInterval() {
            clearInterval(this.loginFailInterval);
        }
    },
    watch: {
        async loginButton(newVal) {
            if (!newVal) {
                this.clearLoginFailInterval();
            }
        }
    }
}
</script>

<style scoped>

.login-from-box {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    top: 100px;
    height: 800px;
    width: 100%;
    z-index: 2000;
}

.logo-box {
    margin-top: 50px;
}
</style>
