import { get,post } from "@/axios/axios"

export function getResourcesList(params)
{
    return get('/resources/getResourcesList',params)
}

export function getResourcesListByCategory(params)
{
    return get('/resources/getResourcesListByCategory',params)
}

export function addResourcesCategory(params)
{
    return post('/resources/addResourcesCategory',params)
}

export function updateResourcesCategoryById(params)
{
    return post('/resources/updateResourcesCategoryById',params)
}

export function deleteResourcesCategoryById(params)
{
    return post('/resources/deleteResourcesCategoryById',params)
}


export function getResourceById(params)
{
    return get('/resources/getResourcesById',params)
}

export function getAllResourcesCategory(params)
{
    return get('/resources/getAllResourcesCategory',params)
}