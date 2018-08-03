import {API_BASE_URL} from '../config';

export const fetchCheeses = () => {
  fetchCheesesRequest();
  return(
    fetch(`${API_BASE_URL}/cheese`, {
      method: 'GET'
    })
      .then(res =>res.json())
      .then(data => fetchCheesesSuccess(data))
      .catch(err => fetchCheesesError(err))
  );
};


export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
  type: FETCH_CHEESES_REQUEST,
});

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = (cheeses) => ({
  type: FETCH_CHEESES_SUCCESS,
  cheeses
});

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = (error) => ({
  type: FETCH_CHEESES_ERROR, 
  error
});