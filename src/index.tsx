import * as ReactDOMClient from 'react-dom/client'
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './components/app/app';

const container = document.getElementById('root') as HTMLElement;

const root = ReactDOMClient.createRoot(container);

root.render( <App />);

reportWebVitals();
