const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATE: '/data',
  SEND_DATE: '/'
};

const Method = {
  GET:'GET',
  POST:'POST'
};

const ErrorText = {
  [Method.GET] :'Не удалось загрузить данные. Попробуйте еще раз',
  [Method.POST]:'Не удалось загрузить данные формы'
};


const load = (route, method = Method.GET, body = null) => {
  const getServerresponse = fetch ((BASE_URL + route), {
    method,
    body,
  },)
    .then ((response) => response.ok ? response.json() : Promise.reject(ErrorText[method]));
  return getServerresponse;
};

const getData = load(Route.GET_DATE);

const sendData = (body) => load (Route.SEND_DATE, Method.POST, body);

export {getData,sendData};


