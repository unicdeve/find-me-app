import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const app = (
  <Suspense fallback={<p>Loading…</p>}>
    <App />
  </Suspense>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
