import { postFile } from "@/axios/axios"

export function addFile(params)
{
    return postFile("/files/addFile",params)
}