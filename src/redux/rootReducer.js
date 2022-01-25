import {combineReducers} from 'redux';

import {appRedux as app} from '../modules/app';


const rootReducer = combineReducers({
    app: app.reducer,
});

export default rootReducer;