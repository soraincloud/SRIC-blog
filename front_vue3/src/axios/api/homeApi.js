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

export function setIndexHead(params)
{
    return post('/home/setIndexHead',params)
}

export function setIndexHeadTitle(params)
{
    return post('/home/setIndexHeadTitle',params)
}

export function getAllIndexAbout(params)
{
    return get('/home/getAllIndexAbout',params)
}

export function setIndexAbout(params)
{
    return post('/home/setIndexAbout',params)
}