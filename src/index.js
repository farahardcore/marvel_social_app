
import * as serviceWorker from './serviceWorker';
import store from "./Redux/redux-store"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"


 let rerenderEntireThree=()=> {
ReactDOM.render(
    <BrowserRouter>
        <App state={store.getState()}
        dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireThree(store.getState());
store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireThree(state);
});


serviceWorker.unregister();