import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@store/store';
import App from './App';

const $element = document.getElementById('root');

if ($element === null) {
  throw new Error('Root container missing in index.html');
}

const root = createRoot($element);
root.render(
  // когда prod, strict mode выключаем!!!
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
