import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import './App.css';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JavaScript
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AdminContextProvider from './context/AdminContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <AdminContextProvider>
      <App />
      </AdminContextProvider>
      
    </React.StrictMode>
  </BrowserRouter>
);

