import { get,post } from "@/axios/axios"

export function getResourcesList(params)
{
    return get('/resources/getResourcesList',params)
}

export function addResource(params)
{
    return post('/resources/addResource',params)
}

export function updateResource(params)
{
    return post('/resources/updateResource',params)
}

export function deleteResourceById(params)
{
    return post('/resources/deleteResourceById',params)
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

export function getResourcesByText(params)
{
    return get('/resources/getResourcesByText',params)
}

export function getAllResourcesCategory(params)
{
    return get('/resources/getAllResourcesCategory',params)
}