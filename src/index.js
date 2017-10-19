import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import configureStore from './redux/store';

ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>,
    document.querySelector('.container')
);
