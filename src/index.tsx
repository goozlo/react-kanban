import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';


const el = document.getElementById('root')

if (el === null) {
    throw new Error('Root container missing in index.html')
}

const root = createRoot(el);
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
);
