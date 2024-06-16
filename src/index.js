import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { VideogamesProvider } from './contexts/VideogamesContext';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <VideogamesProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </VideogamesProvider>
);

