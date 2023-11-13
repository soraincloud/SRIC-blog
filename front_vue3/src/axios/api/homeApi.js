import { get,post } from "@/axios/axios"

export function getIndexTimeList(params)
{
    return get('/home/indexTimeList',params)
}

export function getAllIndexHead(params)
{
    return get('/home/getAllIndexHead',params)
}

export function getAllIndexHeadTitle(params)
{
    return get('/home/getAllIndexHeadTitle',params)
}