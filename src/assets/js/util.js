const DATA_STATION_TYPE = {
    factory: 10001,
    station: 10002,
    vehicle: 10003,
    carrier: 10004,
    all: 9999,
    onlineVehicle: 200,
    offlineVehicle: 404
};

const utilDataCalculation = (length, max, min) => {
    const dataList = [];
    for (let i = 0; i < length; i++) {
        // dataList[i] = Math.round(Math.random() * (max - min)) + min;
        dataList[i] = 0;
    }
    return dataList;
}

const dateFormat = (time) => {
    let date = new Date(parseInt(time));
    let y = date.getFullYear();
    let MM = date.getMonth() + 1;
    MM = MM < 10 ? "0" + MM : MM;
    let d = date.getDate();
    d = d < 10 ? "0" + d : d;
    let h = date.getHours();
    h = h < 10 ? "0" + h : h;
    let m = date.getMinutes();
    m = m < 10 ? "0" + m : m;
    let s = date.getSeconds();
    s = s < 10 ? "0" + s : s;
    return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
}

const utilXDate = (type) => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const days = new Date(year, month, date.getDate()).getDate();
    const now_day = date.getDate();
    const now_min = date.getMinutes();
    let now_hour = date.getHours();
    const now_second = date.getSeconds();
    const dayList = [];
    const monthList = [];
    const weekList = [];
    const hourList = [];
    const minList = [];
    const secondList = [];
    const unitList = ["月", "日", "年", "点", "分"];
    let i;
    switch (type) {
        case "month":
            for (i = 1; i <= month; i++) {
                monthList.push(i + unitList[0]);
            }
            return monthList;
        case "day":
            for (i = 1; i <= days; i++) {
                dayList.push(month + unitList[0] + i + unitList[1]);
            }
            return dayList;
        case "week":
            for (i = 7; i > 0; i--) {
                weekList.push(month + unitList[0] + (now_day - i))
            }
            return weekList;
        case "hour":
            for (i = 1; i <= 24; i++) {
                hourList.push(i + unitList[3]);
            }
            return hourList;
        case "min":
            for (i = 30; i > 0; i--) {
                let temp = now_min;
                if (temp + i < 10 || temp - i < 10) {
                    temp = 0 + "" + now_min;
                }
                if (now_min - 30 < 0) {
                    minList.push((now_hour - 1) + ":" + temp + i);
                } else {
                    minList.push(now_hour + ":" + (temp - i));
                }
            }
            return minList;
        case "second":
            for (i = 30; i > 0; i--) {
                if (now_second - 30 < 0) {
                    let temp_min = now_min - 1;
                    let temp_second = now_second - i + 60;
                    if (now_second - i + 60 > 60) {
                        temp_min = now_min;
                        temp_second = now_second - i;
                    }
                    if (temp_min - 1 < 0) {
                        now_hour -= 1;
                        if (now_hour - 1 < 0) {
                            now_hour = 23;
                        }
                        temp_min = 59;
                    }
                    if (temp_min < 10) {
                        temp_min = 0 + "" + temp_min;
                    }
                    if (temp_second < 10) {
                        temp_second = 0 + "" + temp_second;
                    }
                    secondList.push(now_hour + ":" + temp_min + ":" + temp_second);
                } else {
                    secondList.push(now_hour + ":" + now_min + ":" + (now_second - i));
                }
            }
            return secondList;
        default:
            break;
    }
}

const navDate = () => {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds() > 10 ? date.getSeconds() : "0" + date.getSeconds();
    // return date.getFullYear() + "年" + month + "月" + day + "日" + hours + "时" + minute + "分" + seconds + "秒";
    return date.getFullYear() + "-" + month + "-" + day + " " + hours + ":" + minute + ":" + seconds + "";
}

const isEmpty = (obj) => {
    try {
        if (Object.keys(obj).length === 0) {
            return true;
        } else if (obj.date.length === 0 || obj.value.length === 0) {
            return true;
        }
    } catch (e) {
        return true;
    }
    return false;
}

export default {
    utilDataCalculation,
    utilXDate,
    navDate,
    dateFormat,
    DATA_STATION_TYPE,
    isEmpty
}
