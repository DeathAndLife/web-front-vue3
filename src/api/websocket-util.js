import {getTokenForStorage} from "@/api/token";

export let CONSUMER_API_WS = "";

if (process.env.NODE_ENV === "production") {
    CONSUMER_API_WS = `ws://${location.host}/consumerWs?`;
} else {
    // CONSUMER_API_WS = "ws://nevt05:80/consumerWs?";
    CONSUMER_API_WS = "ws://47.93.22.144:8100/consumer/ws?";
}

export const consumerApiUrl = (url) => {
    return CONSUMER_API_WS + "url=" + url;
}

export const consumerApiUrlAndParams = (url, params) => {
    return CONSUMER_API_WS + "url=" + url + "&params=" + params;
}

export const ws = (url) => {
    return new WebSocket(url, [getTokenForStorage()])
}

export const JSONData = (data) => {
    return JSON.parse(data.data);
}
