
import {BASE_URL, Route, Method, ErrorText } from './const';

const load = (route, method = Method.GET, body = null) => {
  const getServerResponse = fetch ((BASE_URL + route), {
    method,
    body,
  },)
    .then ((response) => response.ok ? response.json() : Promise.reject(ErrorText[method]));
  return getServerResponse;
};

const getData = load(Route.GET_DATE);

const sendData = (body) => load (Route.SEND_DATE, Method.POST, body);

export {getData,sendData};
