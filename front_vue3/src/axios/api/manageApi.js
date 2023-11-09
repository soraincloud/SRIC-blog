import { get,post } from "@/axios/axios"

export function getManageIndexData(params)
{
    return get('/manage/getManageIndexData',params)
}