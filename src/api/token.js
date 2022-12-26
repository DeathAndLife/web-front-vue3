import axios from "axios";
import CryptoJS from 'crypto-js';

const KEY = CryptoJS.enc.Utf8.parse("8142419972ABCDEF");
const IV = CryptoJS.enc.Utf8.parse('ABCDEF1997814242');

const API = "/api"
const TOKEN = 'token'
const USERNAME = 'username'
const PASSWORD = 'password'

export const verifyToken = (data) => {
    axios({
        method: "post",
        url: API + "/verifyToken",
        data: data
    });
};

export const setTokenForStorage = (token) => {
    localStorage.setItem(TOKEN, token)
}

export const setTokenForSession = (token) => {
    sessionStorage.setItem(TOKEN, token)
}

export const setUsernameForStorage = (username) => {
    localStorage.setItem(USERNAME, username)
}

export const setUsernameForSession = (username) => {
    sessionStorage.setItem(USERNAME, username)
}

export const setPasswordForStorage = (password) => {
    localStorage.setItem(PASSWORD, Encryption(password))
}

export const setPasswordForSession = (password) => {
    sessionStorage.setItem(PASSWORD, Encryption(password))
}

export const getTokenForStorage = () => {
    return (localStorage.getItem(TOKEN) == null || localStorage.getItem(TOKEN) === '') ? sessionStorage.getItem(TOKEN) : localStorage.getItem(TOKEN);
}

export const getUsernameForStorage = () => {
    return (localStorage.getItem(USERNAME) == null || localStorage.getItem(USERNAME) === '') ? sessionStorage.getItem(USERNAME) : localStorage.getItem(USERNAME);
}

export const getPasswordForStorage = () => {
    let password = (localStorage.getItem(PASSWORD) == null || localStorage.getItem(PASSWORD) === '') ? sessionStorage.getItem(PASSWORD) : localStorage.getItem(PASSWORD);
    return Decryption(password);
}

export const removeToken = () => {
    localStorage.clear();
    sessionStorage.clear();
}

const Encryption = (data) => {
    if (data === undefined || data === null || data === '') {
        return null;
    }
    let src = CryptoJS.enc.Utf8.parse(data);
    let result = CryptoJS.AES.encrypt(src, KEY, {iv: IV, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7});
    return result.ciphertext.toString().toUpperCase();
}

const Decryption = (data) => {
    if (data === undefined || data === null || data === '') {
        return null;
    }
    let resultEn = CryptoJS.enc.Hex.parse(data);
    let de = CryptoJS.enc.Base64.stringify(resultEn);
    let decrypt = CryptoJS.AES.decrypt(de, KEY, {iv: IV, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7});
    let result = decrypt.toString(CryptoJS.enc.Utf8);
    return result.toString();
}
