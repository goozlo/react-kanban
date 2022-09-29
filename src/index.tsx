import * as ReactDOMClient from 'react-dom/client';
// @ts-ignore
import {BrowserRouter} from 'react-router-dom';
import App from './App';

const root = ReactDOMClient.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
);
