import './AuthForm.scss';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginUser from '../../api/get/Authorization';

export function AuthForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
      const response = await loginUser(formData);
      alert(`Добро пожаловать, ${response.user.first_name} 👋`);
      // Очистка формы:
      setFormData({ login: '', password: '' });

      navigate('/main');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__title">
          <h1 className="login__main">Войти в систему</h1>
          <p className="login__text">
            Введите свой логин и пароль,
            <br /> чтобы авторизоваться
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form__container">
            <label className="login-form__label" htmlFor="Llogin">
              Логин
            </label>
            <input
              className="login-form__input"
              type="text"
              id="Llogin"
              name="login"
              value={formData.login}
              placeholder="Введите свой логин"
              required
              onChange={handleChange}
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
              value={formData.password}
              placeholder="Введите свой пароль"
              required
              onChange={handleChange}
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
