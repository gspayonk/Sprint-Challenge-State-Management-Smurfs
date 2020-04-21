import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchData = () => {

    return dispatch => {

    dispatch({ type: FETCH_START });
    axios
        .get("http://localhost:3333/smurfs")

        .then(response => {
        dispatch({ type: FETCH_SUCCESS, payload: response.data });
        })
        
        .catch(error => {
        dispatch({ type: FETCH_ERROR, payload: error.response });
        });
    };
};