import axios from 'axios'

const URL_PRE = "/consumer/alarm"

const creatGetReq = (url) => {
    return axios({
        method: "get",
        url: URL_PRE + url,
    }).then((res) => {
        return res.data;
    });
};

const creatGetReqData = (url, data) => {
    return axios({
        method: "get",
        url: URL_PRE + url,
        params: data
    }).then((res) => {
        return res.data;
    });
};


export const deleteAlarmById = (data) => {
    return creatGetReqData("/deleteAlarm", data);
}
