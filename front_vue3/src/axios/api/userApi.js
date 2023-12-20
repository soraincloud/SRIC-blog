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

export function updateAvatarByToken(params)
{
    return post('/user/updateAvatarByToken',params)
}

export function login(params)
{
    return post('/user/login',params)
}

export function getAllUsername(params)
{
    return get('/user/getAllUsername',params)
}

export function deleteTagById(params)
{
    return post('/user/deleteTagById',params)
}

export function addTagByToken(params)
{
    return post('/user/addTagByToken',params)
}