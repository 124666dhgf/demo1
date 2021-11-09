import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Car from './components/usestatedemo';
//import Counter from './components/useeffectdemo';
//import Getgreet from './components/sample';
//import Component1 from './components/contextdemo';
//import Appuseref from './components/userefdemo';
//import Todos from './components/usereducedemo';
//import StateData from './components/table';
//import UseMemoApp from './components/usememohook-demo';
//import App from './components/callbackcomp/Todo-index';
import App from './components/sortfilterpage/pageapp';
//import ToolbarApp from './components/context-demo/custom-hook-demo';
import reportWebVitals from './reportWebVitals';

/*ReactDOM.render(
  <React.StrictMode>
    <Car/>
  </React.StrictMode>,
  document.getElementById('root')
);*/
/*ReactDOM.render(
  <React.StrictMode>
    <Getgreet/>
  </React.StrictMode>,
  document.getElementById('root')
);*/
/*ReactDOM.render(
  <React.StrictMode>
    <Counter/>
  </React.StrictMode>,
  document.getElementById('root')
);*/
/*ReactDOM.render(
  <React.StrictMode>
    <StateData/>
  </React.StrictMode>,
  document.getElementById('root')
);*/
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
