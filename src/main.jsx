import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { CssBaseline } from '@mui/material';
import { persistor, store } from './redux/store';
import { HelmetProvider } from 'react-helmet-async';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CssBaseline />
          <App />
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
