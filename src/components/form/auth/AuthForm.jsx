import './AuthForm.scss';
import { Link } from 'react-router-dom';

export function AuthForm() {
  return (
    <div className="auth">
      <div className="auth__wrapper">
        <div className="auth__title">
          <h1 className="auth__main">Войти в систему</h1>
          <p className="auth__text">
            Введите свой логин и пароль, чтобы авторизоваться
          </p>
        </div>

        <form className="auth-form">
          <div className="auth-form__container">
            <label className="auth-form__label" htmlFor="Llogin">
              Логин
            </label>
            <input
              className="auth-form__input"
              type="text"
              id="Llogin"
              name="login"
              placeholder="Введите свой логин"
              required
            />
          </div>

          <div className="auth-form__container">
            <label className="auth-form__label" htmlFor="Lpassword">
              Пароль
            </label>
            <input
              className="auth-form__input"
              type="password"
              id="Lpassword"
              name="password"
              placeholder="Введите свой пароль"
              required
            />
          </div>

          <div className="auth-form__forgive">
            <div className="auth-form__lost">
              <input
                className="auth-form__chekbox"
                type="checkbox"
                name="checkbox"
                id="checkbox"
              />
              <label className="auth-form__chekbox__text" htmlFor="checkbox">
                Запомнить вход
              </label>
            </div>

            <a className="auth-form__fpassword" href="#!">
              Забыли пароль?
            </a>
          </div>

          <button className="auth-form__button" type="submit">
            Войти
          </button>
        </form>
      </div>

      <div className="auth__noacc">
        <p className="auth__noacc__text">У вас нет аккаунта?</p>
        <Link className="auth__noacc__link" to="/registration">
          Зарегистрируйтесь
        </Link>
      </div>
    </div>
  );
}
