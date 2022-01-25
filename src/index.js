import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-intl';

import configureStore from './redux';
import {initReactIntl} from './i18n';
import {App} from './modules/app';
import {appRedux} from './modules/app';
import backend, {NetworkError} from './backend';
import reportWebVitals from './reportWebVitals';


/* Configure store. */
const store = configureStore();


/* Configure backend proxy. */
backend.init(error => store.dispatch(appRedux.actions.error(new NetworkError())));


/* Configure i18n. */
const {locale, messages} = initReactIntl();


/* Render application. */
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <IntlProvider locale={locale} messages={messages}>
                <App/>
            </IntlProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
reportWebVitals();
