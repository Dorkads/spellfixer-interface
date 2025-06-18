import { Routes, Route } from 'react-router-dom';

import image from '../../../src/assets/images/img.jpg';

import './Auth.scss';

import { AuthForm } from '../../../src/components/form/auth/AuthForm';
import { Registration } from '../../../src/components/form/reg/Registration';
import { Form } from 'react-router-dom';

export function Auth() {
  return (
    <div className="auth">
      <div className="container">
        <div className="auth__inner">
          <div className="auth__left">
            <img
              className="auth__image"
              src={image}
              width={656}
              height={984}
              alt="main image"
            />
          </div>
          <div className="auth__right">
            <Routes>
              <Route path="/" element={<AuthForm />} />
              <Route path="/registration" element={<Registration />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
