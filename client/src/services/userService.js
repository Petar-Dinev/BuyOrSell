import * as request from './requester';

const baseUrl = 'http://localhost:3030/users/'

const register = async (data) => {
    return await request.post(`${baseUrl}register`, data)
    
}

const login = async (data) => {
    return await request.post(`${baseUrl}login`, data)
    
}

const logout = async (token) => {
   return await fetch(`${baseUrl}logout`)
}

export {
    register,
    login,
    logout
}