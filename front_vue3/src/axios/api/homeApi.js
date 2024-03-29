import { get,post } from "@/axios/axios"

export function getIndexTimeList(params)
{
    return get('/home/indexTimeList',params)
}
export function getTimeByText(params)
{
    return get('/home/getTimeByText',params)
}

export function getTimeByTime(params)
{
    return get('/home/getTimeByTime',params)
}

export function getTimeByYear(params)
{
    return get('/home/getTimeByYear',params)
}

export function updateTimeById(params)
{
    return post('/home/updateTimeById',params)
}

export function deleteTimeById(params)
{
    return post('/home/deleteTimeById',params)
}

export function addIndexTime(params)
{
    return post('/home/addIndexTime',params)
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