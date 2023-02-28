import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './routes/App';

const APP_CONTAINER = document.getElementById('app');
const root = createRoot(APP_CONTAINER);

root.render(<App />);
