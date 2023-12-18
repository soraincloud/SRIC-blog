import { get,post,postFile } from "@/axios/axios"

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