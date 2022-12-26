import {createStore} from 'vuex'
import {ws} from '@/api/websocket-util'
import {wsGetAlarm} from "@/api/alarm-ws";

export default createStore({
    state: {
        stateLoginFail: 0,
        stateTopNavData: {
            alarmVisible: false,
            alarmData: {
                data: [],
                isNull: 0
            },
            ws: ws(wsGetAlarm())
        },
        stateMapData: {
            factory: [],
            vehicle: {
                carCount: 0,
                online: [],
                offline: []
            },
            station: [],
            carrier: []
        },
        vehicle: {
            life: 0,
            third: {
                airFlow: {},
                alarmAndStatus: {},
                dCDCData: {},
                electricStackTemp: {},
                fcRealData: {},
                h2Flow: {},
                humidifierTemp: {},
                outPower: {},
            }
        },
        station: {
            machine: {
                id: ""
            }
        }
    },
    mutations: {
        mutationLoginFail() {
            this.state.stateLoginFail++;
        },
        mutationTopNavDataAlarmVisible() {
            this.state.stateTopNavData.alarmVisible = !this.state.stateTopNavData.alarmVisible;
        },
        mutationWs(state, ws) {
            this.state.stateTopNavData.ws = ws;
        },
    },
    actions: {
        actionVehicleThirdData(state, data) {
            this.state.vehicle.third = data;
        },
        actionsAlarmData(state, data) {
            this.state.stateTopNavData.alarmData = data;
        },
        actionMapDataOnline(state, data) {
            this.state.stateMapData.vehicle.online = data;
        },
        actionMapDataOffline(state, data) {
            this.state.stateMapData.vehicle.offline = data;
        },
        actionMapDataFactory(state, data) {
            this.state.stateMapData.factory = data;
        },
        actionMapDataStation(state, data) {
            this.state.stateMapData.station = data;
        },
        actionMapDataCarrier(state, data) {
            this.state.stateMapData.carrier = data;
        },
        actionMapDataVehicleCarCount(state, data) {
            this.state.stateMapData.vehicle.carCount = data;
        },
        actionVehicleLife(state, data) {
            this.state.vehicle.life = data;
        },
        actionStationMachineId(state, data) {
            this.state.station.machine.id = data;
        },
    },
    getters: {
        getterVehicleThirdAirFlow: state => {
            return state.vehicle.third.airFlow;
        },
        getterVehicleThirdDCDCData: state => {
            return state.vehicle.third.dCDCData;
        },
        getterVehicleThirdH2Flow: state => {
            return state.vehicle.third.h2Flow;
        },
        getterVehicleThirdAlarmAndStatus: state => {
            return state.vehicle.third.alarmAndStatus;
        },
        getterVehicleThirdFCRealData: state => {
            return state.vehicle.third.fcRealData;
        },
        getterVehicleThirdElectricStackTemp: state => {
            return state.vehicle.third.electricStackTemp;
        },
        getterVehicleThirdHumidifierTemp: state => {
            return state.vehicle.third.humidifierTemp;
        },
        getterVehicleThirdOutPower: state => {
            return state.vehicle.third.outPower;
        },
        getterAlarmDataByVehicleCount: state => {
            return state.stateTopNavData.alarmData.data.filter(alarm => {
                return alarm.target.indexOf("10003") !== -1
            }).length;
        },
        getterAlarmDataStateList: state => {
            let result = [];
            let max = 0;
            state.stateTopNavData.alarmData.data.forEach((alarm) => {
                if (max < 10) {
                    max++;
                    result.push({
                        id: alarm.id,
                        level: "故障等级: " + alarm.level,
                        message: "类型:" + alarm.message.split("|")[0] + " | 故障目标: " + alarm.target
                    })
                }
            })
            return result;
        },
        getterAlarmDataByProduct: state => {
            let result = [];
            let max = 0;
            let filter = state.stateTopNavData.alarmData.data.filter(alarm => {
                return alarm.target.indexOf("10001") !== -1
            })
            filter.forEach((alarm) => {
                if (max < 10) {
                    max++;
                    result.push({
                        id: alarm.id,
                        level: "故障等级: " + alarm.level,
                        message: "类型:" + alarm.message.split("|")[0] + " | 故障目标: " + alarm.target
                    })
                }
            })
            return result;
        },
        getterAlarmDataByTransport: state => {
            let result = [];
            let max = 0;
            let filter = state.stateTopNavData.alarmData.data.filter(alarm => {
                return alarm.target.indexOf("10004") !== -1
            })
            filter.forEach((alarm) => {
                if (max < 10) {
                    max++;
                    result.push({
                        id: alarm.id,
                        level: "故障等级: " + alarm.level,
                        message: "类型:" + alarm.message.split("|")[0] + " | 故障目标: " + alarm.target
                    })
                }
            })
            return result;
        },
        getterAlarmDataByFill: state => {
            let result = [];
            let max = 0;
            let filter = state.stateTopNavData.alarmData.data.filter(alarm => {
                return alarm.target.indexOf("10002") !== -1
            })
            filter.forEach((alarm) => {
                if (max < 10) {
                    max++;
                    result.push({
                        id: alarm.id,
                        level: "故障等级: " + alarm.level,
                        message: "类型:" + alarm.message.split("|")[0] + " | 故障目标: " + alarm.target
                    })
                }
            })
            return result;
        },
        getterAlarmDataByVehicle: state => {
            let result = [];
            let max = 0;
            let filter = state.stateTopNavData.alarmData.data.filter(alarm => {
                return alarm.target.indexOf("10003") !== -1
            })
            filter.forEach((alarm) => {
                if (max < 10) {
                    max++;
                    result.push({
                        id: alarm.id,
                        level: "故障等级: " + alarm.level,
                        message: "类型:" + alarm.message.split("|")[0] + " | 故障目标: " + alarm.target
                    })
                }
            })
            return result;
        }
    },
    modules: {}
})
