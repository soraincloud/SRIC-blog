import { get,post } from "@/axios/axios"

export function getTagByToken(params)
{
    return get('/user/getTagByToken',params)
}

export function getUserByToken(params)
{
    return get('/user/getUserByToken',params)
}

export function updateNameByToken(params)
{
    return post('/user/updateNameByToken',params)
}

export function updateMarkByToken(params)
{
    return post('/user/updateMarkByToken',params)
}

export function login(params)
{
    return post('/user/login',params)
}