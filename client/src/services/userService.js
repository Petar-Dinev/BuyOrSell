import * as request from './requester';

const create = async (data) => {
    const user = await request.post('users', data)
    console.log(user);
    return user
}

const getOne = async (userId) => {
    const user = await request.get(`users/${userId}`)
    return user;
}

export {
    getOne,
    create
}