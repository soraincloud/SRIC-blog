import { get,post } from "@/axios/axios"

export function getIndexTimeList(params)
{
    return get('/home/indexTimeList',params)
}