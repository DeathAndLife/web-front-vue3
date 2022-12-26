import axios from 'axios'

const PRE = "/consumer"
const FUEL_CELL_VEHICLE = PRE + "/fuel_cell_vehicle"
const INDEX = PRE + "/whole_chain"
const FILL_FIRST = "/hydrogenation/first_page"
const FILL_SECOND = "/hydrogenation/second_page"
const FILL_THIRD = "/hydrogenation/third_page"
const FIRST_PAGE = "/first_page"
const STATION_LOCATION = "/stationLocation"
const FILL_MACHINE = "/hydrogenation/station-simple/h-machine"
const PRODUCTION_FIRST = "/HydrogenProductionFirst"
const TRANSPORT_FIRST = "/Hydrogen_transport"
const VEHICLE_THIRD = "/fuel_cell_vehicle/third_page"

const createGetReq = (url) => {
    return axios({
        method: "get",
        url: FUEL_CELL_VEHICLE + url,
    }).then((res) => {
        return res.data;
    });
};

const createGetReqForIndex = (url) => {
    return axios({
        method: "get",
        url: INDEX + url,
    }).then((res) => {
        return res.data;
    });
};

const createGetReqDefault = (url) => {
    return axios({
        method: "get",
        url: PRE + url,
    }).then((res) => {
        return res.data;
    });
};

const createGetReqDataDefault = (url, data) => {
    return axios({
        method: "get",
        url: PRE + url,
        params: data
    }).then((res) => {
        return res.data;
    });
};

const createGetReqData = (url, data) => {
    return axios({
        method: "get",
        url: FUEL_CELL_VEHICLE + url,
        params: data
    }).then((res) => {
        return res.data;
    });
};

export const getWeightSum = () => {
    return createGetReqForIndex("/getWeightSum");
}

export const getHydrogenConsume = () => {
    return createGetReqForIndex("/all_hydrogenation_count");
}

export const getCarrierMonitorAboveList = () => {
    return createGetReqForIndex("/getCarrierMonitorAboveList");
}

export const getCarrierMonitorHyDay = () => {
    return createGetReqForIndex("/getCarrierMonitorHyDay");
}

export const getCarrierMonitorHyMouth = () => {
    return createGetReqForIndex("/getCarrierMonitorHyMouth");
}

export const getMileageSumCarbonLess = () => {
    return createGetReq(FIRST_PAGE + "/mileageSum_CarbonLess");
}

export const getTodayMileageCount = () => {
    return createGetReq(FIRST_PAGE + "/today_mileage_count");
}

export const getOnlineCarCount = () => {
    return createGetReq(FIRST_PAGE + "/onlineCars");
};

export const getOnlineCars = () => {
    return createGetReq(FIRST_PAGE + "/onlineCarList");
}

export const getOfflineCars = () => {
    return createGetReq(FIRST_PAGE + "/offlineCarList");
}

export const getNumVeh = () => {
    return createGetReq(FIRST_PAGE + "/getNumVeh");
}

export const getCarCount = () => {
    return createGetReq(FIRST_PAGE + "/vehStatus");
}

export const getTodayPowerChart = () => {
    return createGetReq(FIRST_PAGE + "/today_power_count")
}

export const getOutputPowerChart = () => {
    return createGetReq(FIRST_PAGE + "/vehPower")
}

export const getMonthMileageChart = () => {
    return createGetReq(FIRST_PAGE + "/vehOdometer")
}

export const getMonthCarbonReduceChart = () => {
    return createGetReq(FIRST_PAGE + "/CarbonReduceDay")
}

export const getMonthHydrogenConsume = () => {
    return createGetReq(FIRST_PAGE + "/all_hydrogenation_count")
}

export const getVehicleAlarmStatistics = () => {
    return createGetReq(FIRST_PAGE + "/getAlarmStatistics")
}

export const getVehicleSecondUrlByVin = (data) => {
    return createGetReqData(FIRST_PAGE + "/getUrl", data)
}

export const getCarrierData = (data) => {
    return createGetReqDataDefault(FILL_MACHINE + "/findCarrierData", data);
}

export const getFillHydrogenWeightSumSingle = (data) => {
    return createGetReqDataDefault(FILL_MACHINE + "/getWeightSumSingle", data);
}

export const getWeightAll = () => {
    return createGetReqDefault(FILL_FIRST + "/getWeightAll");
}

export const getWeightSumForFill = () => {
    return createGetReqDefault(FILL_FIRST + "/getWeightSum");
}

export const getWeightSumForFillMonth = () => {
    return createGetReqDefault(FILL_FIRST + "/hydrogenationForMouth");
}

export const getHydrogenStationAddress = () => {
    return createGetReqDefault(STATION_LOCATION + "/Hydrogenation");
}

export const getProductionStationAddress = () => {
    return createGetReqDefault(STATION_LOCATION + "/production");
}

export const getVehicleAreaType = () => {
    return createGetReqDefault(STATION_LOCATION + "/carLocRatio");
}

export const getHydrogenationTimesMouth = () => {
    return createGetReqDefault(FILL_FIRST + "/getHydrogenationTimesMouth");
}

export const getHydrogenationTimesDay = () => {
    return createGetReqDefault(FILL_FIRST + "/getHydrogenationTimesDay");
}
//以下接口为实现（默认数据）
export const getMakeAndSaleHydrogen = () => {
    return createGetReqForIndex("/makeAndSaleHydrogen");
}
export const getFillHydrogenDayMonthYear = () => {
    return createGetReqForIndex("/fillHydrogenDayMonthYear");
}
export const getMakeHydrogenStatisticalDay = () => {
    return createGetReqForIndex("/makeHydrogenStatisticalDay");
}
export const getMakeHydrogenStatisticalMonth = () => {
    return createGetReqForIndex("/makeHydrogenStatisticalMonth");
}
export const getUseHydrogenStatistical = () => {
    return createGetReqForIndex("/useHydrogenStatistical");
}
export const getSaleHydrogenDay = () => {
    return createGetReqDefault(PRODUCTION_FIRST + "/saleHydrogenDay");
}
export const getHydrogenProductionRank = () => {
    return createGetReqDefault(PRODUCTION_FIRST + "/hydrogenProductionRank");
}
export const getMakeSaleAlarmStatistical = () => {
    return createGetReqDefault(PRODUCTION_FIRST + "/makeSaleAlarmStatistical");
}
export const getSaleHydrogenMonth = () => {
    return createGetReqDefault(PRODUCTION_FIRST + "/saleHydrogenMonth");
}
export const getMakeHydrogenDay = () => {
    return createGetReqDefault(PRODUCTION_FIRST + "/makeDay");
}
export const getMakeHydrogenMonth = () => {
    return createGetReqDefault(PRODUCTION_FIRST + "/makeMonth");
}
export const getMakeHydrogenRemainAndRadio = () => {
    return createGetReqDefault(PRODUCTION_FIRST + "/makeHydrogenRemainAndRadio");
}
export const getProductionStationRegisterInformationById = (id) => {
    return createGetReqDefault(PRODUCTION_FIRST + "/productionStationRegisterIformation/" + id);
}
export const getSafetyContactInformationOfProductionById = (id) => {
    return createGetReqDefault(PRODUCTION_FIRST + "/safetyContactInformationOfProduction/" + id);
}
export const getTempAndPressureById = (id) => {
    return createGetReqDefault(PRODUCTION_FIRST + "/tempAndPressure/" + id);
}
export const getMakeHydrogenDayById = (id) => {
    return createGetReqDefault(PRODUCTION_FIRST + "/makeHydrogenDay/" + id);
}
export const getHinOinHById = (id) => {
    return createGetReqDefault(PRODUCTION_FIRST + "/hinoinh/" + id);
}
export const getProductionElectrolyticInformationById = (id) => {
    return createGetReqDefault(PRODUCTION_FIRST + "/productionElectrolyticInformation/" + id);
}
export const getMakeTransportSaveSafetyById = (id) => {
    return createGetReqDefault(PRODUCTION_FIRST + "/MakeTransportSaveSafety/" + id);
}
export const getTransportHydrogenInfoVoById = (id) => {
    return createGetReqDefault(PRODUCTION_FIRST + "/transportHydrogenInfoVo/" + id);
}
export const getFaultLeakageHydrogenRatioOfProductById = (id) => {
    return createGetReqDefault(PRODUCTION_FIRST + "/faultLeakageHydrogenRatio/" + id);
}
export const getTransportHydrogenCountMonth = () => {
    return createGetReqDefault(TRANSPORT_FIRST + "/transportHydrogenCountMonth");
}
export const getTransportHydrogenCountYear = () => {
    return createGetReqDefault(TRANSPORT_FIRST + "/transportHydrogenCountYear");
}
export const getTransportHydrogenDriveTime = () => {
    return createGetReqDefault(TRANSPORT_FIRST + "/transportHydrogenDriveTime");
}
export const getTransportHydrogenDriveMileage = () => {
    return createGetReqDefault(TRANSPORT_FIRST + "/transportHydrogenDriveMileage");
}
export const getTransportHydrogenCarsMonth = () => {
    return createGetReqDefault(TRANSPORT_FIRST + "/transportHydrogenCarsMonth");
}
export const getFillHydrogenDayMonthAndRemainAndAlarm = () => {
    return createGetReqDefault(FILL_FIRST + "/fillHydrogenDayMonthAndRemainAndAlarm");
}
export const getFillHydrogenRemainAndRadio = () => {
    return createGetReqDefault(FILL_FIRST + "/fillHydrogenRemainAndRadio");
}
export const getFillHydrogenRank = () => {
    return createGetReqDefault(FILL_FIRST + "/fillHydrogenProductionRank");
}
export const getSafetyContactInformationOfFillStationById = (id) => {
    return createGetReqDefault(FILL_SECOND + "/safetyContactInformationOfFillStation/" + id);
}
export const getFillHydrogenStationRegisterInformationById = (id) => {
    return createGetReqDefault(FILL_SECOND + "/fillHydrogenStationRegisterInformation/" + id);
}
export const getSaveJarPressureAndFillMachinePressureById = (id) => {
    return createGetReqDefault(FILL_SECOND + "/saveJarPressureAndFillMachinePressure/" + id);
}
export const getFillHydrogenOfStationMonthById = (id) => {
    return createGetReqDefault(FILL_SECOND + "/fillHydrogenOfStationMonth/" + id);
}
export const getSaveHydrogenJarInformationById = (id) => {
    return createGetReqDefault(FILL_SECOND + "/saveHydrogenJarInformation/" + id);
}
export const getFillAndRemainAndSafetyById = (id) => {
    return createGetReqDefault(FILL_SECOND + "/fillAndRemainAndSafety/" + id);
}
export const getFillHydrogenCarsById = (id) => {
    return createGetReqDefault(FILL_SECOND + "/fillHydrogenCars/" + id);
}
export const getFillMachineInformationById = (id) => {
    return createGetReqDefault(FILL_SECOND + "/fillMachineInformation/" + id);
}
export const getFaultLeakageHydrogenRatioByIdOfFillById = (id) => {
    return createGetReqDefault(FILL_SECOND + "/faultLeakageHydrogenRatio/" + id);
}
export const getFillHydrogenAndCarsById = (id) => {
    return createGetReqDefault(FILL_SECOND + "/fillHydrogenAndCars/" + id);
}
export const getFillMachineEnvironmentInformationByIdAndDeviceId = (id, did) => {
    return createGetReqDefault(FILL_THIRD + "/fillMachineEnvironmentInformation/" + id + "/" + did);
}
export const getFillMachineSafetyContactInformationByIdAndDeviceId = (id, did) => {
    return createGetReqDefault(FILL_THIRD + "/fillMachineSafetyContactInformation/" + id + "/" + did);
}
export const getFillMachineCarInformationByIdAndDeviceId = (id, did) => {
    return createGetReqDefault(FILL_THIRD + "/fillMachineCarInformation/" + id + "/" + did);
}
export const getFillMachineInformationByIdAndDeviceId = (id, did) => {
    return createGetReqDefault(FILL_THIRD + "/machineDerailInformaion/" + id + "/" + did);
}
export const getVehicleThirdFCRealTimeDataById = (id) => {
    return createGetReqDefault(VEHICLE_THIRD + "/vechicleThirdFCRealTimeData/" + id);
}
export const getVehicleThirdAlarmAndFCStatusById = (id) => {
    return createGetReqDefault(VEHICLE_THIRD + "/vehicleThirdAlarmAndFCStatus/" + id);
}