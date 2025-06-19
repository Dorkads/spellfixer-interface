import image from '@images/images/img.jpg';
import { Outlet } from 'react-router-dom';

import './Auth.scss';

export function Auth() {
  return (
    <div className="auth">
      <div className="container">
        <div className="auth__inner">
          <div className="auth__left">
            <img
              className="auth__image"
              src={image}
              width={556}
              height={984}
              alt="main image"
            />
          </div>
          <div className="auth__right">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
