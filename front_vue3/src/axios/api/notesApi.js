import { get,post } from "@/axios/axios"

export function getNotesList(params)
{
    return get('/notes/getNotesList',params)
}

export function getNoteListByCategory(params)
{
    return get('/notes/getNoteListByCategory',params)
}

export function addNotesCategory(params)
{
    return post('/notes/addNotesCategory',params)
}

export function updateNotesCategoryById(params)
{
    return post('/notes/updateNotesCategoryById',params)
}

export function deleteNotesCategoryById(params)
{
    return post('/notes/deleteNotesCategoryById',params)
}

export function getNoteById(params)
{
    return get('/notes/getNoteById',params)
}

export function getAllNotesCategory(params)
{
    return get('/notes/getAllNotesCategory',params)
}