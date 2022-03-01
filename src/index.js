import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import ThunkMiddleware  from 'redux-thunk';
import reducer from './reducers/swatchReducer';
import { Provider } from 'react-redux';

const store = createStore(reducer, applyMiddleware(ThunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);