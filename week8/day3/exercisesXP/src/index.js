import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import MatrixBackground from './MatrixBackground';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <>
      <MatrixBackground />
      <App />
    </>
  </Provider>
);
