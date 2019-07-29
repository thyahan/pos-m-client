const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

const fetchWithResponse = (url, options) => {
  return new Promise((resolve, reject) => {
    fetch(url, { headers, ...options })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const serialize = (params) => {
  if (!params) return '';
  return Object.keys(params)
    .reduce((a, k) => {
      a.push(`${k}=${encodeURIComponent(params[k])}`);
      return a;
    }, [])
    .join('&');
};

const GET = (url, params) => {
  const queryString = serialize(params);
  if (queryString && queryString.length) {
    return fetchWithResponse(`${url}?${queryString}`);
  }
  return fetchWithResponse(url);
};

const POST = (url, body) => {
  return fetchWithResponse(url, { method: 'POST', body: JSON.stringify(body) });
};

const PUT = (url, body) => {
  return fetchWithResponse(url, { method: 'PUT', body: JSON.stringify(body) });
};

const DELETE = (url) => {
  return fetchWithResponse(url, { method: 'DELETE' });
};

const POST_DOWNLOAD_FILE = (filename, url, body) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
    .then(response => response.blob())
    .then((blob) => {
      const href = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = href;
      a.download = filename;
      document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
      a.click();
      a.remove(); // afterwards we remove the element again
    });
};

export { fetchWithResponse, GET, POST, PUT, DELETE, POST_DOWNLOAD_FILE };
