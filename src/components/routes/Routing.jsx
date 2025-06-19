import { Routes, Route } from 'react-router-dom';

import { Auth } from '../../../pages/form/auth/Auth.jsx';
import { AuthForm } from '../form/auth/AuthForm.jsx';
import { Registration } from '../form/reg/Registration.jsx';
import { App } from '../app/App.jsx';

export function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Auth />}>
        <Route index element={<AuthForm />} />
        <Route path="registration" element={<Registration />} />
      </Route>

      <Route path="/main" element={<App />} />
    </Routes>
  );
}
