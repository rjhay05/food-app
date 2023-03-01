import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CartContexProvider from './components/store/CartContexProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartContexProvider>
        <App />
    </CartContexProvider>
);
