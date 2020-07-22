import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AddToHomescreen from 'react-add-to-homescreen';

const handleAddToHomescreenClick = () => {
  alert('Add ToDo List To Home Screen');
};

ReactDOM.render(
  <>
    <App/>
    <AddToHomescreen onAddToHomescreenClick={handleAddToHomescreenClick} />
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
