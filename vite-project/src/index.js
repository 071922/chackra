import React from 'react';
import ReactDom from 'react-dom';
import { ChackraProvider } from '@chackra-ui/react'
import App from './App';
import reportWebVitals from './reportWebVitals'
import { theme } from './resources/theme'

ReactDom.render(
    <ChackraProvider theme={theme}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
        </ChackraProvider>,
        document.getElementById('root')
);

reportWebVitals();
