import './Registration.scss';
import { Link } from 'react-router-dom';

export function Registration() {
  return (
    <div className="registration">
      <div className="registration__inner">
        <div className="registration__info">
          <h1 className="registration__title">Регистрация</h1>
          <p className="registration__text">
            Введите свои данные,
            <br /> чтобы зарегистрироваться
          </p>
        </div>

        <form className="registration__form">
          <div className="registration__form__container">
            <label className="registration__form__label" htmlFor="name">
              Имя
            </label>
            <input
              className="registration__form__input"
              id="name"
              type="text"
              placeholder="Введите своё имя"
            />
          </div>

          <div className="registration__form__container">
            <label className="registration__form__label" htmlFor="fam">
              Фамилия
            </label>
            <input
              className="registration__form__input"
              id="fam"
              type="text"
              placeholder="Введите свою фамилию"
            />
          </div>

          <div className="registration__form__container">
            <label className="registration__form__label" htmlFor="Rlogin">
              Логин
            </label>
            <input
              className="registration__form__input"
              id="Rlogin"
              type="text"
              placeholder="Придумайте логин"
            />
          </div>

          <div className="registration__form__container">
            <label className="registration__form__label" htmlFor="Rpassword">
              Пароль
            </label>
            <input
              className="registration__form__input"
              id="Rpassword"
              type="password"
              placeholder="Придумайте свой пароль"
            />
          </div>

          <button className="registration__form__btn">
            Зарегистрироваться
          </button>
        </form>

        <div className="registration__loggin">
          <p className="registration__loggin__text">У вас есть аккаунт?</p>
          <Link className="registration__in" to={'/'}>
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
}
