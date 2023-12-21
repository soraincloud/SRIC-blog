import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = 'http://localhost:8443/api'

export function get(url,params)
{
    return axios
    ({
        method: 'get',
        url: `${url}`,
        params: params,
    })
}

export function post(url,params)
{
    return axios
    ({
        method: 'post',
        url: `${url}`,
        data: params,
        header: { "Content-Type":"application/json" }
    })
}

export function postFile(url,params)
{
    return axios
    ({
        method: 'post',
        url: `${url}`,
        data: params,
        header: { "Content-Type": "multipart/form-data" }
    })
}

axios.interceptors.response.use(
function(resp)
{
    if(resp.status == 200)
    {
        return Promise.resolve(resp)
    }
    else
    {
        return Promise.reject(resp)
    }
},
function(error)
{

})

axios.interceptors.request.use(
config => {
    if(config.url !== "/user/login")
    {
        config.headers.token = localStorage.getItem('tokenValue')
    }
    return config
},
error =>{
    return Promise.reject(error)
})