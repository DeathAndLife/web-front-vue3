const http_data_e = (data,value) => {
    if (data === null || value === null) {
        throw true;
    }
}
const http_code_e = (code) => {
    if (code === 500) {
        throw true;
    }
}
const ws_e = (code) => {
    if (code === 5003) {
        throw true;
    }
}

const http_e = (data)=> {
    let result = data.data;
    if (result.code === 500 || result.data === null || result.data === " ") {
        throw true;
    }
}

export default {
    http_data_e,
    http_code_e,
    ws_e,
    http_e
}