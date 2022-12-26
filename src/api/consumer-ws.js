import {consumerApiUrlAndParams,consumerApiUrl} from "@/api/websocket-util"


export const wsFindMid = (params) => {
    return consumerApiUrlAndParams("findMid", params)
}

export const wsHGunRealData = (params) => {
    return consumerApiUrlAndParams("real_data", params)
}

export const wsSPSAll = (params) => {
    return consumerApiUrlAndParams("SPSAll", params)
}

export const wsAlarm = () => {
    return consumerApiUrl("getAlarm");
}

export const wsOnlineCarList = () => {
    return consumerApiUrl("onlineCarList")
}

export const wsOfflineCarList = () => {
    return consumerApiUrl("offlineCarList")
}

export const wsVehSpeed = (params) => {
    return consumerApiUrlAndParams("vehSpeed", params)
}

export const wsFCV = (params) => {
    return consumerApiUrlAndParams("FCV_A", params)
}

export const wsMotV = (params) => {
    return consumerApiUrlAndParams("MotV_A", params)
}

export const wsDCV = (params) => {
    return consumerApiUrlAndParams("DCV_A", params)
}

export const wsSoc = (params) => {
    return consumerApiUrlAndParams("Soc", params)
}

export const wsBLE = (params) => {
    return consumerApiUrlAndParams("getBLE", params)
}

export const wsTemp = (params) => {
    return consumerApiUrlAndParams("temp", params)
}

export const wsFindH2MAX = (params) => {
    return consumerApiUrlAndParams("findH2MAX", params)
}

export const wsFindFCTop = (params) => {
    return consumerApiUrlAndParams("findFCTop", params)
}

export const wsFindFCBottom = (params) => {
    return consumerApiUrlAndParams("findFCBottom", params)
}

export const wsVehicleInformation = (params) => {
    return consumerApiUrlAndParams("vehicle_information", params)
}

export const wsRealData = (params) => {
    return consumerApiUrlAndParams("real_data", params)
}

export const wsInformationMaintenance = (params) => {
    return consumerApiUrlAndParams("InformationMaintenance", params)
}

export const wsRepairDetails = (params) => {
    return consumerApiUrlAndParams("RepairDetails", params)
}

export const wsFaultInOneWeek = (params) => {
    return consumerApiUrlAndParams("FaultInOneWeek", params)
}

export const wsVehicleThirdFullData = (params) => {
    return consumerApiUrlAndParams("fuelCellVehicleThirdPageFullData", params)
}

export const wsCarrierAddress = () => {
    return consumerApiUrl("getCarrierAddress")
}

export const wsVehicleAddress = () => {
    return consumerApiUrl("getCarAddress")
}

export const wsCarrierInfo = () => {
    return consumerApiUrl("getCarrierInfo")
}

