import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import HabitContextWrapper from './Contexts/HabitContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <HabitContextWrapper>
    <App />
    </HabitContextWrapper>
    </BrowserRouter>
  </React.StrictMode>
);

