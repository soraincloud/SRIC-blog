import { get,post } from "@/axios/axios"

export function getNotesList(params)
{
    return get('/notes/getNotesList',params)
}

export function getNoteListByCategory(params)
{
    return get('/notes/getNoteListByCategory',params)
}

export function getNoteById(params)
{
    return get('/notes/getNoteById',params)
}

export function getAllNotesCategory(params)
{
    return get('/notes/getAllNotesCategory',params)
}