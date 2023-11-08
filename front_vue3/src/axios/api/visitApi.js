import { get,post } from "@/axios/axios"

export function getAllPageVisited(params)
{
    return get('/visited/getAllPageVisited',params)
}

export function visitPage(params)
{
    return get('/visited/visitPage',params)
}