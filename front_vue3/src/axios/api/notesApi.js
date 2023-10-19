import { get,post } from "@/axios/axios"

export function getNotesList(params)
{
    return get('/notes/notesList',params)
}

export function getListByCategory(params)
{
    return get('/notes/notesListByCategory',params)
}

export function getNoteById(params)
{
    return get('/notes/getNoteById',params)
}