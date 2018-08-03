import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import store from './store';
import CheeseList from './components/cheese-list';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Provider store={store}>
    <CheeseList />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
