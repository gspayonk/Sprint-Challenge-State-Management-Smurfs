import {FETCH_START, FETCH_SUCCESS, FETCH_ERROR} from '../actions';

    const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
    };

    export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
        return {
            ...state,
            isLoading: true,
            error: ''
        };

        case FETCH_SUCCESS:
        return {
            ...state,
            isLoading: false,
            smurfs: action.payload,
            error: ''
        };

        case FETCH_ERROR:
        return {
        ...state,
        error: action.payload,
        isFetching: false
        };

        default:
        return state;
    }
    };