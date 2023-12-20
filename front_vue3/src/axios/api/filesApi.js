import { get,post,postFile } from "@/axios/axios"

export function getAllFiles(params)
{
    return get("/files/getAllFiles",params)
}

export function getFilesByText(params)
{
    return get("/files/getFilesByText",params)
}

export function addFile(params)
{
    return postFile("/files/addFile",params)
}

export function getMd(params)
{
    return get("/files/getMd",params)
}

export function setMd(params)
{
    return post("/files/setMd",params)
}

export function getNameById(params)
{
    return get("/files/getNameById",params)
}

export function getFilesNameList(params)
{
    return get("/files/getFilesNameList",params)
}

export function getAvatarById(params)
{
    return get('/files/getAvatarById',params)
}