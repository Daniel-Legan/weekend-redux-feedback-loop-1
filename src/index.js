import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const count = (state = 0, action) => {
    return state;
}

const storeInstance = createStore(
    count,
    
    applyMiddleware(
        logger
    )
    );

ReactDOM.render(
<Provider store={storeInstance}><App /></Provider>
, document.getElementById('root'));
registerServiceWorker();
