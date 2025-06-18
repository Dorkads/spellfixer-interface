import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Auth } from '../pages/form/auth/Auth';
import './styles/main.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth />
  </StrictMode>
);
