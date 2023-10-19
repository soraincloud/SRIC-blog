import { get,post } from "@/axios/axios"

export function getResourcesList(params)
{
    return get('/notes/getResourcesList',params)
}

export function getResourcesListByCategory(params)
{
    return get('/notes/getResourcesListByCategory',params)
}

export function getResourceById(params)
{
    return get('/notes/getResourcesById',params)
}