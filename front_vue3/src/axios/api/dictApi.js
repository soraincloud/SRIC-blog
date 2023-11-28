import { get,post } from "@/axios/axios"

export function getDictElColorType(params)
{
    return get('/dict/getDictElColorType',params)
}