import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '../public/fonts/fonts.css';
import App from './App.jsx';
import React from 'react';




// @ts-ignore
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)