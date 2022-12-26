import {consumerApiUrl} from "@/api/websocket-util"

export const wsGetAlarm = () => {
    return consumerApiUrl("getAlarm")
}
