import {createRouter, createWebHashHistory} from 'vue-router'
import {getTokenForStorage, getUsernameForStorage, verifyToken} from "@/api/token";
import {ElMessage} from 'element-plus'
import FirstPage from "@/views/FirstPage";
import ThirdPage from "@/views/ThirdPage";

const Login = () => import("@/views/Login")
const Index = () => import("@/views/Index")
const ProductionHydrogen = () => import("@/views/ProductionHydrogen")
const ProductionHydrogenSecond = () => import("@/views/ProductionHydrogenSecond")
const ProductionHydrogenDeviceSecond = () => import("@/views/ProductionHydrogenDeviceSecond")
const ProductionHydrogenDeviceThird = () => import("@/views/ProductionHydrogenDeviceThird")
const TransportHydrogen = () => import("@/views/TransportHydrogen")
const TransportHydrogenSecond = () => import("@/views/TransportHydrogenSecond")
const FillHydrogenStation = () => import("@/views/FillHydrogenStation")
const FillHydrogenStationSecond = () => import('@/views/FillHydrogenStationSecond')
const FillHydrogenStationThirdMachine = () => import('@/views/FillHydrogenStationThirdMachine')
const FillHydrogenStationThirdTank = () => import('@v/FillHydogrenStationThirdTank')
const FillHydrogenStationThirdCompression = () => import("@v/FillHydrogenStationThirdCompression")
const Vehicle = () => import('@/views/Vehicle')
const VehicleSecond = () => import('@/views/VehicleSecond')
const VehicleThird = () => import('@/views/VehicleThird')

const routes = [
    {
        path: '/',
        name: 'Login redirect',
        redirect: '/login',
        component: Login
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/index',
        name: 'index',
        component: Index
    },
    {
        path: '/production',
        name: 'production',
        component: FirstPage,
        redirect: '/production/first',
        children: [
            {
                path: 'first',
                name: 'production first',
                component: ProductionHydrogen
            },
            {
                path: 'second/:name/:id',
                name: 'production second',
                component: ProductionHydrogenSecond
            },
            {
                path: 'second-device/:name/:id',
                name: 'production second device',
                component: ProductionHydrogenDeviceSecond
            },{
                path: 'third-device/:name/:id',
                name: 'production third device',
                component: ProductionHydrogenDeviceThird
            }
        ]
    },
    {
        path: '/transport',
        name: 'transport',
        component: FirstPage,
        redirect: '/transport/first',
        children: [
            {
                path: 'first',
                name: 'transport first',
                component: TransportHydrogen
            },
            {
                path: 'second/:id/:plate',
                name: 'transport second',
                component: TransportHydrogenSecond
            }
        ]
    },
    {
        path: '/fill',
        name: 'fill',
        component: FirstPage,
        redirect: '/fill/first',
        children: [
            {
                path: 'first',
                name: 'fill first',
                component: FillHydrogenStation
            },
            {
                path: 'second/:name/:id',
                name: 'fill second',
                component: FillHydrogenStationSecond,
            },
            {
                path: 'third',
                name: 'fill third',
                component: ThirdPage,
                children: [
                    {
                        path: 'machine/:name/:id',
                        name: 'fill machine',
                        component: FillHydrogenStationThirdMachine,
                    },
                    {
                        path: 'tank/:name/:id',
                        name: 'fill tank',
                        component: FillHydrogenStationThirdTank
                    },
                    {
                        path: 'compression/:name/:id',
                        name: 'fill compression',
                        component: FillHydrogenStationThirdCompression
                    }
                ]
            }
        ]
    },
    {
        path: '/vehicle',
        name: 'vehicle',
        component: FirstPage,
        redirect: '/vehicle/first',
        children: [
            {
                path: 'first',
                name: 'vehicle first',
                component: Vehicle
            },
            {
                path: 'second/:name/:id',
                name: 'vehicle second',
                component: VehicleSecond
            },
            {
                path: 'third/:name/:id',
                name: 'vehicle third',
                component: VehicleThird
            }
        ]
    }


]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next();
    } else {
        let token = getTokenForStorage();
        if (token === null || token === '') {
            ElMessage.warning({
                message: '请先登录',
                type: 'warning',
                center: true
            });
            next('/login');
        } else {
            verifyToken({username: getUsernameForStorage()});
            next();
        }
    }
});

export default router
