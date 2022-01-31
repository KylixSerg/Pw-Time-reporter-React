import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {ReactSession} from 'react-client-session';
import "react-datepicker/dist/react-datepicker.css";

ReactSession.setStoreType("localStorage");


ReactDOM.render(

    <Router>
        <App />
    </Router>

    , document.getElementById('root'))