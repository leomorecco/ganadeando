/* eslint-disable react/no-deprecated */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
import routes from './Routes.jsx';

ReactDOM.render(
  <React.StrictMode>
    {routes}
  </React.StrictMode>,
  document.getElementById('root')
);
import '../src/css/style.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



