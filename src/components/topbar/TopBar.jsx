import './TopBar.scss';
import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import light from '../../assets/icons/theme/light.svg';
import dark from '../../assets/icons/theme/dark.svg';
import avatar from '../../assets/icons/profile/gg_profile.svg';
import logout from '../../assets/icons/profile/logut.svg';

export const TopBar = () => {
  const [fullname, setFullname] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      setFullname(`${user.first_name} ${user.last_name}`);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <header className="topbar">
      <div className="topbar__container">
        <div className="topbar__inner">
          <div className="topbar__theme">
            <div className="topbar__switcher">
              <input type="checkbox" id="theme-toggle" />
              <label htmlFor="theme-toggle" className="switch">
                <span className="icon sun">
                  <img src={light} alt="Светлая тема" />
                </span>
                <span className="icon moon">
                  <img src={dark} alt="Тёмная тема" />
                </span>
                <span className="slider" />
              </label>
            </div>
          </div>

          <div className="topbar__user">
            <img className="topbar__user__avatar" src={avatar} alt="Аватар" />
            <p className="topbar__user__name">{fullname || 'Пользователь'} </p>
          </div>

          <form className="topbar__exit">
            <button
              onChange={handleLogout}
              className="topbar__exit__btn"
              type="submit"
            >
              <img
                className="topbar__exit__image"
                src={logout}
                alt="Выйти из аккаунта"
              />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};
