import axios from 'axios'

const DUMMY = "/dummy"
const STATISTICAL = "/statistical"


const creatGetReqDummy = (url) => {
    return axios({
        method: "get",
        url: DUMMY + url,
    }).then((res) => {
        return res.data;
    });
};

const creatGetReqDummyData = (url, data) => {
    return axios({
        method: "get",
        url: DUMMY + url,
        params: data
    }).then((res) => {
        return res.data;
    });
};

const creatGetReqStatisticalData = (url, data) => {
    return axios({
        method: "get",
        url: STATISTICAL + url,
        params: data
    }).then((res) => {
        return res.data;
    });
};

export const getCarCount = () => {
    return creatGetReqDummy("/carCount");
}

export const getOnlineCarCount = () => {
    return creatGetReqDummy("/onlineCarCount")
}

export const getIsOnlineCarById = (data) => {
    return creatGetReqDummyData("/isOnlineCar", data)
}

export const getAllOfflineCar = () => {
    return creatGetReqDummy("/allOfflineCar");
}

export const getAllOnlineCar = () => {
    return creatGetReqDummy("/allOnlineCar");
}

export const getAllVehicleAddr = () => {
    return creatGetReqDummy("/allVehicleAddr");
}

export const getAllFactoryAddr = () => {
    return creatGetReqDummy("/allFactoryAddr");
}

export const getAllStationAddr = () => {
    return creatGetReqDummy("/allStationAddr");
}

export const getAllCarrierAddr = () => {
    return creatGetReqDummy("/allCarrierAddr");
}

export const getVinByDataStationId = (data) => {
    return creatGetReqDummyData("/vin", data);
}

export const getStatisticalAdd = (data) => {
    return creatGetReqStatisticalData("/add", data)
}

export const getStatisticalAddList = (data) => {
    return creatGetReqStatisticalData("/addList", data)
}

export const getStatisticalTransport = (data) => {
    return creatGetReqStatisticalData("/transport", data)
}

export const getStatisticalTransportList = (data) => {
    return creatGetReqStatisticalData("/transportList", data)
}

export const getStatisticalStorage = (data) => {
    return creatGetReqStatisticalData("/storage", data)
}

export const getStatisticalStorageList = (data) => {
    return creatGetReqStatisticalData("/storageList", data)
}

export const getStatisticalManufacture = (data) => {
    return creatGetReqStatisticalData("/produce", data)
}

export const getStatisticalManufactureList = (data) => {
    return creatGetReqStatisticalData("/produceList", data)
}

export const getStatisticalAlarm = (data) => {
    return creatGetReqStatisticalData("/alarm", data)
}

export const getStatisticalAlarmList = (data) => {
    return creatGetReqStatisticalData("/alarmList", data)
}

export const getStatisticalUse = (data) => {
    return creatGetReqStatisticalData("/use", data)
}

export const getStatisticalUseList = (data) => {
    return creatGetReqStatisticalData("/useList", data)
}

export const getStatisticalSell = (data) => {
    return creatGetReqStatisticalData("/sell", data)
}

export const getStatisticalSellList = (data) => {
    return creatGetReqStatisticalData("/sellList", data)
}


