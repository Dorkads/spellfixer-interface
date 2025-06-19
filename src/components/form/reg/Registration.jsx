import './Registration.scss';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import registerUser from '../../api/post/RegistrationAPI';

export function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    login: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      console.log('Успешно зарегистрирован:', response);

      setFormData({
        name: '',
        surname: '',
        login: '',
        password: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

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

        <form className="registration__form" onSubmit={handleSubmit}>
          <div className="registration__form__container">
            <label className="registration__form__label" htmlFor="name">
              Имя
            </label>
            <input
              className="registration__form__input"
              name="name"
              value={formData.name}
              id="name"
              type="text"
              placeholder="Введите своё имя"
              onChange={handleChange}
            />
          </div>

          <div className="registration__form__container">
            <label className="registration__form__label" htmlFor="fam">
              Фамилия
            </label>
            <input
              className="registration__form__input"
              value={formData.surname}
              name="surname"
              id="fam"
              type="text"
              placeholder="Введите свою фамилию"
              onChange={handleChange}
            />
          </div>

          <div className="registration__form__container">
            <label className="registration__form__label" htmlFor="Rlogin">
              Логин
            </label>
            <input
              className="registration__form__input"
              name="login"
              value={formData.login}
              id="Rlogin"
              type="text"
              placeholder="Придумайте логин"
              onChange={handleChange}
              ы
            />
          </div>

          <div className="registration__form__container">
            <label className="registration__form__label" htmlFor="Rpassword">
              Пароль
            </label>
            <input
              className="registration__form__input"
              value={formData.password}
              name="password"
              id="Rpassword"
              type="password"
              placeholder="Придумайте свой пароль"
              onChange={handleChange}
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
