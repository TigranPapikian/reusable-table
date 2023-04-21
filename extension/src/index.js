import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { GlobalStyle } from './globalStyles';
import { BrowserRouter } from 'react-router-dom';
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyle />
        <App />
    </Provider>
  </BrowserRouter>
  </React.StrictMode>
);
