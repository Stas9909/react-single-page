import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import store from './Redux/redux-store';

import {Provider} from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

// let rerenderDOM = () => {
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
     </Provider>
    </BrowserRouter>
  );
// }

// rerenderDOM(store.getState());
// store.subscribe(() => {
//   let stateVar = store.getState();
//   rerenderDOM(stateVar)
// });

//или так
// store.subscribe(() => {rerenderDOM(store.getState())})


