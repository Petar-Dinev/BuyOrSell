import { get, post, put, del } from "./requester"

const baseUrl = 'http://localhost:3030/data/cars'

export const getAll = async () => {
    const result = await get(baseUrl);

   return result
}

export const getOne = async (carAdId) => {
    const result = await get(`${baseUrl}/${carAdId}`)
    return result;
}

export const create = async (carAdData) => {
    const result = await post(baseUrl, carAdData)
    console.log(result);

    return result;
}

export const edit = async (carAdId, newData) => {
    const result = await put(`${baseUrl}/${carAdId}`, newData)
    console.log(result);
    return result;
}

export const deleteCarAd = async (carAdId) => {
   await del(`${baseUrl}/${carAdId}`)
}

