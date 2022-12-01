import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import store from './Redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderDOM = (dataState) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App appDataState={dataState} store={store} dispatch={store.dispatch}/>
     </React.StrictMode>
    </BrowserRouter>
  );
}

rerenderDOM(store.getState());
store.subscribe(() => {
  let stateVar = store.getState();
  rerenderDOM(stateVar)
});

//или так
// store.subscribe(() => {rerenderDOM(store.getState())})


