//import { BrowserRouter } from 'react-router-dom'

import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import ShopContextProvider from './components/Context/ShopContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>,
)
