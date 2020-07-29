import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Greeting, AWSAccountLists} from './Oki'
import {Comments} from './Comments'
import * as serviceWorker from './serviceWorker';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);





ReactDOM.render(
  <React.StrictMode>
    <Greeting name="Oki" />
    < AWSAccountLists />
    < Comments />


  </React.StrictMode>,

//<App /> in React.StrictMode reinpacken.

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
