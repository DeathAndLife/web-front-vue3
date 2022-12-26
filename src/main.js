import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as echarts from 'echarts'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import '@/assets/css/font.css'
import '@/assets/css/public.css'
import util from "@/assets/js/util";
import exception from "@/assets/js/exception"
import Scales from "@/components/public/Scales";
import TopNav from "@/components/public/TopNav";
import ElementBorder from "@/components/public/ElementBorder";
import TencentMap from "@/components/public/TencentMap";
import {ws} from "@/api/websocket-util";
import {getTokenForStorage, removeToken} from "@/api/token";
import {ElMessage} from 'element-plus'
import axios from 'axios'
// import tr from "element-plus/packages/locale/lang/tr";

const app = createApp(App)

axios.interceptors.request.use(
    config => {
        if (getTokenForStorage() !== null || getTokenForStorage() !== "") {
            config.headers['token'] = getTokenForStorage();
        }
        return config;
    },
    err => {
        throw true;
    });

axios.interceptors.response.use(
    response => {
        const code = response.data.code;
        if (code === 500 || code === 404 || code === 5000) {
            throw true;
        }
        if (code === 5001 || code === 5002 || code === 4000) {
            removeToken();
            if (code === 5001) {
                ElMessage.warning({
                    message: 'token已过期!请重新登录!',
                    type: 'warning',
                    center: true
                });
            }
            router.push("/login").then(r => {
                ElMessage.warning({
                    message: '页面跳转出现异常！请重试！' + r.message,
                    type: 'error',
                    center: true
                });
            });
        }
        return response;
    },
    err => {
        throw true;
        /*ElMessage.warning({
            message: '服务器异常,请检查! 状态码:' + err.message.split("code")[1],
            type: 'error',
            center: true
        });*/
    });

app.config.globalProperties.$chart = echarts;
app.config.globalProperties.$util = util;
app.config.globalProperties.$ws = ws;
app.config.globalProperties.$except = exception;

app.component(Scales.name, Scales)
app.component(TopNav.name, TopNav)
app.component(TencentMap.name, TencentMap)
app.component(ElementBorder.name, ElementBorder)

app.use(ElementPlus)
app.use(store).use(router).mount('#app')
