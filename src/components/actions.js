import fetch from 'isomorphic-fetch'

export const REQUEST_DATA = "REQUEST_DATA";
export const RECEIVE_DATA = "RECEIVE_DATA";

export function requestData(args) {
  return {
    type: REQUEST_DATA,
    args
  }
}

export function receiveData(args, data) {
  return {
    type: RECEIVE_DATA,
    args,
    data
  }
}

export function fetchData(args) {
  return dispatch => {
    dispatch(requestData(args));
    return fetch(`https://owapi.net/api/v3/u/${args.battletag}-${args.id}/blob`)
      .then(response => response.json())
      .then(data => dispatch(receiveData, args, data))
  }
}