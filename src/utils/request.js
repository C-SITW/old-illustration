import axios from "axios"


const instance = axios.create({
    // baseURL: 'https://www.fastmock.site/mock/f055d1606db160945170aed3412b7e34',
    baseURL: ' http://localhost:3000/',
    // baseURL: ' http://192.163.31.66:3000/',
    // baseURL: ' http://47.107.49.109:3000/',
    withCredentials: true,
    timeout: 10000
})


/**
 * 发送post请求
 * @param {string} url 请求的url
 * @param {object} data 发送的数据
 * @returns 
 */
export const post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        instance.post(url, data, { headers: { 'Content-Type': 'application/json' } })
            .then((response) => { resolve(response.data) }, err => { reject(err) })
    })
}

export const get = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        instance.get(url, { params })
            .then((response) => {
                resolve(response.data)
            }, err => {
                reject(err)
            })
    })
}


export const patch = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        instance.patch(url, data, { headers: { 'Content-Type': 'application/json' } })
            .then((response) => { resolve(response.data) }, err => { reject(err) })
    })
}

export const del = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        instance.delete(url, data, { headers: { 'Content-Type': 'application/json' } })
            .then((response) => { resolve(response.data) }, err => { reject(err) })
    })
}