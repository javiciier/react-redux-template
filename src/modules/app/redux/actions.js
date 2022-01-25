import * as actionTypes from './actionTypes';


/* ****************************** SYNC ACTIONS ****************************** */
export const loading = () => ({
    type: actionTypes.LOADING
});

export const loaded = () => ({
    type: actionTypes.LOADED
});

export const error = (error) => ({
    type: actionTypes.ERROR,
    error
});


/* ****************************** ASYNC ACTIONS ****************************** */