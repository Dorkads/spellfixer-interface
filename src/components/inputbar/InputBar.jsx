import { useState } from 'react';

import arrow from '../../assets/icons/others/arrow.svg';
import './InputBar.scss';

export const InputBar = ({ onSubmitText }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSubmitText(inputValue); // Передаём текст наверх
      setInputValue(''); // Чистим инпут
    }
  };


  return (
    <div className="inputbar">
      <div className="inputbar__container">
        <div className="inputbar__inner">
          <form className="inputbar__form" onSubmit={handleSubmit}>
            <input
              className="inputbar__form__input"
              type="text"
              placeholder="Введите слово, которое хотите проверить"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="inputbar__form__btn" type="submit">
              <img
                className="inputbar__form__btn__img"
                src={arrow}
                alt="Отправить"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
