import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/comments';


export const getAll = async (carAdId) => {
    // const searchQuery = encodeURIComponent(`carAdId="${carAdId}"`);
    // const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    // const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
    // const comments = Object.values(result);
    const result = await request.get(baseUrl);
    
    return result.filter(c => c.carAdId === carAdId);
};

export const create = async (commentInfo) => {
    const result = await request.post(baseUrl, commentInfo);

    return result;
};