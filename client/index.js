import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './Components/App';
import { StoreProvider } from './context/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <StoreProvider>
        <App />
    </StoreProvider>
);
