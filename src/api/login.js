import axios from 'axios'
import util from "@/assets/js/util";

const API = "/api"

const LOGIN_FAIL = "loginFail"

const createPost = (url, data) => {
    return axios({
        method: "post",
        data: data,
        url: API + url,
    }).then((res) => {
        return res.data;
    })
};
export const loginReq = (data) => {
    return createPost("/login", data);
}

export const setLoginFailForStorage = (time) => {
    localStorage.setItem(LOGIN_FAIL, JSON.parse(Date.now() + time));
}

export const getLoginFailDateForStorage = () => {
    return util.dateFormat(localStorage.getItem(LOGIN_FAIL));
}

export const isLoginFailForStorage = (time) => {
    if (localStorage.getItem(LOGIN_FAIL) === null) {
        return false;
    } else if (time >= parseInt(localStorage.getItem(LOGIN_FAIL))) {
        localStorage.removeItem(LOGIN_FAIL);
        return false;
    }
    return true;
}

