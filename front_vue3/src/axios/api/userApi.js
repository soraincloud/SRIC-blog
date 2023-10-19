import { get,post } from "@/axios/axios"

export function getTagByUid(params)
{
    return get('/user/getTagByUid',params)
}

export function getUserById(params)
{
    return get('/user/getUserById',params)
}

export function updateNameById(params)
{
    return post('/user/updateNameById',params)
}

export function updateMarkById(params)
{
    return post('/user/updateMarkById',params)
}

export function login(params)
{
    return post('/user/login',params)
}