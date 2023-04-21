import { createRoot } from 'react-dom/client';
import { fork } from 'effector';
import { Provider } from 'effector-react/scope';
import { StrictMode } from 'react';
import { Application } from './app';

import './app/index.css';

const scope = fork();

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider value={scope}>
    <StrictMode>
      <Application />
    </StrictMode>
  </Provider>
);
