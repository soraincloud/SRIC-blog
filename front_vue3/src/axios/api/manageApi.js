import { get,post } from "@/axios/axios"

export function getManageIndexData(params)
{
    return get('/manage/getManageIndexData',params)
}

export function getAllManageMenu(params)
{
    return get('/manage/getAllManageMenu',params)
}