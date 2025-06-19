import './AuthForm.scss';
import { Link } from 'react-router-dom';

export function AuthForm() {
  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__title">
          <h1 className="login__main">Войти в систему</h1>
          <p className="login__text">
            Введите свой логин и пароль,<br /> чтобы авторизоваться
          </p>
        </div>

        <form className="login-form">
          <div className="login-form__container">
            <label className="login-form__label" htmlFor="Llogin">
              Логин
            </label>
            <input
              className="login-form__input"
              type="text"
              id="Llogin"
              name="login"
              placeholder="Введите свой логин"
              required
            />
          </div>

          <div className="login-form__container">
            <label className="login-form__label" htmlFor="Lpassword">
              Пароль
            </label>
            <input
              className="login-form__input"
              type="password"
              id="Lpassword"
              name="password"
              placeholder="Введите свой пароль"
              required
            />
          </div>

          <div className="login-form__forgive">
            <div className="login-form__lost">
              <input
                className="login-form__chekbox"
                type="checkbox"
                name="checkbox"
                id="checkbox"
              />
              <label className="login-form__chekbox__text" htmlFor="checkbox">
                Запомнить вход
              </label>
            </div>

            <a className="login-form__fpassword" href="#!">
              Забыли пароль?
            </a>
          </div>

          <button className="login-form__button" type="submit">
            Войти
          </button>
        </form>
      </div>

      <div className="login__noacc">
        <p className="login__noacc__text">У вас нет аккаунта?</p>
        <Link className="login__noacc__link" to="/registration">
          Зарегистрируйтесь
        </Link>
      </div>
    </div>
  );
}
