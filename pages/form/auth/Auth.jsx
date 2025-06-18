import './Auth.scss';
import image from '../../../src/assets/images/img.jpg';

import { AuthForm } from '../../../src/components/form/auth/AuthForm';

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
            <AuthForm />
          </div>
        </div>
      </div>
    </div>
  );
}
