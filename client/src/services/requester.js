const baseUrl = "http://localhost:3005/api/";

const request = async (method, url, data) => {
  const options = {
    method,
    headers: {},
  };

  if(data) {
    options.headers['Content-Type'] = 'application/json'
    options.headers.body = JSON.stringify(data)
  }

  try {
    const res = await fetch(baseUrl + url, options);
    const result = await res.json();
    return result;
  } catch(err) {
    console.log(err);
  }
};

const get = request.bind(null, 'get');
const post = request.bind(null, 'post');
const put = request.bind(null, 'put');
const del = request.bind(null, 'delete');

export {
    get,
    post,
    put,
    del
}

