import { NavLink } from 'react-router-dom';

import { DeveloperContact } from '../developercontact/DeveloperContact';

import logo from '../../assets/logo/logo.svg';
import home from '../../assets/icons/menu/home.svg';
import history from '../../assets/icons/menu/history.svg';
import stat from '../../assets/icons/menu/stat.svg';

import './Sidebar.scss';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__inner">
          <div className="sidebar__menu">
            <div className="sidebar__logo">
              <img className="sidebar__logo-SF" src={logo} alt="SpellFixer" />
            </div>

            <nav className="sidebar__nav">
              <NavLink
                to="/main"
                className={({ isActive }) =>
                  isActive
                    ? 'sidebar__nav__inner active'
                    : 'sidebar__nav__inner'
                }
              >
                <img className="sidebar__nav__icon" src={home} alt="Главная" />
                <span className="sidebar__nav__text">Главная</span>
              </NavLink>
              <NavLink
                to="/main/history"
                className={({ isActive }) =>
                  isActive
                    ? 'sidebar__nav__inner active'
                    : 'sidebar__nav__inner'
                }
              >
                <img
                  className="sidebar__nav__icon"
                  src={history}
                  alt="История"
                />
                <span className="sidebar__nav__text">История</span>
              </NavLink>
              <NavLink
                to="/main/statistics"
                className={({ isActive }) =>
                  isActive
                    ? 'sidebar__nav__inner active'
                    : 'sidebar__nav__inner'
                }
              >
                <img
                  className="sidebar__nav__icon"
                  src={stat}
                  alt="Статистика"
                />
                <span className="sidebar__nav__text">Статистика</span>
              </NavLink>
            </nav>
          </div>

          <DeveloperContact />
        </div>
      </div>
    </aside>
  );
};
