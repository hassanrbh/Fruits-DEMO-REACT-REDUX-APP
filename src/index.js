import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './app/store';
import { addFruit, removeFruit, clearFruits } from "./features/fruits/fruits_slice"

const container = document.getElementById('root');
const root = createRoot(container);

window.Store = store;
window.addFruit = addFruit;
window.removeFruit = removeFruit;
window.clearFruits = clearFruits;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
