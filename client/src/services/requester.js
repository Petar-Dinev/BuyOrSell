import { Navigate } from "react-router-dom";

const request = async (method, url, data) => {

  const options = {
    method,
    headers: {},
  };

  if(data !== undefined) {
    options.headers['Content-Type'] = 'application/json'
    options.body = JSON.stringify(data)
  }

  const user = localStorage.getItem('auth');
  const auth = JSON.parse(user || '{}');
  if(auth.accessToken) {
    options.headers['X-Authorization'] = auth.accessToken;
  }

  try {
    const res = await fetch(url, options);

    if(res.status === 204) {
      return res;
    }

    const result = await res.json();

    if(res.ok === false) {
      throw new Error(result.message)
    }

    return result;

  } catch(err) {
    Navigate('/404')
  }
};

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');


