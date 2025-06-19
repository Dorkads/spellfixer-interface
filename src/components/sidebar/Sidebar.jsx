import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__inner">
          <div className="sidebar__menu">
            <div className="sidebar__logo">
              <img
                className="sidebar__logo-SF"
                src="../../assets/logo/logo.svg"
                alt="SpellFixer"
              />
            </div>

            <nav className="sidebar__nav">
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'sidebar__nav__text active' : 'sidebar__nav__text'
                }
              >
                <img
                  className="sidebar__nav__icon"
                  src="../../assets/icons/menu/home.svg"
                  alt="Главная"
                />
                <span className="sidebar__nav__text">Главная</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'sidebar__nav__text active' : 'sidebar__nav__text'
                }
              >
                <img
                  className="sidebar__nav__icon"
                  src="../../assets/icons/menu/history.svg"
                  alt="История"
                />
                <span className="sidebar__nav__text">История</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'sidebar__nav__text active' : 'sidebar__nav__text'
                }
              >
                <img
                  className="sidebar__nav__icon"
                  src="../../assets/icons/menu/stat.svg"
                  alt="Статистика"
                />
                <span className="sidebar__nav__text">Статистика</span>
              </NavLink>
            </nav>
          </div>

          <div className="sidebar__devcall">
            <img className="sidebar__devcall__img" src="" alt="question" />
            <p className="sidebar__devcall__text">Связь с разработчиком</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
